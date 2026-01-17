import React, { useState } from 'react';
import { ArrowLeft, MessageSquare, Bug, Lightbulb, HelpCircle, CheckCircle } from 'lucide-react';

/**
 * 反馈类型
 */
const feedbackTypes = [
    { id: 'suggestion', label: '功能建议', icon: Lightbulb, color: 'text-yellow-500 bg-yellow-50' },
    { id: 'bug', label: 'Bug 反馈', icon: Bug, color: 'text-red-500 bg-red-50' },
    { id: 'other', label: '其他问题', icon: HelpCircle, color: 'text-blue-500 bg-blue-50' },
];

interface FeedbackViewProps {
    onBack: () => void;
}

/**
 * 意见反馈页面
 */
const FeedbackView: React.FC<FeedbackViewProps> = ({ onBack }) => {
    const [formData, setFormData] = useState({
        type: '',
        content: '',
        contact: '',
    });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.type || !formData.content) {
            alert('请选择反馈类型并填写反馈内容');
            return;
        }
        setLoading(true);
        // 模拟提交
        setTimeout(() => {
            setLoading(false);
            setSubmitted(true);
        }, 1000);
    };

    // 提交成功页面
    if (submitted) {
        return (
            <div className="flex flex-col h-full bg-gray-50">
                <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                        <CheckCircle className="w-10 h-10 text-green-500" />
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 mb-2">反馈提交成功</h2>
                    <p className="text-gray-500 mb-8">感谢您的反馈，我们会认真处理！</p>
                    <button
                        onClick={onBack}
                        className="px-8 py-3 bg-primary text-white font-medium rounded-lg shadow-custom"
                    >
                        返回
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
                <h1 className="text-xl font-bold text-gray-900">意见反馈</h1>
            </div>

            {/* Form Content */}
            <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-4 space-y-4 pb-32 no-scrollbar">
                {/* Feedback Type */}
                <div className="bg-white rounded-xl p-4 shadow-custom">
                    <label className="block text-sm font-medium text-gray-700 mb-3">反馈类型 *</label>
                    <div className="grid grid-cols-3 gap-3">
                        {feedbackTypes.map((type) => {
                            const Icon = type.icon;
                            const isSelected = formData.type === type.id;
                            return (
                                <button
                                    key={type.id}
                                    type="button"
                                    onClick={() => setFormData({ ...formData, type: type.id })}
                                    className={`p-4 rounded-xl border-2 flex flex-col items-center gap-2 transition-all ${isSelected
                                            ? 'border-primary bg-primary/5'
                                            : 'border-gray-200 hover:border-gray-300'
                                        }`}
                                >
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${type.color}`}>
                                        <Icon className="w-5 h-5" />
                                    </div>
                                    <span className={`text-sm font-medium ${isSelected ? 'text-primary' : 'text-gray-600'}`}>
                                        {type.label}
                                    </span>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Feedback Content */}
                <div className="bg-white rounded-xl p-4 shadow-custom">
                    <label className="block text-sm font-medium text-gray-700 mb-2">反馈内容 *</label>
                    <textarea
                        placeholder="请详细描述您的建议或遇到的问题，我们会认真阅读每一条反馈..."
                        rows={6}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm resize-none"
                        value={formData.content}
                        onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                    />
                    <p className="text-xs text-gray-400 mt-2 text-right">{formData.content.length}/500</p>
                </div>

                {/* Contact */}
                <div className="bg-white rounded-xl p-4 shadow-custom">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        联系方式 <span className="text-gray-400 font-normal">(可选)</span>
                    </label>
                    <input
                        type="text"
                        placeholder="如需回复，请留下手机号或邮箱"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm"
                        value={formData.contact}
                        onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                    />
                </div>

                {/* Tips */}
                <div className="bg-blue-50 rounded-xl p-4">
                    <div className="flex items-start gap-3">
                        <MessageSquare className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                        <div className="text-sm text-blue-700">
                            <p className="font-medium mb-1">温馨提示</p>
                            <p>您的反馈对我们非常重要！我们会认真阅读每一条反馈，并努力改进服务。</p>
                        </div>
                    </div>
                </div>
            </form>

            {/* Submit Button */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-100 shadow-lg">
                <button
                    type="submit"
                    onClick={handleSubmit}
                    disabled={loading}
                    className={`w-full py-3.5 bg-primary text-white font-semibold rounded-lg shadow-custom flex items-center justify-center ${loading ? 'opacity-80' : 'hover:bg-blue-600'
                        } transition-all`}
                >
                    {loading ? '提交中...' : '提交反馈'}
                </button>
            </div>
        </div>
    );
};

export default FeedbackView;
