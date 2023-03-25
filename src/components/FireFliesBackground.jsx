import React, { useEffect, useRef } from 'react';
import '../bootstrap/scss/components/_ffb.scss';

const FirefliesBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let width = window.innerWidth;
        let height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;

        const fireflies = [];

        function Firefly(x, y) {
            this.x = x;
            this.y = y;
            this.vx = Math.random() * 4 - 1;
            this.vy = Math.random() * 4 - 1;
            this.opacity = 1;
            this.color = ["rgb(190, 18, 251)", "rgb(18, 195, 251)", "rgb(79, 251, 18)"][Math.floor(Math.random() * 3)];
            console.log(this.color);
        }

        Firefly.prototype.update = function () {
            this.x += this.vx;
            this.y += this.vy;

            if (this.x < 0 || this.x > width) {
                this.vx *= -1;
            }

            if (this.y < 0 || this.y > height) {
                this.vy *= -1;
            }
        };

        Firefly.prototype.draw = function () {
            ctx.beginPath();
            ctx.fillStyle = this.color;
            ctx.globalAlpha = this.opacity;
            ctx.shadowBlur = 10;
            ctx.shadowColor = "white"
            ctx.arc(this.x, this.y, 1.5, 0, Math.PI * 2);
            ctx.fill();
        };

        function loop() {
            ctx.clearRect(0, 0, width, height);

            while (fireflies.length < 200) {
                fireflies.push(new Firefly(Math.random() * width, Math.random() * height));
            }

            fireflies.forEach(firefly => {
                firefly.update();
                firefly.draw();
            });

            requestAnimationFrame(loop);
        }

        loop();

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            width = window.innerWidth;
            height = window.innerHeight;
        };




        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    return (
        <canvas className="fireflies-background" ref={canvasRef} text='canvas' />
    );
};

export default FirefliesBackground;
