import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeft, Send, Bot, User, Sparkles } from 'lucide-react';

/**
 * 消息类型
 */
interface Message {
    id: string;
    type: 'user' | 'ai';
    content: string;
    timestamp: Date;
}

/**
 * 预设的常见问题和回答
 */
const faqResponses: Record<string, string> = {
    '电脑蓝屏怎么办': '电脑蓝屏通常是由以下原因造成的：\n\n1. **内存问题**：尝试重新插拔内存条\n2. **驱动冲突**：进入安全模式，卸载最近安装的驱动\n3. **硬盘故障**：运行磁盘检测工具\n4. **系统损坏**：可能需要重装系统\n\n建议您先记录蓝屏代码，然后提交维修申请，我们的技术人员会帮您诊断。',
    '手机充不进电': '手机无法充电可能有以下原因：\n\n1. **充电口脏污**：用牙签轻轻清理充电口灰尘\n2. **数据线损坏**：尝试更换充电线\n3. **充电头故障**：更换原装充电器测试\n4. **电池老化**：电池健康度低于80%建议更换\n\n如果以上方法无效，建议提交维修申请让我们帮您检测。',
    '屏幕闪烁': '屏幕闪烁问题分析：\n\n**如果是电脑屏幕：**\n- 检查显示线缆连接是否牢固\n- 更新显卡驱动\n- 调整刷新率设置\n\n**如果是手机屏幕：**\n- 检查是否开启了自动亮度\n- 重启设备尝试\n- 可能是屏幕排线松动\n\n持续闪烁可能是硬件问题，建议提交维修申请。',
    '电脑很慢': '电脑运行缓慢的优化建议：\n\n1. **清理启动项**：禁用不必要的开机自启程序\n2. **磁盘清理**：删除临时文件和缓存\n3. **升级硬件**：\n   - 增加内存到8GB以上\n   - 更换SSD固态硬盘\n4. **杀毒扫描**：排除恶意软件\n5. **重装系统**：长期使用后考虑重装\n\n如需硬件升级帮助，可以提交维修申请。',
    '键盘进水': '键盘进水紧急处理：\n\n⚠️ **立即断电！**\n\n1. 马上关机并拔掉电源\n2. 倒置放置，让水流出\n3. 用吹风机冷风吹干（不要用热风）\n4. 至少等待24-48小时再开机\n\n**不要做：**\n- 不要甩动设备\n- 不要立即开机测试\n- 不要用热风烘烤\n\n进水设备建议尽快提交维修申请，我们可以帮您进行专业清洗和检测。',
};

/**
 * 快捷问题按钮
 */
const quickQuestions = [
    '电脑蓝屏怎么办',
    '手机充不进电',
    '屏幕闪烁',
    '电脑很慢',
    '键盘进水',
];

/**
 * 默认回复
 */
const defaultResponse = '感谢您的提问！这个问题可能需要现场检测才能确定具体原因。建议您点击首页的"申请义务维修"，提交详细信息后我们的技术人员会帮您诊断处理。\n\n如有其他问题，请继续向我咨询~';

interface AIAgentViewProps {
    onBack: () => void;
}

/**
 * 智能体对话页面
 */
