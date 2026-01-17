import React from 'react';
import { ArrowLeft, Shield, AlertTriangle, CheckCircle, HelpCircle } from 'lucide-react';

interface AgreementViewProps {
    onBack: () => void;
}

/**
 * 维修协议页面
 */
const AgreementView: React.FC<AgreementViewProps> = ({ onBack }) => {
    return (
        <div className="flex flex-col h-full bg-gray-50">
            {/* Header */}
            <div className="bg-white px-5 pt-12 pb-4 border-b border-gray-100 flex items-center gap-3 sticky top-0 z-10">
                <button onClick={onBack} className="p-1 -ml-1">
                    <ArrowLeft className="w-6 h-6 text-gray-700" />
                </button>
                <h1 className="text-xl font-bold text-gray-900">维修服务协议</h1>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-4 pb-8 no-scrollbar">
                <div className="bg-white rounded-xl p-5 shadow-custom space-y-6">
                    {/* 标题 */}
                    <div className="text-center pb-4 border-b border-gray-100">
                        <Shield className="w-12 h-12 text-primary mx-auto mb-3" />
                        <h2 className="text-lg font-bold text-gray-900">义务维修服务协议</h2>
                        <p className="text-sm text-gray-500 mt-1">更新日期：2025年1月1日</p>
                    </div>

                    {/* 协议内容 */}
                    <section className="space-y-4">
                        <h3 className="font-bold text-gray-900 flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-green-500" />
                            一、服务范围
                        </h3>
                        <div className="text-sm text-gray-600 space-y-2 pl-7">
                            <p>1. 本服务面向全校师生，提供电脑、手机及其他电子设备的义务维修服务。</p>
                            <p>2. 维修范围包括但不限于：软件问题诊断、系统重装、硬件故障检测、清灰保养、数据恢复建议等。</p>
                            <p>3. 以下情况不在服务范围内：</p>
                            <ul className="list-disc pl-5 space-y-1 text-gray-500">
                                <li>需要更换零配件的维修（可提供购买建议）</li>
                                <li>涉及侵权、违法内容的设备</li>
                                <li>已严重损坏无法修复的设备</li>
                            </ul>
                        </div>
                    </section>

                    <section className="space-y-4">
                        <h3 className="font-bold text-gray-900 flex items-center gap-2">
                            <AlertTriangle className="w-5 h-5 text-orange-500" />
                            二、免责声明
                        </h3>
                        <div className="text-sm text-gray-600 space-y-2 pl-7">
                            <p>1. 本服务为义务性质，不收取任何费用。</p>
                            <p>2. 维修过程中可能存在一定风险，包括但不限于数据丢失、硬件损坏等。用户需提前备份重要数据。</p>
                            <p>3. 如因设备自身原因（如老化、进水等）导致维修过程中出现问题，维修团队不承担责任。</p>
                            <p>4. 维修团队将尽最大努力提供帮助，但不保证所有问题都能解决。</p>
                        </div>
                    </section>

                    <section className="space-y-4">
                        <h3 className="font-bold text-gray-900 flex items-center gap-2">
                            <HelpCircle className="w-5 h-5 text-blue-500" />
                            三、用户须知
                        </h3>
                        <div className="text-sm text-gray-600 space-y-2 pl-7">
                            <p>1. 请如实填写设备信息和故障描述，以便技术人员提前准备。</p>
                            <p>2. 请按预约时间准时到达维修现场。如需取消或改期，请提前通知。</p>
                            <p>3. 维修过程中，请配合技术人员的询问和操作。</p>
                            <p>4. 请妥善保管个人物品，贵重物品请随身携带。</p>
                        </div>
                    </section>

                    <section className="space-y-4">
                        <h3 className="font-bold text-gray-900 flex items-center gap-2">
                            <Shield className="w-5 h-5 text-primary" />
                            四、隐私保护
                        </h3>
                        <div className="text-sm text-gray-600 space-y-2 pl-7">
                            <p>1. 我们承诺保护用户的个人隐私信息。</p>
                            <p>2. 维修过程中接触到的用户数据，将严格保密，不外泄、不滥用。</p>
                            <p>3. 用户信息仅用于维修服务相关联系，不会用于其他用途。</p>
                        </div>
                    </section>

                    {/* 同意提示 */}
                    <div className="bg-blue-50 rounded-lg p-4 mt-6">
                        <p className="text-sm text-blue-700 text-center">
                            使用本服务即表示您已阅读、理解并同意本协议的全部内容
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AgreementView;
