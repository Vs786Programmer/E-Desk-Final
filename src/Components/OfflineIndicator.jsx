import React from 'react';
import { usePWAOffline } from '../hooks/usePWA';

export default function OfflineIndicator() {
  const { isOnline } = usePWAOffline();

  if (isOnline) {
    return null;
  }

  return (
    <div className="fixed top-16 left-0 right-0 bg-yellow-500 text-white py-2 px-4 
                    flex items-center justify-center gap-2 shadow-md z-40">
      <span className="text-sm font-medium">You are offline - Using cached data</span>
    </div>
  );
}
