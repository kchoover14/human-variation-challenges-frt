document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navigationLinks = document.querySelectorAll('.nav-links a');
    
    navigationLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const navHeight = document.querySelector('.top-navigation').offsetHeight;
                const targetPosition = targetSection.offsetTop - navHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add fade-in animation for content blocks
    const observerConfig = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const blockObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerConfig);
    
    const contentBlocks = document.querySelectorAll('.content-block');
    contentBlocks.forEach(block => {
        block.style.opacity = '0';
        block.style.transform = 'translateY(30px)';
        block.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        blockObserver.observe(block);
    });
    
    // Highlight active navigation link based on scroll position
    window.addEventListener('scroll', function() {
        let currentSection = '';
        const sections = document.querySelectorAll('section[id]');
        const navHeight = document.querySelector('.top-navigation').offsetHeight;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - navHeight - 100;
            const sectionHeight = section.offsetHeight;
            
            if (window.pageYOffset >= sectionTop && 
                window.pageYOffset < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navigationLinks.forEach(link => {
            link.style.opacity = '1';
            if (link.getAttribute('href') === '#' + currentSection) {
                link.style.opacity = '0.8';
                link.style.textDecoration = 'underline';
            } else {
                link.style.textDecoration = 'none';
            }
        });
    });
});
