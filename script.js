document.addEventListener("DOMContentLoaded", function () {
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

    // Fix Smooth Cursor Movement for PC and Mobile
    function moveCursor(x, y) {
        requestAnimationFrame(() => {
            cursor.style.left = `${x}px`;
            cursor.style.top = `${y}px`;
        });
    }

    document.addEventListener("mousemove", (e) => {
        moveCursor(e.clientX, e.clientY);
    });

    document.addEventListener("touchmove", (e) => {
        let touch = e.touches[0];
        moveCursor(touch.clientX, touch.clientY);
    });

    // Show/hide cursor on touch events
    document.addEventListener("touchstart", () => cursor.style.display = "block");
    document.addEventListener("touchend", () => cursor.style.display = "none");

    // ✨ Typing Animation for "Hello World!.."
    const text = "Hello World!..";
    let index = 0;
    const typingElement = document.getElementById("typing-text");

    function typeText() {
        if (index < text.length) {
            typingElement.textContent += text.charAt(index);
            index++;
            setTimeout(typeText, 220);
        }
    }
    
    typeText();
});
