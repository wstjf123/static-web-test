// 苹果风格的JavaScript脚本
document.addEventListener('DOMContentLoaded', function() {
    // 获取元素
    const showInfoButton = document.getElementById('showInfo');
    const contactInfo = document.getElementById('contactInfo');
    const heroButton = document.querySelector('.hero .button');
    const linkButtons = document.querySelectorAll('.link-button');
    
    // 为主按钮添加自动发光效果
    if (heroButton) {
        heroButton.classList.add('auto-glow');
    }
    
    // 联系信息展示/隐藏功能，添加高级动画
    if (showInfoButton && contactInfo) {
        showInfoButton.addEventListener('click', function() {
            contactInfo.classList.toggle('visible');
            
            if (contactInfo.classList.contains('visible')) {
                showInfoButton.textContent = '隐藏联系信息';
                // 添加微妙的缩放效果
                showInfoButton.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    showInfoButton.style.transform = '';
                }, 300);
            } else {
                showInfoButton.textContent = '显示联系信息';
                // 添加微妙的缩放效果
                showInfoButton.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    showInfoButton.style.transform = '';
                }, 300);
            }
        });
    }
    
    // 移除全屏过渡动画元素，改用更微妙的动画效果
    // 不再创建 pageTransition 元素
    
    // 平滑滚动功能，增加苹果风格的页面过渡效果
    const navLinks = document.querySelectorAll('.nav-link');
    const logo = document.querySelector('.logo');
    
    // 添加logo点击事件
    if (logo) {
        logo.addEventListener('click', function(e) {
            e.preventDefault();
            smoothScrollWithTransition(0);
        });
    }
    
    // 添加导航链接点击事件
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const targetPosition = targetElement.offsetTop - 44; // 44px 是导航栏的高度
                smoothScrollWithTransition(targetPosition);
            }
        });
    });
    
    // 给"了解更多"按钮添加高级过渡效果
    if (heroButton) {
        heroButton.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const targetPosition = targetElement.offsetTop - 44;
                
                // 特殊的过渡效果
                this.style.transform = 'scale(0.95)';
                
                setTimeout(() => {
                    this.style.transform = '';
                    smoothScrollWithTransition(targetPosition);
                }, 300);
            }
        });
    }
    
    // 为卡片中的链接按钮添加特殊点击效果 - 更符合苹果风格的微妙动画
    linkButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // 视觉反馈 - 更微妙的效果
            this.style.transform = 'translateX(5px)';
            this.style.letterSpacing = '0.03em';
            
            // 创建一个淡入淡出效果，而不是全屏过渡
            const cardElement = this.closest('.card');
            if (cardElement) {
                // 更微妙的卡片动画
                cardElement.style.boxShadow = '0 15px 30px rgba(0, 102, 204, 0.15)';
                cardElement.style.transform = 'translateY(-15px) scale(1.03)';
                
                setTimeout(() => {
                    // 恢复按钮样式
                    this.style.transform = '';
                    this.style.letterSpacing = '';
                    
                    // 平滑恢复卡片样式
                    cardElement.style.transition = 'all 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)';
                    cardElement.style.boxShadow = '';
                    cardElement.style.transform = '';
                }, 600);
            }
        });
    });
    
    // 平滑滚动带过渡动画函数 - 使用更微妙的效果
    function smoothScrollWithTransition(targetPosition) {
        // 微妙的页面过渡效果 - 仅轻微降低透明度
        document.body.style.opacity = '0.95';
        
        setTimeout(() => {
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            
            setTimeout(() => {
                document.body.style.opacity = '1';
            }, 400);
        }, 100);
    }
    
    // 添加当前年份到页脚
    const footerText = document.querySelector('.footer-text');
    if (footerText) {
        const currentYear = new Date().getFullYear();
        footerText.innerHTML = footerText.innerHTML.replace('2025', currentYear);
    }
    
    // 滚动动画 - 当元素进入视口时触发动画
    const animatedElements = document.querySelectorAll('.slide-up, .fade-in, .scale-reveal');
    
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
                } else if (entry.target.classList.contains('scale-reveal')) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'scale(1)';
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
    
    // 导航栏滚动效果 - 更加苹果风格
    const header = document.querySelector('.header');
    let lastScrollTop = 0;
    let scrollDelta = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        scrollDelta = scrollTop - lastScrollTop;
        
        // 渐变透明度和阴影效果
        if (scrollTop > 10) {
            const opacity = Math.min(0.85, 0.8 + (scrollTop / 1000));
            header.style.backgroundColor = `rgba(255, 255, 255, ${opacity})`;
            
            const shadowBlur = Math.min(20, 5 + (scrollTop / 100));
            header.style.boxShadow = `0 4px ${shadowBlur}px rgba(0, 0, 0, 0.05)`;
        } else {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
            header.style.boxShadow = 'none';
        }
        
        lastScrollTop = scrollTop;
    });
    
    // 卡片悬停效果增强 - 添加3D倾斜效果
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        // 鼠标移入
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        // 鼠标移动 - 3D倾斜效果
        card.addEventListener('mousemove', function(e) {
            const cardRect = this.getBoundingClientRect();
            const cardCenterX = cardRect.left + cardRect.width / 2;
            const cardCenterY = cardRect.top + cardRect.height / 2;
            
            // 计算鼠标位置相对于卡片中心的偏移量
            const offsetX = (e.clientX - cardCenterX) / (cardRect.width / 2);
            const offsetY = (e.clientY - cardCenterY) / (cardRect.height / 2);
            
            // 限制倾斜角度在较小范围内，更符合苹果的风格
            const tiltX = offsetY * 2; // 水平轴倾斜（基于Y偏移）
            const tiltY = -offsetX * 2; // 垂直轴倾斜（基于X偏移）
            
            // 应用3D变换
            this.style.transform = `translateY(-10px) scale(1.02) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
            
            // 添加光泽效果
            const glareX = 50 + offsetX * 40; // 调整光泽位置
            const glareY = 50 + offsetY * 30;
            this.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0) 60%), #fff`;
        });
        
        // 鼠标移出
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1) rotateX(0) rotateY(0)';
            this.style.background = '#fff';
        });
    });
    
    // 页面加载完成后的初始动画
    setTimeout(() => {
        document.querySelectorAll('.fade-in, .slide-up, .scale-reveal').forEach(el => {
            el.style.opacity = '1';
            if (el.classList.contains('slide-up')) {
                el.style.transform = 'translateY(0)';
            } else if (el.classList.contains('scale-reveal')) {
                el.style.transform = 'scale(1)';
            }
        });
    }, 300);
    
    // 增强"了解更多"链接的特殊效果
    const learnMoreLinks = document.querySelectorAll('.link-button');
    
    learnMoreLinks.forEach(link => {
        // 创建特殊的悬停动画效果
        link.addEventListener('mouseover', function() {
            this.style.letterSpacing = '0.02em';
            this.style.color = '#0077cc'; // 稍微深一点的蓝色
        });
        
        link.addEventListener('mouseout', function() {
            this.style.letterSpacing = '';
            this.style.color = '';
        });
    });
    
    console.log('苹果风格网站初始化完成，高级动画效果已激活');
});
