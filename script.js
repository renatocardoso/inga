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
    const navLinks = document.querySelectorAll('.header-nav__link, .nav-link');

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

            // Immediately mark clicked nav link as active (Oceano400)
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            
            // Skip contact trigger which is javascript:void(0) or button
            if (targetId && targetId.startsWith('#')) {
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
    // 5.5 NOSSA ABORDAGEM: PILLARSACCORDION (SPEC-002)
    // ==========================================
    const pillarsGrid = document.querySelector('.pillars__grid');
    const pillarItems = document.querySelectorAll('.pillars__item');

    const closeAllPillars = () => {
        pillarItems.forEach(item => {
            item.classList.remove('pillars__item--is-expanded');
            item.setAttribute('aria-expanded', 'false');
        });
        if (pillarsGrid) {
            pillarsGrid.classList.remove('has-expanded');
        }
    };

    if (pillarItems.length > 0) {
        pillarItems.forEach(item => {
            // Expansion & collapse toggle on click (o próprio clique no conteúdo fecha o pilar)
            item.addEventListener('click', () => {
                const isAlreadyExpanded = item.classList.contains('pillars__item--is-expanded');
                closeAllPillars();

                if (!isAlreadyExpanded) {
                    item.classList.add('pillars__item--is-expanded');
                    item.setAttribute('aria-expanded', 'true');
                    if (pillarsGrid) pillarsGrid.classList.add('has-expanded');
                }
            });

            // Keyboard navigation (Enter / Space)
            item.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    item.click();
                }
            });
        });
    }


    // ==========================================
    // ==========================================
    // 6. SOLUÇÕES: NOVA ARQUITETURA DE NAVEGAÇÃO E SHOWCASE (SPEC-002)
    // ==========================================
    const solutionsSection = document.getElementById('solucoes');
    const solutionsNavBar = document.getElementById('solutions-nav-bar');
    const solutionNavBtns = document.querySelectorAll('.solutions__nav-btn');
    const solutionPanels = document.querySelectorAll('.solutions__panel');
    const mediaCards = document.querySelectorAll('.solutions__media-card');

    const resetSolutionsToDefault = () => {
        if (solutionsSection) {
            solutionsSection.dataset.stage = 'default';
        }
        if (solutionsNavBar) {
            solutionsNavBar.dataset.stage = 'default';
        }
        solutionNavBtns.forEach(btn => {
            btn.setAttribute('aria-selected', 'false');
        });

        solutionPanels.forEach(panel => {
            panel.classList.remove('is-active');
            panel.hidden = true;
        });

        // Close any revealed cards
        mediaCards.forEach(card => card.classList.remove('is-revealed'));
    };

    const activateSolution = (solutionId) => {
        if (!solutionsNavBar) return;

        // If clicking on already active button, return to default state per user alignment
        if (solutionsNavBar.dataset.stage === solutionId) {
            resetSolutionsToDefault();
            return;
        }

        if (solutionsSection) {
            solutionsSection.dataset.stage = solutionId;
        }
        solutionsNavBar.dataset.stage = solutionId;

        solutionNavBtns.forEach(btn => {
            const isTarget = btn.dataset.solution === solutionId;
            btn.setAttribute('aria-selected', isTarget ? 'true' : 'false');
        });

        solutionPanels.forEach(panel => {
            if (panel.id === `solution-panel-${solutionId}`) {
                panel.hidden = false;
                panel.classList.add('is-active');
            } else {
                panel.classList.remove('is-active');
                panel.hidden = true;
            }
        });

        // Close any previously revealed media cards
        mediaCards.forEach(card => card.classList.remove('is-revealed'));
    };

    if (solutionNavBtns.length > 0) {
        solutionNavBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const solutionId = btn.dataset.solution;
                if (solutionId) {
                    activateSolution(solutionId);
                }
            });

            // Keyboard navigation
            btn.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    btn.click();
                }
            });
        });
    }

    // Media Cards Hover/Tap Crossfade Interaction (Mobile and Touch Friendly)
    if (mediaCards.length > 0) {
        mediaCards.forEach(card => {
            card.addEventListener('click', (e) => {
                // If on touch device, toggle reveal
                const isTouch = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
                if (isTouch) {
                    const wasRevealed = card.classList.contains('is-revealed');
                    mediaCards.forEach(c => c.classList.remove('is-revealed'));
                    if (!wasRevealed) {
                        card.classList.add('is-revealed');
                    }
                }
            });
        });

        // Click outside closes revealed media popovers
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.solutions__media-card')) {
                mediaCards.forEach(card => card.classList.remove('is-revealed'));
            }
        });
    }

    // Escape key returns solutions to default state
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (pillarsGrid && pillarsGrid.classList.contains('has-expanded')) {
                closeAllPillars();
                return;
            }

            const hasRevealedCard = Array.from(mediaCards).some(c => c.classList.contains('is-revealed'));
            if (hasRevealedCard) {
                mediaCards.forEach(c => c.classList.remove('is-revealed'));
                return;
            }

            if (solutionsNavBar && solutionsNavBar.dataset.stage !== 'default') {
                resetSolutionsToDefault();
            }
        }
    });



    // ==========================================
    // 7. MODALS CONTROL SYSTEM (CONTATO & EDUARDO)
    // ==========================================
    let lastModalTrigger = null;

    const openModal = (modal, trigger = null) => {
        closeMobileMenu();
        lastModalTrigger = trigger || document.activeElement;
        modal.classList.add('active');
        modal.setAttribute('aria-hidden', 'false');
        body.classList.add('no-scroll');

        const closeBtn = modal.querySelector('.modal-close');
        if (closeBtn) closeBtn.focus();
    };

    const closeModal = (modal) => {
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
        body.classList.remove('no-scroll');

        if (lastModalTrigger && typeof lastModalTrigger.focus === 'function') {
            lastModalTrigger.focus();
            lastModalTrigger = null;
        }
    };

    // Trigger Eduardo Bio Modal
    const triggerTrajetoria = document.getElementById('trigger-trajetoria');
    
    if (triggerEduardo) {
        triggerEduardo.addEventListener('click', (e) => {
            e.preventDefault();
            openModal(modalLidera, triggerEduardo);
        });
    }
    if (triggerTrajetoria) {
        triggerTrajetoria.addEventListener('click', (e) => {
            e.preventDefault();
            openModal(modalLidera, triggerTrajetoria);
        });
    }

    // Trigger Contato Modal
    triggersContato.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            openModal(modalContato, trigger);
        });
    });

    // Close buttons handler
    closeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            closeModal(modalLidera);
            closeModal(modalContato);
        });
    });

    // Click outside modal card to close (backdrop)
    [modalLidera, modalContato].forEach(modal => {
        if (modal) {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    closeModal(modal);
                }
            });
        }
    });

    // Click on modal-contato card to close (sem botão X, o próprio clique no popup fecha)
    const modalContatoCard = modalContato ? modalContato.querySelector('.modal-contato-card') : null;
    if (modalContatoCard) {
        modalContatoCard.addEventListener('click', (e) => {
            // Se o clique foi em um link (email ou whatsapp), permite abrir o link e fecha o modal
            if (e.target.closest('a')) {
                setTimeout(() => closeModal(modalContato), 150);
                return;
            }
            // Clique no próprio popup fecha o modal
            closeModal(modalContato);
        });
    }

    // Global Escape key handler (Modals, PillarsAccordion, Solucoes)
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            // 1. Close open modals first
            if (modalLidera && modalLidera.classList.contains('active')) {
                closeModal(modalLidera);
                return;
            }
            if (modalContato && modalContato.classList.contains('active')) {
                closeModal(modalContato);
                return;
            }

            // 2. Close active solution showcase
            const activeSolutionPanel = document.querySelector('.solutions__panel.is-active');
            if (activeSolutionPanel) {
                closeSolution();
                return;
            }

            // 3. Close expanded pillar
            const expandedPillar = document.querySelector('.pillars__item--is-expanded');
            if (expandedPillar) {
                closeAllPillars();
                expandedPillar.focus();
            }
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
