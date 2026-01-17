import React from 'react';
import { ArrowLeft, Calendar, Clock, ChevronRight, FileText, AlertCircle, CheckCircle, XCircle } from 'lucide-react';

/**
 * 申请状态类型
 */
type ApplicationStatus = '待审核' | '已通过' | '已拒绝' | '维修中' | '已完成';

/**
 * 申请记录数据
 */
interface Application {
    id: string;
    device: string;
    issue: string;
    date: string;
    time: string;
    status: ApplicationStatus;
    createTime: string;
}

/**
 * Mock 申请数据
 */
const mockApplications: Application[] = [
    {
        id: 'APP2401001',
        device: '联想 ThinkPad X1',
        issue: '开机蓝屏，无法进入系统',
        date: '2025-01-20',
        time: '14:00-15:00',
        status: '待审核',
        createTime: '2025-01-17 10:30',
    },
    {
        id: 'APP2312003',
        device: 'iPhone 13',
        issue: '电池健康度低，续航差',
        date: '2025-01-15',
        time: '10:00-11:00',
        status: '已通过',
        createTime: '2025-01-10 15:20',
    },
    {
        id: 'APP2312001',
        device: '小米 14',
        issue: '屏幕触控失灵',
        date: '2025-01-08',
        time: '15:00-16:00',
        status: '已完成',
        createTime: '2025-01-05 09:15',
    },
];

/**
 * 状态颜色和图标
 */
const getStatusStyle = (status: ApplicationStatus) => {
    switch (status) {
        case '待审核':
            return { color: 'text-orange-600 bg-orange-50 border-orange-100', icon: Clock };
        case '已通过':
            return { color: 'text-blue-600 bg-blue-50 border-blue-100', icon: CheckCircle };
        case '已拒绝':
            return { color: 'text-red-600 bg-red-50 border-red-100', icon: XCircle };
        case '维修中':
            return { color: 'text-purple-600 bg-purple-50 border-purple-100', icon: AlertCircle };
        case '已完成':
            return { color: 'text-green-600 bg-green-50 border-green-100', icon: CheckCircle };
        default:
            return { color: 'text-gray-600 bg-gray-50 border-gray-100', icon: FileText };
    }
};

interface MyApplicationsViewProps {
    onBack: () => void;
}

/**
 * 我的申请列表页面
 */
const MyApplicationsView: React.FC<MyApplicationsViewProps> = ({ onBack }) => {
    return (
        <div className="flex flex-col h-full bg-gray-50">
            {/* Header */}
            <div className="bg-white px-5 pt-12 pb-4 border-b border-gray-100 flex items-center gap-3 sticky top-0 z-10">
                <button onClick={onBack} className="p-1 -ml-1">
                    <ArrowLeft className="w-6 h-6 text-gray-700" />
                </button>
                <h1 className="text-xl font-bold text-gray-900">我的申请</h1>
            </div>

            {/* Applications List */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 no-scrollbar">
                {mockApplications.map((app) => {
                    const statusStyle = getStatusStyle(app.status);
                    const StatusIcon = statusStyle.icon;
                    return (
                        <div
                            key={app.id}
                            className="bg-white p-4 rounded-xl shadow-custom border border-gray-100 active:scale-[0.99] transition-transform cursor-pointer"
                        >
                            {/* Header */}
                            <div className="flex justify-between items-center mb-3 pb-3 border-b border-gray-50">
                                <div className="text-xs text-gray-400 font-mono">{app.id}</div>
                                <span
                                    className={`text-xs px-2 py-1 rounded-full border font-medium flex items-center gap-1 ${statusStyle.color}`}
                                >
                                    <StatusIcon className="w-3 h-3" />
                                    {app.status}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="space-y-2">
                                <h3 className="font-bold text-gray-900">{app.device}</h3>
                                <p className="text-sm text-gray-500 line-clamp-2">{app.issue}</p>
                            </div>

                            {/* Footer */}
                            <div className="flex justify-between items-center mt-4 pt-3 border-t border-gray-50">
                                <div className="flex items-center gap-4 text-xs text-gray-400">
                                    <span className="flex items-center gap-1">
                                        <Calendar className="w-3.5 h-3.5" />
                                        {app.date}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Clock className="w-3.5 h-3.5" />
                                        {app.time}
                                    </span>
                                </div>
                                <ChevronRight className="w-5 h-5 text-gray-300" />
                            </div>
                        </div>
                    );
                })}

                {/* Empty State */}
                {mockApplications.length === 0 && (
                    <div className="flex flex-col items-center justify-center py-16 text-gray-400">
                        <FileText className="w-16 h-16 mb-4 opacity-50" />
                        <p>暂无申请记录</p>
                    </div>
                )}

                <div className="p-4 text-center text-gray-400 text-sm">
                    共 {mockApplications.length} 条申请记录
                </div>
            </div>
        </div>
    );
};

export default MyApplicationsView;
