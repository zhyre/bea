import React, { useState, useEffect, useRef } from "react";
import "./Loveletter.css";

function Loveletter() {
  const [displayedTitle, setDisplayedTitle] = useState("");
  const [showLetter, setShowLetter] = useState(false);
  const fullTitle = "Happy 5th month of us, my baby!";
  const canvasRef = useRef(null);

  useEffect(() => {
    // Typewriter effect
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullTitle.length) {
        setDisplayedTitle(fullTitle.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  const handleReveal = () => {
    setShowLetter(true);
  };

  // 🎇 Fireworks effect setup
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let fireworks = [];
    let particles = [];
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const random = (min, max) => Math.random() * (max - min) + min;

    class Firework {
      constructor(x, y, targetY, color) {
        this.x = x;
        this.y = y;
        this.targetY = targetY;
        this.color = color;
        this.speed = 2;
        this.done = false;
      }
      update() {
        this.y -= this.speed;
        if (this.y <= this.targetY) {
          this.done = true;
          for (let i = 0; i < 50; i++) {
            particles.push(new Particle(this.x, this.y, this.color));
          }
        }
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    class Particle {
      constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.radius = 2;
        this.alpha = 1;
        this.speedX = random(-3, 3);
        this.speedY = random(-3, 3);
        this.gravity = 0.05;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.speedY += this.gravity;
        this.alpha -= 0.02;
      }
      draw() {
        ctx.globalAlpha = this.alpha;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.globalAlpha = 1;
      }
    }

    const animate = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
      ctx.fillRect(0, 0, w, h);

      if (Math.random() < 0.03) {
        fireworks.push(
          new Firework(
            random(100, w - 100),
            h,
            random(100, h / 2),
            `hsl(${random(0, 360)}, 100%, 70%)`
          )
        );
      }

      fireworks.forEach((fw, i) => {
        fw.update();
        fw.draw();
        if (fw.done) fireworks.splice(i, 1);
      });

      particles.forEach((p, i) => {
        p.update();
        p.draw();
        if (p.alpha <= 0) particles.splice(i, 1);
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="love-container">
      {/* 🎇 Real fireworks canvas */}
      <canvas ref={canvasRef} className="fireworks-canvas"></canvas>

      <h1 className="typewriter">{displayedTitle}</h1>

      {!showLetter ? (
        <button className="reveal-button" onClick={handleReveal}>
          Click ni babyy hehehe
        </button>
      ) : (
        <div className="letter-layout">
          <div className="image-gallery">
            <img src="/assets/IMG_4267.jpg" alt="Me and you :>" className="memory-image" />
          </div>
          <div className="letter-content">
            <p className="letter-text">My dearest Bea,</p>
            <p className="letter-text">
              From the moment I met you, my world changed forever. Your smile lights up my darkest days,
              and your laughter is the sweetest music to my ears.
            </p>
            <p className="letter-text">
              You are my everything - my love, my inspiration, my best friend. Every day with you is a blessing,
              and I can't wait to create more beautiful memories together.
            </p>
            <p className="letter-text">
              I love you more than words can express. Forever yours, with all my heart.
            </p>
            <p className="letter-signature">Your tamtam</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Loveletter;
