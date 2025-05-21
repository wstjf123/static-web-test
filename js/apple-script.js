// 苹果风格的JavaScript脚本
document.addEventListener('DOMContentLoaded', function() {
    // 获取元素
    const showInfoButton = document.getElementById('showInfo');
    const contactInfo = document.getElementById('contactInfo');
    
    // 联系信息展示/隐藏功能
    if (showInfoButton && contactInfo) {
        showInfoButton.addEventListener('click', function() {
            contactInfo.classList.toggle('visible');
            
            if (contactInfo.classList.contains('visible')) {
                showInfoButton.textContent = '隐藏联系信息';
            } else {
                showInfoButton.textContent = '显示联系信息';
            }
        });
    }
    
    // 平滑滚动功能
    const navLinks = document.querySelectorAll('.nav-link');
    const logo = document.querySelector('.logo');
    
    // 添加logo点击事件
    if (logo) {
        logo.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // 添加导航链接点击事件
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 44, // 44px 是导航栏的高度
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // 添加当前年份到页脚
    const footerText = document.querySelector('.footer-text');
    if (footerText) {
        const currentYear = new Date().getFullYear();
        footerText.innerHTML = footerText.innerHTML.replace('2025', currentYear);
    }
    
    // 滚动动画 - 当元素进入视口时触发动画
    const animatedElements = document.querySelectorAll('.slide-up, .fade-in');
    
    // 创建滚动观察器
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // 添加活跃类
                if (entry.target.classList.contains('slide-up')) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                } else if (entry.target.classList.contains('fade-in')) {
                    entry.target.style.opacity = '1';
                }
                
                // 只触发一次
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    // 开始观察所有动画元素
    animatedElements.forEach(element => {
        observer.observe(element);
    });
    
    // 导航栏滚动效果
    const header = document.querySelector('.header');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // 导航栏透明度调整
        if (scrollTop > 50) {
            header.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.04)';
        } else {
            header.style.boxShadow = 'none';
        }
        
        lastScrollTop = scrollTop;
    });
    
    // 卡片悬停效果增强
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // 页面加载完成后的初始动画
    setTimeout(() => {
        document.querySelectorAll('.fade-in, .slide-up').forEach(el => {
            el.style.opacity = '1';
            if (el.classList.contains('slide-up')) {
                el.style.transform = 'translateY(0)';
            }
        });
    }, 300);
    
    console.log('苹果风格网站初始化完成');
});
