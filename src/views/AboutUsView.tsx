import React from 'react';
import { ArrowLeft, Users, Mail, Phone, MapPin, Heart, Github, Globe } from 'lucide-react';

interface AboutUsViewProps {
    onBack: () => void;
}

/**
 * 关于我们页面
 */
const AboutUsView: React.FC<AboutUsViewProps> = ({ onBack }) => {
    return (
        <div className="flex flex-col h-full bg-gray-50">
            {/* Header */}
            <div className="bg-white px-5 pt-12 pb-4 border-b border-gray-100 flex items-center gap-3 sticky top-0 z-10">
                <button onClick={onBack} className="p-1 -ml-1">
                    <ArrowLeft className="w-6 h-6 text-gray-700" />
                </button>
                <h1 className="text-xl font-bold text-gray-900">关于我们</h1>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 pb-8 no-scrollbar">
                {/* Logo & Title */}
                <div className="bg-white rounded-xl p-6 shadow-custom text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-primary/30">
                        <span className="text-3xl font-bold text-white">维</span>
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 mb-1">义务维修队</h2>
                    <p className="text-sm text-gray-500">用心服务每一位同学</p>
                    <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-500">
                        <span>版本 v1.0.0</span>
                    </div>
                </div>

                {/* Introduction */}
                <div className="bg-white rounded-xl p-5 shadow-custom">
                    <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                        <Users className="w-5 h-5 text-primary" />
                        团队介绍
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                        义务维修队是由计算机与计算科学学院发起的学生志愿服务组织，成立于2018年。
                        我们致力于为全校师生提供免费的电子设备维修服务，帮助大家解决电脑、手机等设备的各类问题。
                    </p>
                    <p className="text-sm text-gray-600 leading-relaxed mt-3">
                        多年来，我们已累计服务超过 <span className="font-bold text-primary">5000+</span> 人次，
                        成功修复设备 <span className="font-bold text-primary">3000+</span> 台，
                        获得了师生们的广泛好评。
                    </p>
                </div>

                {/* Contact Info */}
                <div className="bg-white rounded-xl p-5 shadow-custom">
                    <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <Mail className="w-5 h-5 text-primary" />
                        联系方式
                    </h3>
                    <div className="space-y-3">
                        <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                            <Phone className="w-5 h-5 text-gray-400" />
                            <div>
                                <p className="text-xs text-gray-400">联系电话</p>
                                <p className="text-sm text-gray-900 font-medium">138-8888-8888</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                            <Mail className="w-5 h-5 text-gray-400" />
                            <div>
                                <p className="text-xs text-gray-400">邮箱地址</p>
                                <p className="text-sm text-gray-900 font-medium">repair@university.edu.cn</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                            <MapPin className="w-5 h-5 text-gray-400" />
                            <div>
                                <p className="text-xs text-gray-400">活动地点</p>
                                <p className="text-sm text-gray-900 font-medium">教学楼三 101室</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Links */}
                <div className="bg-white rounded-xl p-5 shadow-custom">
                    <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <Globe className="w-5 h-5 text-primary" />
                        相关链接
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                        <button className="p-4 bg-gray-50 rounded-xl flex flex-col items-center gap-2 hover:bg-gray-100 transition-colors">
                            <Github className="w-6 h-6 text-gray-700" />
                            <span className="text-sm text-gray-600">开源项目</span>
                        </button>
                        <button className="p-4 bg-gray-50 rounded-xl flex flex-col items-center gap-2 hover:bg-gray-100 transition-colors">
                            <Globe className="w-6 h-6 text-primary" />
                            <span className="text-sm text-gray-600">官方网站</span>
                        </button>
                    </div>
                </div>

                {/* Footer */}
                <div className="text-center py-4">
                    <p className="text-xs text-gray-400 flex items-center justify-center gap-1">
                        Made with <Heart className="w-3 h-3 text-red-400" /> by 义务维修队
                    </p>
                    <p className="text-xs text-gray-400 mt-1">© 2025 All Rights Reserved</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUsView;
