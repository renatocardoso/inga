/**
 * INGA - Web Experience Script
 * Handles premium visual enhancements like subtle parallax, loading transitions, and console branding.
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Console Branding
    console.log(
        '%c INGA %c Inovação e Gestão Ambiental %c',
        'background:#2c9f9a;color:#fff;padding:4px 6px;border-radius:3px 0 0 3px;font-weight:bold;',
        'background:#333;color:#fff;padding:4px 6px;border-radius:0 3px 3px 0;',
        'background:transparent'
    );

    // 2. DOM Elements
    const bgContainer = document.getElementById('bg-container');
    const mainLayout = document.getElementById('main-layout');

    // 3. Page Load Transition
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 1s ease-in-out';
    
    // Trigger fade-in
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);

    // 4. Premium Mouse Parallax (Only on Desktop / Landscape Viewports)
    const isDesktop = window.matchMedia('(min-width: 901px)');
    
    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;
    
    // Parallax intensity (higher number = less movement)
    const intensity = 40;

    const handleMouseMove = (e) => {
        if (!isDesktop.matches) return;

        // Calculate offset from window center (-0.5 to 0.5)
        mouseX = (e.clientX / window.innerWidth) - 0.5;
        mouseY = (e.clientY / window.innerHeight) - 0.5;
    };

    const updateParallax = () => {
        if (isDesktop.matches) {
            // Smooth interpolation (lerp)
            currentX += (mouseX - currentX) * 0.08;
            currentY += (mouseY - currentY) * 0.08;

            // Apply translation offset + slight scale to prevent seeing edges
            const translateX = currentX * -intensity;
            const translateY = currentY * -intensity;
            
            bgContainer.style.transform = `scaleX(-1) scale(1.05) translate3d(${translateX}px, ${translateY}px, 0)`;
        } else {
            // Reset to mobile style which is handled by CSS transform
            bgContainer.style.transform = '';
        }
        
        requestAnimationFrame(updateParallax);
    };

    // Add listeners
    window.addEventListener('mousemove', handleMouseMove);
    
    // Start animation loop
    requestAnimationFrame(updateParallax);

    // Handle screen resize/orientation changes cleanly
    window.addEventListener('resize', () => {
        if (!isDesktop.matches) {
            // Ensure styles reset cleanly on mobile
            bgContainer.style.transform = '';
            mouseX = 0;
            mouseY = 0;
            currentX = 0;
            currentY = 0;
        }
    });
});
