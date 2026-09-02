/**
 * INGA - Web Experience Script
 * Manages premium interactions, smooth scroll, tab controls, custom popups, and scrollspy navigation.
 */

const init = () => {
    // 1. Console Branding
    console.log(
        '%c INGA %c Inovação e Gestão Ambiental %c',
        'background:#2c9f9a;color:#fff;padding:4px 6px;border-radius:3px 0 0 3px;font-weight:bold;',
        'background:#333;color:#fff;padding:4px 6px;border-radius:0 3px 3px 0;',
        'background:transparent'
    );

    // --- DOM Elements ---
    const body = document.body;
    const siteHeader = document.getElementById('site-header');
    
    // Background and Hero elements
    const bgContainer = document.getElementById('bg-container');
    const isDesktop = window.matchMedia('(min-width: 901px)');

    // Hamburger Mobile Menu
    const menuToggle = document.getElementById('menu-toggle');
    const mainNav = document.getElementById('main-nav');
    const navLinks = document.querySelectorAll('.nav-link');

    // Modals
    const modalLidera = document.getElementById('modal-lidera');
    const modalContato = document.getElementById('modal-contato');
    
    const triggerEduardo = document.getElementById('trigger-eduardo');
    const triggersContato = document.querySelectorAll('.trigger-contato');
    const closeButtons = document.querySelectorAll('.modal-close');

    // Tabs
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.ficha-content');


    // ==========================================
    // 2. PAGE LOAD FADE IN
    // ==========================================
    body.style.opacity = '0';
    body.style.transition = 'opacity 0.8s ease-in-out';
    setTimeout(() => {
        body.style.opacity = '1';
    }, 100);


    // ==========================================
    // 3. HEADER SCROLL EFFECT
    // ==========================================
    const checkHeaderScroll = () => {
        if (window.scrollY > 50) {
            siteHeader.classList.add('scrolled');
        } else {
            siteHeader.classList.remove('scrolled');
        }
    };
    window.addEventListener('scroll', checkHeaderScroll);
    checkHeaderScroll(); // Init check


    // ==========================================
    // 4. HAMBURGER MOBILE NAVIGATION
    // ==========================================
    const toggleMobileMenu = () => {
        menuToggle.classList.toggle('active');
        mainNav.classList.toggle('active');
        body.classList.toggle('no-scroll');
    };

    const closeMobileMenu = () => {
        menuToggle.classList.remove('active');
        mainNav.classList.remove('active');
        body.classList.remove('no-scroll');
    };

    menuToggle.addEventListener('click', toggleMobileMenu);


    // ==========================================
    // 5. SMOOTH SCROLL & SCROLLSPY
    // ==========================================
    // Smooth scroll for nav links (excluding modal triggers)
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            
            // Skip contact trigger which is javascript:void(0)
            if (targetId.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    closeMobileMenu();
                    
                    const headerHeight = siteHeader.offsetHeight;
                    const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
                    const offsetPosition = elementPosition - headerHeight + 10; // offset slightly above the element

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Scrollspy: active nav link highlights based on current section viewport position
    const sections = document.querySelectorAll('section');
    const handleScrollSpy = () => {
        let currentSectionId = '';
        const headerHeight = siteHeader.offsetHeight;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - headerHeight - 100;
            const sectionHeight = section.offsetHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    };
    window.addEventListener('scroll', handleScrollSpy);


    // ==========================================
    // 5.5 NOSSA ABORDAGEM QUADRANTS INTERACTIVITY
    // ==========================================
    const principlesGrid = document.getElementById('principles-grid');
    const quadrants = document.querySelectorAll('.quadrant');

    if (principlesGrid && quadrants.length > 0) {
        quadrants.forEach(quad => {
            const quadNum = quad.getAttribute('data-quad');
            
            quad.addEventListener('mouseenter', () => {
                principlesGrid.className = `principles-grid-container hover-quad-${quadNum}`;
            });
            
            quad.addEventListener('mouseleave', () => {
                principlesGrid.className = 'principles-grid-container';
            });

            quad.addEventListener('click', () => {
                if (principlesGrid.classList.contains(`hover-quad-${quadNum}`)) {
                    principlesGrid.className = 'principles-grid-container';
                } else {
                    principlesGrid.className = `principles-grid-container hover-quad-${quadNum}`;
                }
            });
        });
    }


    // ==========================================
    // 6. SOLUÇÕES INTERACTIVE CARDS & TABS
    // ==========================================
    const solucoesWrapper = document.getElementById('solucoes-wrapper');
    const solucaoCardItems = document.querySelectorAll('.solucao-card-item');
    const tabHeaderBtns = document.querySelectorAll('.solucoes-tab-header-btn');
    const solucaoPanels = document.querySelectorAll('.solucao-panel');

    const switchSolucaoTab = (tabId) => {
        if (!solucoesWrapper) return;
        
        // Show expanded view
        solucoesWrapper.classList.add('is-expanded');

        // Update tab header buttons
        tabHeaderBtns.forEach(btn => {
            if (btn.getAttribute('data-tab-target') === tabId) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // Update panel content
        solucaoPanels.forEach(panel => {
            if (panel.getAttribute('id') === `panel-${tabId}`) {
                panel.classList.add('active');
            } else {
                panel.classList.remove('active');
            }
        });
    };

    // Click rest state cards (image or button)
    solucaoCardItems.forEach(card => {
        card.addEventListener('click', () => {
            const solucaoId = card.getAttribute('data-solucao');
            switchSolucaoTab(solucaoId);
        });
    });

    // Click expanded header tab buttons
    tabHeaderBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetTab = btn.getAttribute('data-tab-target');
            
            // If already active, toggle back to 3-cards view
            if (btn.classList.contains('active')) {
                solucoesWrapper.classList.remove('is-expanded');
            } else {
                switchSolucaoTab(targetTab);
            }
        });
    });


    // ==========================================
    // 7. MODALSPOPUP CONTROL SYSTEM (CONTATO & EDUARDO)
    // ==========================================
    const openModal = (modal) => {
        closeMobileMenu();
        modal.classList.add('active');
        modal.setAttribute('aria-hidden', 'false');
        body.classList.add('no-scroll'); // Prevent page scrolling behind modal
    };

    const closeModal = (modal) => {
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
        body.classList.remove('no-scroll');
    };

    // Trigger Eduardo Bio Modal
    const triggerTrajetoria = document.getElementById('trigger-trajetoria');
    
    if (triggerEduardo) {
        triggerEduardo.addEventListener('click', () => openModal(modalLidera));
    }
    if (triggerTrajetoria) {
        triggerTrajetoria.addEventListener('click', (e) => {
            e.preventDefault();
            openModal(modalLidera);
        });
    }

    // Trigger Contato Modal
    triggersContato.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            openModal(modalContato);
        });
    });

    // Close buttons handler
    closeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            closeModal(modalLidera);
            closeModal(modalContato);
        });
    });

    // Click outside modal card to close
    [modalLidera, modalContato].forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal(modal);
            }
        });
    });

    // Close modals on Escape key press
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal(modalLidera);
            closeModal(modalContato);
        }
    });


    // ==========================================
    // 8. DESKTOP HERO PARALLAX MOUSE EFFECT
    // ==========================================
    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;
    const intensity = 40; // parallax intensity scale

    const handleMouseMove = (e) => {
        if (!isDesktop.matches || window.scrollY > window.innerHeight) return;
        mouseX = (e.clientX / window.innerWidth) - 0.5;
        mouseY = (e.clientY / window.innerHeight) - 0.5;
    };

    const updateParallax = () => {
        // Only run parallax in desktop view and when Hero section is visible
        if (isDesktop.matches && window.scrollY < window.innerHeight) {
            currentX += (mouseX - currentX) * 0.08;
            currentY += (mouseY - currentY) * 0.08;

            const translateX = currentX * -intensity;
            const translateY = currentY * -intensity;
            
            // scale(1.05) to prevent blank edges during movement
            bgContainer.style.transform = `scale(1.05) translate3d(${translateX}px, ${translateY}px, 0)`;
        } else if (!isDesktop.matches) {
            // Reset to mobile css rotation style
            bgContainer.style.transform = '';
        }
        requestAnimationFrame(updateParallax);
    };

    window.addEventListener('mousemove', handleMouseMove);
    requestAnimationFrame(updateParallax);

    // Reset when resizing to mobile
    window.addEventListener('resize', () => {
        if (!isDesktop.matches) {
            bgContainer.style.transform = '';
            mouseX = 0;
            mouseY = 0;
            currentX = 0;
            currentY = 0;
        }
    });

    // --- Circle Header Overlaps & Parallax Locking ---
    const circles = document.querySelectorAll('.outline-circle');
    const headerHeight = siteHeader.offsetHeight || 80;

    const animateCircles = () => {
        const isDesktopView = window.innerWidth > 900;
        
        circles.forEach(circle => {
            if (!isDesktopView) {
                circle.style.transform = '';
                return;
            }
            
            const parentSection = circle.closest('section');
            if (!parentSection) return;
            
            const parentRect = parentSection.getBoundingClientRect();
            const triggerPoint = headerHeight;
            
            if (parentRect.top > triggerPoint) {
                const distance = parentRect.top - triggerPoint;
                const translateOffset = distance * 0.15;
                circle.style.transform = `translateY(calc(-50% + ${translateOffset}px))`;
            } else {
                circle.style.transform = `translateY(-50%)`;
            }
        });
    };

    window.addEventListener('scroll', animateCircles);
    window.addEventListener('resize', animateCircles);
    animateCircles();
};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
