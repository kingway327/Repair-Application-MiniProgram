import React, { useState, useEffect } from 'react';
import { Bell, Wrench, Bot, Activity, Calendar } from 'lucide-react';

interface HomeViewProps {
  onNavigateToRepairApplication?: () => void;
  onNavigateToAIAgent?: () => void;
}

const HomeView: React.FC<HomeViewProps> = ({
  onNavigateToRepairApplication,
  onNavigateToAIAgent
}) => {
  // Simple carousel state
  const [currentSlide, setCurrentSlide] = useState(0);
  const news = [
    /* 注意：这里指支持jpg格式的图片 */
    { id: 1, title: "义务维修队第九次活动顺利开展", image: "https://pic1.imgdb.cn/item/6964b19ec02d09d8013ebf7d.jpg" },
    { id: 2, title: "计院电脑义诊活动圆满结束", image: "https://pic1.imgdb.cn/item/6964b1e9c02d09d8013ebf92.jpg" },
    { id: 3, title: "关于夏季电器使用安全的温馨提示", image: "https://pic1.imgdb.cn/item/6964b1e9c02d09d8013ebf93.jpg" },
    { id: 4, title: "维修智能体上线内测通知", image: "https://images.unsplash.com/photo-1527443195645-1133f7f28990?auto=format&fit=crop&q=80&w=400&h=200" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % news.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [news.length]);

  return (
    <div className="flex flex-col h-full bg-gray-50 overflow-y-auto pb-20 no-scrollbar">
      {/* Header */}
      <div className="bg-white px-5 pt-12 pb-4 sticky top-0 z-10 shadow-sm">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-xl font-bold text-gray-900">义务维修队</h1>
            <p className="text-xs text-gray-500">用心服务每一位同学</p>
          </div>
          <Bell className="w-6 h-6 text-gray-700" />
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* News Carousel */}
        <div className="relative w-full h-40 rounded-xl overflow-hidden shadow-custom bg-white">
          {news.map((item, index) => (
            <div
              key={item.id}
              className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
            >
              <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white text-sm font-medium truncate">{item.title}</p>
              </div>
            </div>
          ))}
          <div className="absolute bottom-2 right-4 flex space-x-1">
            {news.map((_, idx) => (
              <div
                key={idx}
                className={`w-1.5 h-1.5 rounded-full transition-all ${idx === currentSlide ? 'bg-white w-3' : 'bg-white/50'}`}
              />
            ))}
          </div>
        </div>

        {/* Event Notification Card */}
        <div className="bg-white rounded-xl p-5 shadow-custom border-l-4 border-primary relative overflow-hidden">
          <div className="absolute top-0 right-0 p-2 opacity-5">
            <Activity size={80} />
          </div>
          <div className="flex items-start gap-3 relative z-10">
            <div className="bg-blue-50 p-2 rounded-lg">
              <Calendar className="text-primary w-5 h-5" />
            </div>
            <div>
              <h3 className="text-gray-900 font-bold mb-1">第10次义务维修活动</h3>
              <p className="text-sm text-gray-600 mb-2">将于本周末在教三-101进行，点击下方按钮立即申请。</p>
              <div className="inline-flex items-center text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded">
                2025年12月27日 15:00-18:00
              </div>
            </div>
          </div>
        </div>

        {/* Main Actions */}
        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={onNavigateToRepairApplication}
            className="bg-white p-5 rounded-xl shadow-custom flex flex-col items-center justify-center gap-3 active:scale-95 transition-transform border border-transparent hover:border-primary/20"
          >
            <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-lg shadow-primary/30">
              <Wrench className="text-white w-7 h-7" />
            </div>
            <div className="text-center">
              <div className="font-bold text-gray-900">申请义务维修</div>
              <div className="text-xs text-gray-400 mt-1">填写表单申请维修</div>
            </div>
          </button>

          <button
            onClick={onNavigateToAIAgent}
            className="bg-white p-5 rounded-xl shadow-custom flex flex-col items-center justify-center gap-3 active:scale-95 transition-transform border border-transparent hover:border-violet-500/20"
          >
            <div className="w-14 h-14 bg-gradient-to-br from-violet-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/30">
              <Bot className="text-white w-7 h-7" />
            </div>
            <div className="text-center">
              <div className="font-bold text-gray-900">问维修智能体</div>
              <div className="text-xs text-gray-400 mt-1">AI 快速诊断问题</div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeView;