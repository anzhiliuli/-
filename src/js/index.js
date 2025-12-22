// 系统入口文件 - 负责加载和初始化所有模块

// 加载工具函数
import { AppUtils } from './utils/helpers.js';

// 加载核心应用
import App from './core/app.js';

// 初始化全局工具函数
window.AppUtils = AppUtils;

// 创建应用实例并挂载到window对象
window.App = new App();

// 等待DOM加载完成
window.addEventListener('DOMContentLoaded', () => {
    // 检查应用是否已初始化
    if (window.App && window.App.isInitialized) {
        // 加载本地存储的数据（如果有）
        window.App.dataManager.loadFromLocalStorage();
        
        // 刷新所有UI组件
        window.App.uiRenderer.refreshAll();
        
        // 启用调试模式（开发环境）
        if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
            console.log('%c 🚀 碧蓝档案轴计算器 - 开发模式已启用', 'color: #4F46E5; font-weight: bold;');
            console.log('使用 debugApp() 函数查看应用状态');
        }
    } else {
        console.error('应用初始化失败，App实例不可用');
    }
});
