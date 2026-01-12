import React from 'react';

/**
 * 移动端容器
 * 强制使用指定的移动端尺寸 (375x812)。
 * 在较大屏幕上居中显示内容。
 */
interface MobileContainerProps {
  children: React.ReactNode;
  className?: string;
}

const MobileContainer: React.FC<MobileContainerProps> = ({ children, className = "" }) => {
  return (
    <div 
      className={`w-[375px] h-[812px] bg-background overflow-hidden relative shadow-2xl rounded-[30px] border-8 border-gray-900 flex flex-col ${className}`}
      style={{ boxSizing: 'content-box' }}
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[30px] bg-gray-900 rounded-b-[16px] z-50"></div>
      <div className="flex-1 overflow-hidden flex flex-col bg-gray-50 h-full w-full">
        {children}
      </div>
    </div>
  );
};

export default MobileContainer;