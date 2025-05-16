// 等待DOM完全加载
document.addEventListener('DOMContentLoaded', function() {
    // 获取按钮和联系信息div元素
    const showInfoButton = document.getElementById('showInfo');
    const contactInfo = document.getElementById('contactInfo');
    
    // 添加点击事件监听器 - 使用新的动画类
    if (showInfoButton && contactInfo) {
        showInfoButton.addEventListener('click', function() {
            // 使用 CSS 类切换，而不是直接修改 style
            contactInfo.classList.toggle('visible');
            
            if (contactInfo.classList.contains('visible')) {
                showInfoButton.textContent = '隐藏联系信息';
            } else {
                showInfoButton.textContent = '显示联系信息';
            }
        });
    }
    
    // 添加平滑滚动效果
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 20,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // 添加当前年份到页脚
    const footerYear = document.querySelector('footer p');
    if (footerYear) {
        const currentYear = new Date().getFullYear();
        footerYear.innerHTML = footerYear.innerHTML.replace('2025', currentYear);
    }
    
    // 滚动动画 - 当元素进入视口时触发动画
    const sections = document.querySelectorAll('section');
    
    // 滚动观察器初始化
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // 可选：如果只想触发一次动画，可以取消观察
                // observer.unobserve(entry.target);
            } else {
                // 如果想在元素离开视口时重置动画，取消注释下面的代码
                // entry.target.classList.remove('visible');
            }
        });
    }, {
        root: null, // 使用视口作为根
        threshold: 0.1, // 当10%的元素可见时触发
        rootMargin: '-50px' // 在元素进入视口50px后触发
    });
    
    // 开始观察所有部分
    sections.forEach(section => {
        observer.observe(section);
    });
    
    // 鼠标移动视差效果已移除，保持标题稳定
    
    // 添加鼠标悬停效果到所有部分
    sections.forEach(section => {
        section.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.1)';
            this.style.transform = 'translateY(-5px)';
        });
        
        section.addEventListener('mouseleave', function() {
            this.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
            this.style.transform = 'translateY(0)';
        });
    });
    
    // 通过添加CSS类初始化页面加载动画
    document.body.classList.add('loaded');
    
    // 移除首页标题的所有可能的动画效果
    const homeTitle = document.querySelector('#home h2');
    if (homeTitle) {
        homeTitle.style.animation = 'none';
        homeTitle.style.transform = 'none';
    }
    
    console.log('静态网页测试项目已加载完成，动画效果已激活！');
});
