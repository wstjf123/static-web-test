// 等待DOM完全加载
document.addEventListener('DOMContentLoaded', function() {
    // 获取按钮和联系信息div元素
    const showInfoButton = document.getElementById('showInfo');
    const contactInfo = document.getElementById('contactInfo');
    
    // 添加点击事件监听器
    if (showInfoButton && contactInfo) {
        showInfoButton.addEventListener('click', function() {
            // 切换联系信息的显示状态
            if (contactInfo.style.display === 'none') {
                contactInfo.style.display = 'block';
                showInfoButton.textContent = '隐藏联系信息';
            } else {
                contactInfo.style.display = 'none';
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
    
    console.log('静态网页测试项目已加载完成！');
});
