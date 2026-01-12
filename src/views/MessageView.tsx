import React from 'react';
import { MessageSquare, BellRing, System } from 'lucide-react';

const MessageView = () => {
  const messages = [
    { id: 1, type: 'system', title: '维修状态更新', desc: '您的订单 20240501001 已完成维修，请前往活动中心领取。', time: '10:30', read: false },
    { id: 2, type: 'chat', title: '维修助手', desc: '您好，请问您关于上周维修的反馈我们收到了吗？', time: '昨天', read: true },
    { id: 3, type: 'notice', title: '活动提醒', desc: '本周五下午将会有电脑清灰专场活动。', time: '周一', read: true },
  ];

  return (
    <div className="flex flex-col h-full bg-gray-50">
      <div className="bg-white px-5 pt-12 pb-4 border-b border-gray-100 sticky top-0 z-10">
        <h1 className="text-xl font-bold text-gray-900">消息中心</h1>
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar">
        {messages.map((msg) => (
          <div key={msg.id} className="flex px-5 py-4 bg-white border-b border-gray-50 active:bg-gray-50 transition-colors cursor-pointer">
            <div className="relative">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white shrink-0 ${
                msg.type === 'system' ? 'bg-blue-500' : 
                msg.type === 'chat' ? 'bg-emerald-500' : 'bg-orange-500'
              }`}>
                {msg.type === 'system' && <BellRing size={20} />}
                {msg.type === 'chat' && <MessageSquare size={20} />}
                {msg.type === 'notice' && <BellRing size={20} />}
              </div>
              {!msg.read && (
                <div className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></div>
              )}
            </div>
            <div className="ml-4 flex-1 min-w-0">
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-semibold text-gray-900 truncate">{msg.title}</h3>
                <span className="text-xs text-gray-400 ml-2 shrink-0">{msg.time}</span>
              </div>
              <p className="text-sm text-gray-500 truncate">{msg.desc}</p>
            </div>
          </div>
        ))}
        
        <div className="p-8 text-center text-gray-400 text-sm">
          没有更多消息了
        </div>
      </div>
    </div>
  );
};

export default MessageView;