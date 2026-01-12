import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, User, Code, Smartphone } from 'lucide-react'; // Changed IdCard to User/CreditCard based on availability or just keep generic
import MobileContainer from '@/components/MobileContainer';

const Login = () => {
  const navigate = useNavigate();
  const [agreed, setAgreed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    studentId: '',
    phone: '',
    code: ''
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) {
      alert("请先阅读并同意维修协议");
      return;
    }
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      navigate('/app');
    }, 1500);
  };

  return (
    <MobileContainer>
      <div className="flex-1 flex flex-col p-8 bg-white h-full">
        <div className="mt-12 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">欢迎使用</h1>
          <p className="text-gray-500 font-medium">义务维修服务小程序</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          {/* Name */}
          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-700">姓名</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="请输入您的姓名"
                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
              />
            </div>
          </div>

          {/* Student ID */}
          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-700">学号</label>
            <div className="relative">
              <ShieldCheck className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="请输入学号"
                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm"
                value={formData.studentId}
                onChange={(e) => setFormData({...formData, studentId: e.target.value})}
                required
              />
            </div>
          </div>

          {/* Phone */}
          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-700">手机号码</label>
            <div className="relative">
              <Smartphone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="tel"
                placeholder="请输入手机号码"
                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                required
              />
            </div>
          </div>

          {/* Code */}
          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-700">验证码</label>
            <div className="flex gap-3">
              <div className="relative flex-1">
                <Code className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="验证码"
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm"
                  value={formData.code}
                  onChange={(e) => setFormData({...formData, code: e.target.value})}
                  required
                />
              </div>
              <button 
                type="button"
                className="px-4 py-3 bg-primary/10 text-primary font-medium text-sm rounded-lg whitespace-nowrap"
              >
                获取验证码
              </button>
            </div>
          </div>

          {/* Terms */}
          <div className="flex items-start gap-2 pt-2">
            <input 
              type="checkbox" 
              id="terms" 
              className="mt-1 w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
            />
            <label htmlFor="terms" className="text-xs text-gray-500 leading-tight">
              登录即代表您同意
              <span className="text-primary cursor-pointer">《义务维修服务协议》</span>
              。未注册的手机号验证后将自动创建账号。
            </label>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3.5 px-4 bg-primary hover:bg-blue-600 text-white font-semibold rounded-lg shadow-custom transition-all flex items-center justify-center ${loading ? 'opacity-80' : ''}`}
          >
            {loading ? '登录中...' : '注册 / 登录'}
          </button>
        </form>
      </div>
    </MobileContainer>
  );
};

export default Login;