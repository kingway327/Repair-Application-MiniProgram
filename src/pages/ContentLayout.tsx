import React, { useState } from 'react';
import MobileContainer from '@/components/MobileContainer';
import { Home, MessageSquare, ClipboardList, User } from 'lucide-react';

import HomeView from '@/views/HomeView';
import MessageView from '@/views/MessageView';
import RecordsView from '@/views/RecordsView';
import ProfileView from '@/views/ProfileView';
import RepairApplicationView from '@/views/RepairApplicationView';
import AIAgentView from '@/views/AIAgentView';
import AgreementView from '@/views/AgreementView';
import MyApplicationsView from '@/views/MyApplicationsView';
import FeedbackView from '@/views/FeedbackView';
import AboutUsView from '@/views/AboutUsView';

/**
 * 视图类型定义
 * - 主视图：底部导航栏可见
 * - 子视图：底部导航栏隐藏
 */
type MainView = 'home' | 'messages' | 'records' | 'profile';
type SubView = 'repair-application' | 'ai-agent' | 'agreement' | 'my-applications' | 'feedback' | 'about';
type ViewType = MainView | SubView;

const mainTabs: MainView[] = ['home', 'messages', 'records', 'profile'];

const ContentLayout = () => {
  const [activeView, setActiveView] = useState<ViewType>('home');

  const tabs = [
    { id: 'home', label: '首页', icon: Home },
    { id: 'messages', label: '消息', icon: MessageSquare },
    { id: 'records', label: '记录', icon: ClipboardList },
    { id: 'profile', label: '我的', icon: User },
  ] as const;

  // 判断当前是否在主视图（显示底部导航）
  const isMainView = mainTabs.includes(activeView as MainView);

  // 返回到上一个视图
  const goBack = () => setActiveView('home');
  const goBackToProfile = () => setActiveView('profile');

  // 渲染当前视图
  const renderView = () => {
    switch (activeView) {
      case 'home':
        return (
          <HomeView
            onNavigateToRepairApplication={() => setActiveView('repair-application')}
            onNavigateToAIAgent={() => setActiveView('ai-agent')}
          />
        );
      case 'messages':
        return <MessageView />;
      case 'records':
        return <RecordsView />;
      case 'profile':
        return (
          <ProfileView
            onNavigateToRecords={() => setActiveView('records')}
            onNavigateToAgreement={() => setActiveView('agreement')}
            onNavigateToMyApplications={() => setActiveView('my-applications')}
            onNavigateToFeedback={() => setActiveView('feedback')}
            onNavigateToAbout={() => setActiveView('about')}
          />
        );
      case 'repair-application':
        return <RepairApplicationView onBack={goBack} />;
      case 'ai-agent':
        return <AIAgentView onBack={goBack} />;
      case 'agreement':
        return <AgreementView onBack={goBackToProfile} />;
      case 'my-applications':
        return <MyApplicationsView onBack={goBackToProfile} />;
      case 'feedback':
        return <FeedbackView onBack={goBackToProfile} />;
      case 'about':
        return <AboutUsView onBack={goBackToProfile} />;
      default:
        return <HomeView onNavigateToRepairApplication={() => setActiveView('repair-application')} onNavigateToAIAgent={() => setActiveView('ai-agent')} />;
    }
  };

  return (
    <MobileContainer>
      {/* Content Area */}
      <div className="flex-1 overflow-hidden h-full">
        {renderView()}
      </div>

      {/* Bottom Navigation Bar - 仅在主视图时显示 */}
      {isMainView && (
        <div className="h-[80px] bg-white border-t border-gray-100 flex items-start justify-around pt-3 pb-8 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.02)] z-50">
          {tabs.map((tab) => {
            const isActive = activeView === tab.id;
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveView(tab.id)}
                className={`flex flex-col items-center justify-center p-2 rounded-xl transition-all w-16 ${isActive ? 'text-primary' : 'text-gray-400 hover:text-gray-500'
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
      )}
    </MobileContainer>
  );
};

export default ContentLayout;