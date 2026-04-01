import { useEffect, useCallback } from 'react';

export const useScrollReveal = () => {
  const initReveal = useCallback(() => {
    const observerOptions = {
      root: null,
      threshold: 0.15,
      rootMargin: "0px 0px -60px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe all .reveal elements not already visible
    const elements = document.querySelectorAll('.reveal:not(.is-visible)');
    elements.forEach(el => observer.observe(el));

    return observer;
  }, []);

  useEffect(() => {
    // Small delay to ensure DOM is fully rendered
    const timer = setTimeout(() => {
      const observer = initReveal();
      return () => observer.disconnect();
    }, 100);

    return () => clearTimeout(timer);
  }, [initReveal]);

  // Also re-observe on any DOM mutation (handles dynamic content)
  useEffect(() => {
    const mutationObserver = new MutationObserver(() => {
      const unrevealed = document.querySelectorAll('.reveal:not(.is-visible)');
      if (unrevealed.length > 0) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.15, rootMargin: "0px 0px -60px 0px" });
        unrevealed.forEach(el => observer.observe(el));
      }
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });
    return () => mutationObserver.disconnect();
  }, []);
};
