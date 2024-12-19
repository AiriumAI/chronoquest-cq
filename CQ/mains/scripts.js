document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("timelineCanvas");
    const ctx = canvas.getContext("2d");

    // Set canvas dimensions
    canvas.width = window.innerWidth;
    canvas.height = 300;

    // Timeline animation logic
    const timeline = {
        x: 0,
        speed: 2,
        draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = "rgba(255, 191, 0, 0.8)";
            for (let i = this.x; i < canvas.width; i += 150) {
                ctx.beginPath();
                ctx.arc(i, canvas.height / 2, 10, 0, Math.PI * 2);
                ctx.fill();
            }
        },
        update() {
            this.x -= this.speed;
            if (this.x < -150) this.x = 0;
        },
    };

    // Animate the timeline
    function animate() {
        timeline.update();
        timeline.draw();
        requestAnimationFrame(animate);
    }

    animate();
});
