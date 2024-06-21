      AOS.init({
            offset: 50, // Offset from the top
            duration: 1000 // Duration of the animation
      });

        // Disable AOS when scrolling up
        let lastScrollTop = 0;
        window.addEventListener("scroll", function() {
            let st = window.pageYOffset || document.documentElement.scrollTop;
            if (st > lastScrollTop){
                AOS.refreshHard(); // Refresh AOS
            }
            lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
        }, false);
