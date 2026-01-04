import React, { useState } from 'react';
import { usePWAInstall } from '../hooks/usePWA';
import { HiOutlineArrowDownTray, HiOutlineXMark } from 'react-icons/hi2';

export default function PWAInstallPrompt() {
  const { isInstallable, isInstalled, installApp } = usePWAInstall();
  const [dismissed, setDismissed] = useState(false);

  if (!isInstallable || isInstalled || dismissed) {
    return null;
  }

  const handleInstall = async () => {
    const success = await installApp();
    if (success) {
      setDismissed(true);
    }
  };

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:bottom-6 sm:right-6 sm:left-auto sm:max-w-sm 
                    bg-linear-to-r from-blue-600 to-blue-500 text-white rounded-xl shadow-lg
                    p-4 sm:p-5 animate-slideUp z-50">
      <div className="flex items-start gap-3">
        <div className="flex-1">
          <h3 className="font-semibold text-sm sm:text-base mb-1">
            Install EDesk
          </h3>
          <p className="text-xs sm:text-sm text-blue-100 mb-3">
            Add EDesk to your home screen for quick access and offline support.
          </p>
          <div className="flex gap-2">
            <button
              onClick={handleInstall}
              className="flex items-center gap-2 bg-white text-blue-600 px-3 py-1.5 
                        rounded-lg text-xs sm:text-sm font-medium hover:bg-blue-50
                        transition-colors"
            >
              <HiOutlineArrowDownTray className="h-4 w-4" />
              Install
            </button>
            <button
              onClick={() => setDismissed(true)}
              className="px-3 py-1.5 text-xs sm:text-sm font-medium 
                        hover:bg-blue-700 rounded-lg transition-colors"
            >
              Later
            </button>
          </div>
        </div>
        <button
          onClick={() => setDismissed(true)}
          className="shrink-0 text-blue-100 hover:text-white transition-colors"
        >
          <HiOutlineXMark className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
