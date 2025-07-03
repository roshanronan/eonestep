import { useEffect } from 'react';

export const useHeaderEffects = () => {
  useEffect(() => {
    // Scroll handler
    const toggleScrolled = () => {
      const selectBody = document.querySelector('body');
      const selectHeader = document.querySelector('#header');
      if (!selectHeader?.classList.contains('scroll-up-sticky') && 
          !selectHeader?.classList.contains('sticky-top') && 
          !selectHeader?.classList.contains('fixed-top')) return;
      
      window.scrollY > 100 
        ? selectBody.classList.add('scrolled') 
        : selectBody.classList.remove('scrolled');
    };

    window.addEventListener('scroll', toggleScrolled);
    toggleScrolled(); // Initialize on mount

    // Mobile nav toggle
    const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

    const mobileNavToggle = () => {
        console.log(";;cllled")
      document.querySelector('body').classList.toggle('mobile-nav-active');
      mobileNavToggleBtn?.classList.toggle('bi-list');
      mobileNavToggleBtn?.classList.toggle('bi-x');
    };

    if (mobileNavToggleBtn) {
      mobileNavToggleBtn.addEventListener('click', mobileNavToggle);
    }

    // Navmenu click handlers
    document.querySelectorAll('#navmenu a').forEach(navmenu => {
      navmenu.addEventListener('click', () => {
        if (document.querySelector('.mobile-nav-active')) {
          mobileNavToggle();
        }
      });
    });

    // Dropdown toggles
    document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
      navmenu.addEventListener('click', function(e) {
        e.preventDefault();
        this.parentNode.classList.toggle('active');
        this.parentNode.nextElementSibling?.classList.toggle('dropdown-active');
        e.stopImmediatePropagation();
      });
    });

    // Cleanup
    return () => {
      window.removeEventListener('scroll', toggleScrolled);
      if (mobileNavToggleBtn) {
        mobileNavToggleBtn.removeEventListener('click', mobileNavToggle);
      }
    };
  }, []);
};

export const usePreloader = () => {
  useEffect(() => {
    const preloader = document.querySelector('#preloader');
    if (preloader) {
      const timer = setTimeout(() => {
        preloader.remove();
      }, 500); // Small delay to ensure everything loaded
      
      return () => clearTimeout(timer);
    }
  }, []);
};