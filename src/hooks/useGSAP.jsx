import { useEffect } from 'react';

export const useGSAP = () => {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.gsap) {
      // Register ScrollTrigger plugin
      window.gsap.registerPlugin(window.ScrollTrigger);

      // Hero section animation
      window.gsap.from('.animate-float', {
        y: 100,
        opacity: 0,
        duration: 2,
        ease: 'bounce.out'
      });

      // Scroll-triggered animations for cards
      window.gsap.utils.toArray('.tilt-card').forEach(card => {
        window.gsap.from(card, {
          y: 100,
          opacity: 0,
          duration: 1,
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        });
      });

      // Tilt effect for cards
      document.querySelectorAll('.tilt-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
          window.gsap.to(this, {
            rotationY: 5,
            rotationX: 5,
            scale: 1.05,
            duration: 0.3,
            ease: 'power2.out'
          });
        });
        
        card.addEventListener('mouseleave', function() {
          window.gsap.to(this, {
            rotationY: 0,
            rotationX: 0,
            scale: 1,
            duration: 0.3,
            ease: 'power2.out'
          });
        });
      });
    }
  }, []);
};
