
    // Function to handle smooth scrolling
    function smoothScroll(target, duration) {
        const targetElement = document.querySelector(target);
        const targetPosition = targetElement.getBoundingClientRect().top;
        const startPosition = window.pageYOffset;
        const startTime = performance.now();
        
        function scrollAnimation(currentTime) {
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);
            const ease = easeOutCubic(progress);
            window.scrollTo(0, startPosition + targetPosition * ease);
            
            if (timeElapsed < duration) {
                requestAnimationFrame(scrollAnimation);
            }
        }
        
        // Easing function
        function easeOutCubic(t) {
            return (t = t - 1) * t * t + 1;
        }
        
        requestAnimationFrame(scrollAnimation);
    }
    
    // Listen for click events on the "Get Started" button
    const getStartedButton = document.querySelector('.cta-button');
    getStartedButton.addEventListener('click', function (event) {
        event.preventDefault();
        smoothScroll('#about', 1000); // Adjust the duration as needed
    });

    function rotate() {
         var lastChild = $('.slider div:last-child').clone();

          $('.slider div').removeClass('.firstSlide');

          $('.slider div:last-child').remove();

          $('.slider').append(lastChild);
          
          $(lastChild).addClass('firstChild');
}

window.setInterval(function() {
       rotate()
}, 1000); 


