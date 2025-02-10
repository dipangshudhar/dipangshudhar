document.addEventListener("DOMContentLoaded", function() {
    const starsContainer = document.querySelector(".stars");
    const cursor = document.querySelector(".cursor");

    // Generate random stars
    for (let i = 0; i < 100; i++) {
        let star = document.createElement("div");
        star.classList.add("star");
        star.style.left = `${Math.random() * 100}vw`;
        star.style.top = `${Math.random() * 100}vh`;
        star.style.animationDuration = `${Math.random() * 3 + 2}s`;
        starsContainer.appendChild(star);
    }

    // Remove asteroid after animation
    setTimeout(() => {
        let asteroid = document.querySelector(".asteroid");
        if (asteroid) {
            asteroid.remove();
        }
    }, 2500);

    // Move Cursor on Mouse Move (Desktop)
    document.addEventListener("mousemove", (e) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    });

    // Move Cursor on Tap (Mobile)
    document.addEventListener("touchmove", (e) => {
        let touch = e.touches[0];
        cursor.style.left = `${touch.clientX}px`;
        cursor.style.top = `${touch.clientY}px`;
    });

    // Show cursor when touching
    document.addEventListener("touchstart", () => {
        cursor.style.display = "block";
    });

    // Hide cursor when touch ends
    document.addEventListener("touchend", () => {
        cursor.style.display = "none";
    });
});