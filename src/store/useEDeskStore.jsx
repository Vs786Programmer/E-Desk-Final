import { create } from 'zustand';

export const useEDeskStore = create((set) => ({
  // 1. Your Study Desks
  desks: [
    { id: 1, name: 'Maths' },
    { id: 2, name: 'English' },
    { id: 3, name: 'Physics' },
    // You'll add a function to add/remove these later
  ],
  
  // 2. Your Logged Sessions
  sessions: [], // Example session: { deskId: 1, duration: 25, completedAt: 'timestamp' }

  // 3. The "Action" to log a new session
  addSession: (deskId) =>
    set((state) => {
      // Find the desk name for context (optional but good)
      const desk = state.desks.find((d) => d.id === deskId);
      if (!desk) return state; // Safety check

      const newSession = {
        deskId: deskId,
        deskName: desk.name, // Store the name for easier display later
        duration: 25, // Or get from timer settings
        completedAt: new Date().toISOString(),
      };

      return {
        sessions: [...state.sessions, newSession],
      };
    }),
}));