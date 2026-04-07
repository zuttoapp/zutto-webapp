import { useState } from 'react';

function BottomNavigation({ onTabChange }) {
  const [activeTab, setActiveTab] = useState('home');

  const tabs = [
    { id: 'home', icon: '🏠', label: 'Home' },
    { id: 'rewards', icon: '🎯', label: 'Rewards' },
    { id: 'location', icon: '📍', label: 'Location' },
    { id: 'profile', icon: '👤', label: 'Profile' },
    { id: 'search', icon: '🔍', label: 'Search' },
  ];

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    onTabChange?.(tabId);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2">
      <div className="flex justify-around items-center">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={`flex flex-col items-center p-2 ${
              activeTab === tab.id ? 'text-green-500' : 'text-gray-400'
            }`}
          >
            <div className="w-6 h-6 mb-1">{tab.icon}</div>
          </button>
        ))}
      </div>
    </div>
  );
}

export default BottomNavigation;
