import React, { useEffect, useRef, useCallback } from 'react';

const Gradient = (props) => {
  const canvasRef = useRef(null);

  const draw = useCallback((canvas, ctx) => {
    // Create linear gradient
    const gradient = ctx.createLinearGradient(
        canvas.width * 0.5, -200,
        canvas.width * 0.6, canvas.height * 0.5,
      );
      gradient.addColorStop(0, 'rgba(204, 255, 0, 0.2)'); // Start color ${Math.floor(scrollY / 5)}
      gradient.addColorStop(1, 'rgba(255, 0, 77, 0.2)'); // End color
  
      // Draw organic form
      ctx.beginPath();
      ctx.moveTo(0, canvas.height * 0.3);
      ctx.bezierCurveTo(
        canvas.width * 0.2, canvas.height * 0.6,
        canvas.width * 0.9, canvas.height * 0.7,
        canvas.width * 1.1, canvas.height * 0.6
      );
      ctx.lineTo(canvas.width, 0);
      ctx.lineTo(0, 0);
      ctx.closePath();
  
      // Fill the shape with a color or pattern
      ctx.fillStyle = gradient; // Change color as needed
      ctx.filter = `blur(${canvas.height / 10}px)`;
      ctx.fill();
  }, []);

  const handleResize = useCallback(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const ctx = canvas.getContext('2d');
      draw(canvas, ctx);
    }
  }, [draw]);

  useEffect(() => {
    const canvas = canvasRef.current;
    
    if (canvas) {
      handleResize();
    }

    // Event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  return <canvas ref={canvasRef} />;
};

export default Gradient;
