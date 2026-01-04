// src/components/PomodoroTimer.jsx
import React, { useEffect, useRef, useState } from 'react';
import { useEDeskStore } from '../store/useEDeskStore';

export function PomodoroTimer() {
  const desks = useEDeskStore((state) => state.desks || []);
  const addSession = useEDeskStore((state) => state.addSession);

  // Durations in seconds (default 25/5)
  const DURATIONS = { focus: 25 * 60, shortBreak: 5 * 60 };

  // Component state
  const [selectedDeskId, setSelectedDeskId] = useState(desks[0]?.id ?? '');
  const [mode, setMode] = useState('focus'); // 'focus' | 'shortBreak'
  const [secondsLeft, setSecondsLeft] = useState(DURATIONS.focus);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  // Sync selected desk when desks list changes
  useEffect(() => {
    if (!selectedDeskId && desks.length) setSelectedDeskId(desks[0].id);
  }, [desks, selectedDeskId]);

  // Reset secondsLeft when mode changes
  useEffect(() => {
    setSecondsLeft(mode === 'focus' ? DURATIONS.focus : DURATIONS.shortBreak);
    setIsRunning(false);
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }, [mode]);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setSecondsLeft((s) => s - 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    };
  }, [isRunning]);

  // When timer reaches zero
  useEffect(() => {
    if (secondsLeft <= 0) {
      // Stop the timer
      setIsRunning(false);
      clearInterval(intervalRef.current);
      intervalRef.current = null;

      // If it was a focus session, log it
      if (mode === 'focus' && selectedDeskId) {
        addSession(Number(selectedDeskId));
        // small notification
        const deskName = desks.find((d) => d.id === Number(selectedDeskId))?.name || '';
        try {
          // try using notification API if available
          if (typeof Notification !== 'undefined' && Notification.permission === 'granted') {
            new Notification('Session complete', { body: `Logged session for ${deskName}` });
          }
        } catch (err) {
          // ignore
        }
        alert(`Session logged for ${deskName}`);
      }

      // Auto switch to break if focus completed
      if (mode === 'focus') setMode('shortBreak');
      else setMode('focus');
    }
  }, [secondsLeft, mode, selectedDeskId, addSession, desks]);

  const startPause = () => {
    if (!selectedDeskId) {
      alert('Please select a study desk first.');
      return;
    }
    setIsRunning((r) => !r);
  };

  const reset = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setSecondsLeft(mode === 'focus' ? DURATIONS.focus : DURATIONS.shortBreak);
  };

  const formatTime = (secs) => {
    const m = Math.floor(secs / 60).toString().padStart(2, '0');
    const s = Math.floor(secs % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-3xl shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-6 bg-linear-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
          Start Your Study With Pomodoro Technique
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Side - Timer */}
          <div className="flex-1 flex flex-col items-center justify-center">
            <div className="relative">
              <div className="w-64 h-64 rounded-full bg-linear-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow-xl">
                <div className="w-60 h-60 rounded-full bg-white flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl font-mono font-bold text-gray-800">
                      {formatTime(secondsLeft)}
                    </div>
                    <div className="text-sm text-gray-500 mt-2">
                      Upcoming: {mode === 'focus' ? '5 min Short Break' : '25 min Focus'}
                    </div>
                  </div>
                </div>
              </div>
              <button
                onClick={startPause}
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 
                          bg-linear-to-r from-blue-500 to-blue-600 text-white px-12 py-3 
                          rounded-full text-xl font-semibold shadow-lg hover:shadow-xl 
                          transition-all duration-300 hover:-translate-y-1"
              >
                {isRunning ? 'Pause' : 'Start'}
              </button>
            </div>

            {/* Mode Switcher */}
            <div className="mt-16 flex items-center gap-4 bg-gray-100 p-1 rounded-lg">
              <button
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                  mode === 'focus'
                    ? 'bg-white text-blue-600 shadow'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
                onClick={() => setMode('focus')}
              >
                Focus
              </button>
              <button
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                  mode === 'shortBreak'
                    ? 'bg-white text-blue-600 shadow'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
                onClick={() => setMode('shortBreak')}
              >
                Break
              </button>
            </div>
          </div>

          {/* Right Side - Controls */}
          <div className="flex-1 flex flex-col justify-center space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Select Study Desk
              </label>
              <select
                className="w-full p-3 border border-gray-200 rounded-xl bg-gray-50 
                          focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={selectedDeskId}
                onChange={(e) => setSelectedDeskId(e.target.value ? Number(e.target.value) : '')}
              >
                <option value="">Choose your subject</option>
                {desks.map((desk) => (
                  <option key={desk.id} value={desk.id}>
                    {desk.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-600 mb-2">Quick Focus Lengths</h3>
              <div className="grid grid-cols-3 gap-3">
                {[15, 25, 50].map((mins) => (
                  <button
                    key={mins}
                    onClick={() => {
                      setMode('focus');
                      setSecondsLeft(mins * 60);
                    }}
                    className="py-3 bg-gray-50 rounded-xl border border-gray-200 
                              hover:bg-blue-50 hover:border-blue-200 hover:text-blue-600 
                              transition-all duration-200"
                  >
                    {mins}m
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-600 mb-2">Controls</h3>
              <div className="flex gap-3">
                <button
                  onClick={reset}
                  className="flex-1 py-3 bg-gray-100 rounded-xl text-gray-700 
                            hover:bg-gray-200 transition-all duration-200"
                >
                  Reset Timer
                </button>
                <button
                  onClick={() => {
                    reset();
                    setMode(mode === 'focus' ? 'shortBreak' : 'focus');
                  }}
                  className="flex-1 py-3 bg-gray-100 rounded-xl text-gray-700 
                            hover:bg-gray-200 transition-all duration-200"
                >
                  Skip to {mode === 'focus' ? 'Break' : 'Focus'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PomodoroTimer;