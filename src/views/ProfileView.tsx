import React, { useState } from 'react';
import { User, ChevronRight, FileText, ClipboardList, Clock, Info, MessageSquareWarning, Settings, Camera, Edit2 } from 'lucide-react';

const ProfileView = ({ onNavigateToRecords }: { onNavigateToRecords: () => void }) => {
  const [showEdit, setShowEdit] = useState(false);
  const user = {
    name: "张三",
    studentId: "32601999",
    avatar: "https://pic1.imgdb.cn/item/6964b31fc02d09d8013ebfc8.jpg",
    college: "计算机与计算科学学院"
  };

  const MenuLink = ({ icon: Icon, label, onClick }: { icon: any, label: string, onClick?: () => void }) => (
    <button 
      onClick={onClick}
      className="w-full flex items-center justify-between p-4 bg-white active:bg-gray-50 transition-colors border-b border-gray-50 last:border-0"
    >
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-600">
          <Icon size={18} />
        </div>
        <span className="text-gray-900 font-medium text-sm">{label}</span>
      </div>
      <ChevronRight size={18} className="text-gray-300" />
    </button>
  );

  if (showEdit) {
    return (
      <div className="flex flex-col h-full bg-gray-50">
        <div className="bg-white px-5 pt-12 pb-4 border-b border-gray-100 flex items-center gap-2 sticky top-0 z-10">
          <button onClick={() => setShowEdit(false)} className="text-gray-600 text-sm font-medium">返回</button>
          <h1 className="text-xl font-bold text-gray-900">我的信息</h1>
        </div>
        <div className="p-5 space-y-4">
           {/* 模拟编辑表单 */}
           <div className="bg-white p-6 rounded-xl shadow-sm text-center">
             <div className="relative inline-block mb-4">
                <img src={user.avatar} className="w-20 h-20 rounded-full border-2 border-primary" alt="avatar"/>
                <div className="absolute bottom-0 right-0 bg-primary p-1.5 rounded-full text-white cursor-pointer"><Camera size={14}/></div>
             </div>
             <p className="text-xs text-gray-400">点击修改头像</p>
           </div>
           
           <div className="bg-white rounded-xl overflow-hidden shadow-sm">
             <div className="p-4 border-b border-gray-50 flex justify-between">
                <span className="text-gray-500 text-sm">昵称</span>
                <span className="text-gray-900 text-sm font-medium">张三的昵称</span>
             </div>
             <div className="p-4 border-b border-gray-50 flex justify-between">
                <span className="text-gray-500 text-sm">姓名</span>
                <span className="text-gray-900 text-sm font-medium">{user.name}</span>
             </div>
             <div className="p-4 border-b border-gray-50 flex justify-between">
                <span className="text-gray-500 text-sm">学号</span>
                <span className="text-gray-900 text-sm font-medium">{user.studentId}</span>
             </div>
             <div className="p-4 flex justify-between">
                <span className="text-gray-500 text-sm">手机号</span>
                <span className="text-gray-900 text-sm font-medium">13888888888</span>
             </div>
           </div>
           <button className="w-full py-3 bg-primary text-white rounded-lg font-medium shadow-custom">保存修改</button>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col h-full bg-gray-50">
      {/* Header Info */}
      <div className="bg-white pt-16 pb-8 px-6 rounded-b-[2rem] shadow-sm relative z-0">
        <div className="flex items-center gap-4">
          <div className="relative">
            <img 
              src={user.avatar} 
              alt="Avatar" 
              className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-md"
            />
            <div className="absolute bottom-0 right-0 w-5 h-5 bg-green-500 border-2 border-white rounded-full"></div>
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              {user.name}
              <span className="text-xs font-normal text-primary bg-primary/10 px-2 py-0.5 rounded-full border border-primary/20">已认证</span>
            </h2>
            <p className="text-gray-500 text-sm mt-1">{user.college}</p>
            <p className="text-gray-400 text-xs font-mono mt-0.5">ID: {user.studentId}</p>
          </div>
          <Settings className="text-gray-400 hover:text-gray-600 transition-colors" />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4 mt-2 relative z-10 pb-20 no-scrollbar">
        {/* 快速统计或卡片可以放在这里 */}
        
        {/* Menu Group 1 */}
        <div className="bg-white rounded-xl shadow-custom overflow-hidden">
          <MenuLink icon={FileText} label="维修协议" />
          <MenuLink icon={ClipboardList} label="我的申请" />
          <MenuLink icon={Clock} label="维修记录" onClick={onNavigateToRecords} />
        </div>

        {/* Menu Group 2 */}
        <div className="bg-white rounded-xl shadow-custom overflow-hidden">
          <MenuLink icon={User} label="我的信息" onClick={() => setShowEdit(true)} />
          <MenuLink icon={MessageSquareWarning} label="意见反馈" />
          <MenuLink icon={Info} label="关于我们" />
        </div>
        
        <p className="text-center text-xs text-gray-400 pt-4">版本 v1.0.0</p>
      </div>
    </div>
  );
};

export default ProfileView;