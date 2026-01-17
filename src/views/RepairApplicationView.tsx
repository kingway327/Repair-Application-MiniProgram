import React, { useState } from 'react';
import { ArrowLeft, Monitor, Smartphone, Gamepad2, Camera, X, Calendar, Clock, CheckCircle } from 'lucide-react';

/**
 * 设备类型选项
 */
const deviceTypes = [
    { id: 'laptop', label: '电脑', icon: Monitor },
    { id: 'phone', label: '手机', icon: Smartphone },
    { id: 'other', label: '其他', icon: Gamepad2 },
];

/**
 * 可预约时段
 */
const timeSlots = [
    '09:00-10:00',
    '10:00-11:00',
    '11:00-12:00',
    '14:00-15:00',
    '15:00-16:00',
    '16:00-17:00',
];

interface RepairApplicationViewProps {
    onBack: () => void;
}

/**
 * 维修申请表单页面
 */
const RepairApplicationView: React.FC<RepairApplicationViewProps> = ({ onBack }) => {
    const [formData, setFormData] = useState({
        deviceType: '',
        brand: '',
        model: '',
        issue: '',
        date: '',
        timeSlot: '',
    });
    const [images, setImages] = useState<string[]>([]);
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    // 模拟图片选择（只做UI展示）
    const handleImageSelect = () => {
        if (images.length >= 3) return;
        // 添加一个占位图片URL模拟选择
        const mockImageUrl = `https://picsum.photos/200/200?random=${Date.now()}`;
        setImages([...images, mockImageUrl]);
    };

    const removeImage = (index: number) => {
        setImages(images.filter((_, i) => i !== index));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.deviceType || !formData.issue || !formData.date || !formData.timeSlot) {
            alert('请填写完整信息');
            return;
        }
        setLoading(true);
        // 模拟提交
        setTimeout(() => {
            setLoading(false);
            setSubmitted(true);
        }, 1500);
    };

    // 提交成功页面
    if (submitted) {
        return (
            <div className="flex flex-col h-full bg-gray-50">
                <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                        <CheckCircle className="w-10 h-10 text-green-500" />
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 mb-2">申请提交成功</h2>
                    <p className="text-gray-500 mb-8">我们会尽快审核您的申请，请留意消息通知</p>
                    <button
                        onClick={onBack}
                        className="px-8 py-3 bg-primary text-white font-medium rounded-lg shadow-custom"
                    >
                        返回首页
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col h-full bg-gray-50">
            {/* Header */}
            <div className="bg-white px-5 pt-12 pb-4 border-b border-gray-100 flex items-center gap-3 sticky top-0 z-10">
                <button onClick={onBack} className="p-1 -ml-1">
                    <ArrowLeft className="w-6 h-6 text-gray-700" />
                </button>
                <h1 className="text-xl font-bold text-gray-900">申请义务维修</h1>
            </div>

            {/* Form Content */}
            <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-4 space-y-4 pb-32 no-scrollbar">
                {/* 设备类型 */}
                <div className="bg-white rounded-xl p-4 shadow-custom">
                    <label className="block text-sm font-medium text-gray-700 mb-3">设备类型 *</label>
                    <div className="grid grid-cols-3 gap-3">
                        {deviceTypes.map((type) => {
                            const Icon = type.icon;
                            const isSelected = formData.deviceType === type.id;
                            return (
                                <button
                                    key={type.id}
                                    type="button"
                                    onClick={() => setFormData({ ...formData, deviceType: type.id })}
                                    className={`p-4 rounded-xl border-2 flex flex-col items-center gap-2 transition-all ${isSelected
                                            ? 'border-primary bg-primary/5 text-primary'
                                            : 'border-gray-200 text-gray-600 hover:border-gray-300'
                                        }`}
                                >
                                    <Icon className="w-6 h-6" />
                                    <span className="text-sm font-medium">{type.label}</span>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* 设备信息 */}
                <div className="bg-white rounded-xl p-4 shadow-custom space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">品牌</label>
                        <input
                            type="text"
                            placeholder="如：联想、苹果、小米"
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm"
                            value={formData.brand}
                            onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">型号</label>
                        <input
                            type="text"
                            placeholder="如：ThinkPad X1、iPhone 13"
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm"
                            value={formData.model}
                            onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                        />
                    </div>
                </div>

                {/* 故障描述 */}
                <div className="bg-white rounded-xl p-4 shadow-custom">
                    <label className="block text-sm font-medium text-gray-700 mb-2">故障描述 *</label>
                    <textarea
                        placeholder="请详细描述您遇到的问题，例如：开机后蓝屏、无法充电、屏幕闪烁等"
                        rows={4}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm resize-none"
                        value={formData.issue}
                        onChange={(e) => setFormData({ ...formData, issue: e.target.value })}
                    />
                </div>

                {/* 图片上传 */}
                <div className="bg-white rounded-xl p-4 shadow-custom">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        上传图片 <span className="text-gray-400 font-normal">(可选，最多3张)</span>
                    </label>
                    <div className="flex gap-3 flex-wrap">
                        {images.map((img, index) => (
                            <div key={index} className="relative w-20 h-20">
                                <img src={img} alt="上传图片" className="w-full h-full object-cover rounded-lg" />
                                <button
                                    type="button"
                                    onClick={() => removeImage(index)}
                                    className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center shadow-md"
                                >
                                    <X className="w-4 h-4" />
                                </button>
                            </div>
                        ))}
                        {images.length < 3 && (
                            <button
                                type="button"
                                onClick={handleImageSelect}
                                className="w-20 h-20 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center text-gray-400 hover:border-primary hover:text-primary transition-colors"
                            >
                                <Camera className="w-6 h-6" />
                                <span className="text-xs mt-1">添加</span>
                            </button>
                        )}
                    </div>
                </div>

                {/* 预约时间 */}
                <div className="bg-white rounded-xl p-4 shadow-custom space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">预约日期 *</label>
                        <div className="relative">
                            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                type="date"
                                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm"
                                value={formData.date}
                                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">预约时段 *</label>
                        <div className="grid grid-cols-3 gap-2">
                            {timeSlots.map((slot) => {
                                const isSelected = formData.timeSlot === slot;
                                return (
                                    <button
                                        key={slot}
                                        type="button"
                                        onClick={() => setFormData({ ...formData, timeSlot: slot })}
                                        className={`py-2 px-3 rounded-lg border text-sm font-medium transition-all ${isSelected
                                                ? 'border-primary bg-primary text-white'
                                                : 'border-gray-200 text-gray-600 hover:border-gray-300'
                                            }`}
                                    >
                                        {slot}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* 联系方式确认 */}
                <div className="bg-white rounded-xl p-4 shadow-custom">
                    <label className="block text-sm font-medium text-gray-700 mb-2">联系方式</label>
                    <div className="flex items-center justify-between py-2">
                        <span className="text-gray-600 text-sm">手机号</span>
                        <span className="text-gray-900 font-medium">138****8888</span>
                    </div>
                    <p className="text-xs text-gray-400">维修进度将通过此手机号通知您</p>
                </div>
            </form>

            {/* 底部提交按钮 */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-100 shadow-lg">
                <button
                    type="submit"
                    onClick={handleSubmit}
                    disabled={loading}
                    className={`w-full py-3.5 bg-primary text-white font-semibold rounded-lg shadow-custom flex items-center justify-center ${loading ? 'opacity-80' : 'hover:bg-blue-600'
                        } transition-all`}
                >
                    {loading ? '提交中...' : '提交申请'}
                </button>
            </div>
        </div>
    );
};

export default RepairApplicationView;
