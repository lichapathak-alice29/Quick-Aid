import { useEffect } from 'react';

/**
 * Adds an IntersectionObserver that toggles the `is-visible` class on every
 * element with the `reveal` class, triggering a CSS transition as it scrolls
 * into view. Re-runs whenever `deps` change so dynamically rendered content
 * is picked up.
 */
export function useReveal(deps: unknown[] = []) {
  useEffect(() => {
    let observer: IntersectionObserver | null = null;
    const frameId = requestAnimationFrame(() => {
      const els = document.querySelectorAll<HTMLElement>('.reveal:not(.is-visible)');
      if (els.length === 0) return;

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              if (observer) {
                observer.unobserve(entry.target);
              }
            }
          });
        },
        { threshold: 0.05, rootMargin: '0px 0px -40px 0px' }
      );

      els.forEach((el) => observer?.observe(el));
    });

    return () => {
      cancelAnimationFrame(frameId);
      if (observer) {
        observer.disconnect();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
