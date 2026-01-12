import React, { useState } from 'react';
import MobileContainer from '@/components/MobileContainer';
import { Home, MessageSquare, ClipboardList, User } from 'lucide-react';

import HomeView from '@/views/HomeView';
import MessageView from '@/views/MessageView';
import RecordsView from '@/views/RecordsView';
import ProfileView from '@/views/ProfileView';

const ContentLayout = () => {
  const [activeTab, setActiveTab] = useState<'home' | 'messages' | 'records' | 'profile'>('home');

  const tabs = [
    { id: 'home', label: '首页', icon: Home },
    { id: 'messages', label: '消息', icon: MessageSquare },
    { id: 'records', label: '记录', icon: ClipboardList },
    { id: 'profile', label: '我的', icon: User },
  ] as const;

  return (
    <MobileContainer>
      {/* Content Area */}
      <div className="flex-1 overflow-hidden h-full">
        {activeTab === 'home' && <HomeView />}
        {activeTab === 'messages' && <MessageView />}
        {activeTab === 'records' && <RecordsView />}
        {activeTab === 'profile' && <ProfileView onNavigateToRecords={() => setActiveTab('records')} />}
      </div>

      {/* Bottom Navigation Bar */}
      <div className="h-[80px] bg-white border-t border-gray-100 flex items-start justify-around pt-3 pb-8 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.02)] z-50">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex flex-col items-center justify-center p-2 rounded-xl transition-all w-16 ${
                isActive ? 'text-primary' : 'text-gray-400 hover:text-gray-500'
              }`}
            >
              <div className={`mb-1 transition-transform duration-200 ${isActive ? 'scale-110' : 'scale-100'}`}>
                <Icon size={24} strokeWidth={isActive ? 2.5 : 2} fill={isActive && tab.id === 'home' ? 'currentColor' : 'none'} className={isActive && tab.id === 'home' ? 'opacity-20' : ''} />
              </div>
              <span className={`text-[10px] font-medium ${isActive ? 'font-bold' : ''}`}>
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </MobileContainer>
  );
};

export default ContentLayout;