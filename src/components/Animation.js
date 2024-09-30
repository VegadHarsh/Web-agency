import { useEffect } from 'react';
import "../CSS/animation.css"; // Import the animation CSS

const Animation = () => {
    const handleScrollForMultipleElements = () => {
        const elementSelectors = ['.animate-on-scroll', '.animate-on-scroll-left', '.animate-on-scroll-right', '.animate-on-scroll-zoom'];
        const elements = document.querySelectorAll(elementSelectors.join(','));

        elements.forEach(element => {
            if (isPartiallyInViewport(element)) {
                const animation = element.getAttribute('data-animation'); // Assuming the animation type is stored in a data attribute
                element.classList.add('animate', animation);
            }
        });
    };

    const isPartiallyInViewport = (element) => {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        const windowWidth = window.innerWidth || document.documentElement.clientWidth;

        const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
        const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);

        return vertInView && horInView;
    };

    useEffect(() => {
        handleScrollForMultipleElements(); // Run initially to check for elements in view
        window.addEventListener('scroll', handleScrollForMultipleElements);

        return () => {
            window.removeEventListener('scroll', handleScrollForMultipleElements);
        };
    }, []);

    return null; // Since this component is for side effects (animations), it returns nothing.
};

export default Animation;
