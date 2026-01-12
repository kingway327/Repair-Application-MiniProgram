import React from 'react';
import { Calendar, Monitor, Smartphone, Watch } from 'lucide-react';

// Mock Data
const records = [
  { id: 'R24050101', date: '2024-05-15', status: '待维修', device: '联想小新 Pro 13', issue: '蓝屏，无法开机，疑似系统崩溃', type: 'laptop' },
  { id: 'R24042803', date: '2024-04-28', status: '维修中', device: ' iPhone 13', issue: '电池健康度低，需要更换电池', type: 'phone' },
  { id: 'R24031509', date: '2024-03-15', status: '已完成', device: '罗技 G304 鼠标', issue: '左键双击，滚轮失灵', type: 'other' },
];

const statusColor = (status: string) => {
  switch (status) {
    case '待维修': return 'bg-orange-50 text-orange-600 border-orange-100';
    case '维修中': return 'bg-blue-50 text-blue-600 border-blue-100';
    case '已完成': return 'bg-green-50 text-green-600 border-green-100';
    default: return 'bg-gray-50 text-gray-600';
  }
};

const DeviceIcon = ({ type }: { type: string }) => {
  switch(type) {
    case 'laptop': return <Monitor className="w-5 h-5" />;
    case 'phone': return <Smartphone className="w-5 h-5" />;
    default: return <Watch className="w-5 h-5" />; // Generic
  }
};

const RecordsView = () => {
  return (
    <div className="flex flex-col h-full bg-gray-50">
      <div className="bg-white px-5 pt-12 pb-4 border-b border-gray-100 sticky top-0 z-10">
        <h1 className="text-xl font-bold text-gray-900">维修记录</h1>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4 no-scrollbar">
        {records.map((record) => (
          <div key={record.id} className="bg-white p-4 rounded-xl shadow-custom border border-gray-100 transform transition-all active:scale-[0.99]">
            <div className="flex justify-between items-center mb-3 pb-3 border-b border-gray-50">
              <div className="flex items-center text-sm text-gray-500">
                <Calendar className="w-4 h-4 mr-1.5" />
                {record.date}
              </div>
              <span className={`text-xs px-2 py-1 rounded-full border font-medium ${statusColor(record.status)}`}>
                {record.status}
              </span>
            </div>
            
            <div className="flex gap-4">
              <div className="w-16 h-16 bg-gray-50 rounded-lg flex items-center justify-center text-gray-400 shrink-0">
                <DeviceIcon type={record.type} />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-gray-900 mb-1 truncate">{record.device}</h3>
                <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed">{record.issue}</p>
              </div>
            </div>
            
            <div className="mt-4 flex justify-end">
              <button className="text-xs px-3 py-1.5 rounded-full border border-gray-300 text-gray-600 font-medium hover:bg-gray-50">
                查看详情
              </button>
            </div>
          </div>
        ))}
        
         <div className="p-4 text-center text-gray-400 text-sm">
          仅展示最近半年的记录
        </div>
      </div>
    </div>
  );
};

export default RecordsView;