const AIAgentView: React.FC<AIAgentViewProps> = ({ onBack }) => {
    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            type: 'ai',
            content: '你好！我是维修智能体小助手 🤖\n\n我可以帮你解答一些常见的设备问题。你可以直接输入问题，或者点击下方的快捷按钮开始咨询。',
            timestamp: new Date(),
        },
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // 自动滚动到底部
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    // 获取AI回复
    const getAIResponse = (question: string): string => {
        // 查找匹配的预设回答
        for (const [key, value] of Object.entries(faqResponses)) {
            if (question.includes(key) || key.includes(question)) {
                return value;
            }
        }
        return defaultResponse;
    };

    // 发送消息
    const sendMessage = (content: string) => {
        if (!content.trim()) return;

        // 添加用户消息
        const userMessage: Message = {
            id: Date.now().toString(),
            type: 'user',
            content: content.trim(),
            timestamp: new Date(),
        };
        setMessages((prev) => [...prev, userMessage]);
        setInputValue('');
        setIsTyping(true);

        // 模拟AI思考和打字延迟
        setTimeout(() => {
            const aiResponse = getAIResponse(content);
            const aiMessage: Message = {
                id: (Date.now() + 1).toString(),
                type: 'ai',
                content: aiResponse,
                timestamp: new Date(),
            };
            setMessages((prev) => [...prev, aiMessage]);
            setIsTyping(false);
        }, 1000 + Math.random() * 1000);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        sendMessage(inputValue);
    };

    return (
        <div className="flex flex-col h-full bg-gray-50">
            {/* Header */}
            <div className="bg-white px-5 pt-12 pb-4 border-b border-gray-100 flex items-center gap-3 sticky top-0 z-10">
                <button onClick={onBack} className="p-1 -ml-1">
                    <ArrowLeft className="w-6 h-6 text-gray-700" />
                </button>
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-purple-600 rounded-full flex items-center justify-center">
                        <Bot className="w-5 h-5 text-white" />
                    </div>
                    <div>
                        <h1 className="text-lg font-bold text-gray-900">维修智能体</h1>
                        <p className="text-xs text-green-500">在线</p>
                    </div>
                </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 no-scrollbar">
                {messages.map((message) => (
                    <div
                        key={message.id}
                        className={`flex gap-3 ${message.type === 'user' ? 'flex-row-reverse' : ''}`}
                    >
                        {/* Avatar */}
                        <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${message.type === 'user'
                                    ? 'bg-primary'
                                    : 'bg-gradient-to-br from-violet-500 to-purple-600'
                                }`}
                        >
                            {message.type === 'user' ? (
                                <User className="w-4 h-4 text-white" />
                            ) : (
                                <Bot className="w-4 h-4 text-white" />
                            )}
                        </div>

                        {/* Bubble */}
                        <div
                            className={`max-w-[75%] px-4 py-3 rounded-2xl ${message.type === 'user'
                                    ? 'bg-primary text-white rounded-tr-sm'
                                    : 'bg-white text-gray-800 rounded-tl-sm shadow-custom'
                                }`}
                        >
                            <p className="text-sm whitespace-pre-wrap leading-relaxed">{message.content}</p>
                        </div>
                    </div>
                ))}

                {/* Typing Indicator */}
                {isTyping && (
                    <div className="flex gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center shrink-0">
                            <Bot className="w-4 h-4 text-white" />
                        </div>
                        <div className="bg-white px-4 py-3 rounded-2xl rounded-tl-sm shadow-custom">
                            <div className="flex gap-1">
                                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                            </div>
                        </div>
                    </div>
                )}

                <div ref={messagesEndRef} />
            </div>

            {/* Quick Questions */}
            <div className="px-4 py-2 bg-gray-50 border-t border-gray-100">
                <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
                    {quickQuestions.map((question) => (
                        <button
                            key={question}
                            onClick={() => sendMessage(question)}
                            disabled={isTyping}
                            className="shrink-0 px-3 py-1.5 bg-white border border-gray-200 rounded-full text-xs text-gray-600 hover:border-primary hover:text-primary transition-colors flex items-center gap-1"
                        >
                            <Sparkles className="w-3 h-3" />
                            {question}
                        </button>
                    ))}
                </div>
            </div>

            {/* Input Area */}
            <form onSubmit={handleSubmit} className="p-4 bg-white border-t border-gray-100">
                <div className="flex gap-3">
                    <input
                        type="text"
                        placeholder="输入您的问题..."
                        className="flex-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        disabled={isTyping}
                    />
                    <button
                        type="submit"
                        disabled={!inputValue.trim() || isTyping}
                        className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${inputValue.trim() && !isTyping
                                ? 'bg-primary text-white shadow-lg shadow-primary/30'
                                : 'bg-gray-200 text-gray-400'
                            }`}
                    >
                        <Send className="w-5 h-5" />
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AIAgentView;
