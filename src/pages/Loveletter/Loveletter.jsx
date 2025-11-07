import React, { useState, useEffect, useRef } from "react";
import "./Loveletter.css";

function Loveletter() {
  const [displayedTitle, setDisplayedTitle] = useState("");
  const [showLetter, setShowLetter] = useState(false);
  const [showImage, setShowImage] = useState(false);
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

  const handleNext = () => {
    setShowImage(true);
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
            'white'
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
      ) : !showImage ? (
        <div className="letter-layout">
          <div className="image-gallery">
            <img src={`${process.env.PUBLIC_URL}/assets/IMG_4267.jpg`} alt="Me and you :>" className="memory-image" />
          </div>
          <div className="letter-content">
            <p className="letter-text">My dearest, Frances</p>
            <p className="letter-text">
              In my shelf full of mysteries and psychological thrillers, there's one book that stands out quietly, Jessica Roux's An Illustrated Guide to the Victorian Language of Flowers. It's nothing like the usual stories I read, but somehow, it pulled me in. Maybe because it's not about suspense or chaos, but about meaning , the kind that hides behind beauty.
            </p>
            <p className="letter-text">
              One of the many thoughts I have is to have one specific flower dedicated solely for you. I searched on Google and typed "flowers and their meanings." Roses for love, daisies for innocence, lilies for purity, all the usual ones. Until i came across Jessica Roux's and diving into her book made me realized how much deeper it actually goes. Every petal, every color, every scent tells a story, sometimes a promise, sometimes a memory.
            </p>
            <p className="letter-text">
              Those who have meanings tied to loyalty, tenderness, and quiet devotion caught my heart right away. But instead of choosing an existing flower, I ended up creating one. I'm not even sure if it exists in real life, but it felt right. I drew it with you in mind, with every stroke shaped by how I see you. I didn't want it to be perfect, I wanted it to feel like you, gentle, real, and just full of life.

            </p>
            <p className="letter-text">
              So this isn't just any flower. It's yours.
            </p>
            <p className="letter-text">
              And that is why I wanted to make something that lasts , something that carries a piece of how I see you and what you mean to me. Not just through words, but through something I made with my own. Because you deserve something that isn't just said, but created , something that exists because you inspired it.
            </p>
            <p className="letter-text">
              I hope when you see it, you'll realize how much you mean to me , and how beautiful you really are, in ways you probably don't even notice. It's not just about how you look, but how you are. The way your presence makes everything softer, lighter.
            </p>
            <p className="letter-text">
              This flower is my small way of showing that. A reminder that even in my quiet moments, you're there , in my thoughts, in the things I create, in the calm I try to hold onto. You've become a part of the peace I look for, and that's something I'll always be grateful for.
            </p>
            <p className="letter-text">
              I love you so much, my frances. And in the parallels that i created, the spaces between reality and imagined, thoughts and feeling,it's always you.
            </p>
            <p className="letter-signature">Your tamtam</p>
          </div>
          <button className="next-button" onClick={handleNext}>
            Next
          </button>
        </div>
      ) : (
        <div className="image-display">
          <img src={`${process.env.PUBLIC_URL}/assets/Origin (1350 x 1350 px).jpg`} alt="Special image" className="special-image" />
        </div>
      )}
    </div>
  );
}

export default Loveletter;
