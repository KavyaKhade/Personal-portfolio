// Automatically slide the element out after 1 second
window.onload = () => {
    setTimeout(() => {
        gsap.to(".slide-out", {
            duration: 0.8,         // Animation duration (in seconds)
            top: "-100%",         // Move the element vertically out of view
            ease: "Expo.easeInOut", // Smooth easing for the animation
        });
    }, 1000); // Delay the animation by 1 second (1000ms)
};
