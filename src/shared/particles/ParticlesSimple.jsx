import React, { useEffect, useRef } from 'react';

const ParticlesSimple = () => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    // console.log('🎨 ParticlesSimple component mounted');
    
    // Create a simple canvas-based particle system as fallback
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const particles = [];
    // Repulse configuration (like particles.js)
    const repulseConfig = {
      distance: 200,        // Repulsion distance (like particles.js repulse.distance)
      duration: 0.4,        // How long the repulsion lasts
      speed: 1              // Repulsion speed multiplier
    };
    const mouse = { x: 0, y: 0, radius: repulseConfig.distance };
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      // console.log('📐 Canvas resized to:', canvas.width, 'x', canvas.height);
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Mouse interaction
    const handleMouseMove = (event) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = event.clientX - rect.left;
      mouse.y = event.clientY - rect.top;
    };
    
    const handleMouseLeave = () => {
      mouse.x = -1000; // Move mouse off-screen
      mouse.y = -1000;
    };
    
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    
    // Create responsive particle count
    const isMobile = window.innerWidth <= 768;
    const particleCount = isMobile ? 60 : 150; // Much higher particle count
    
    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * (isMobile ? 1 : 2.5), // Slower on mobile
        vy: (Math.random() - 0.5) * (isMobile ? 1 : 2.5),
        size: Math.random() * 3 + 1// Normal sized particles
      });
    }
    
    // console.log('✨ Created', particles.length, 'particles');
    
    // Animation loop
    const animate = () => {
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw particles with theme colors
      ctx.fillStyle = '#F5D061'; // Your theme's accent color
      ctx.shadowColor = '#F5D061';
      ctx.shadowBlur = 6;
      
      particles.forEach(particle => {
        // Repulse effect (like particles.js repulse mode)
        const dx = mouse.x - particle.x;
        const dy = mouse.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < repulseConfig.distance) {
          const angle = Math.atan2(dy, dx);
          const force = (repulseConfig.distance - distance) / repulseConfig.distance;
          const repelStrength = force * repulseConfig.speed * 10; // Configurable strength
          
          // Apply repulsion force (push away from mouse)
          particle.x -= Math.cos(angle) * repelStrength;
          particle.y -= Math.sin(angle) * repelStrength;
        }
        
        // Update position with original velocity
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Bounce off edges
        if (particle.x <= particle.size || particle.x >= canvas.width - particle.size) {
          particle.vx *= -1;
          particle.x = Math.max(particle.size, Math.min(canvas.width - particle.size, particle.x));
        }
        if (particle.y <= particle.size || particle.y >= canvas.height - particle.size) {
          particle.vy *= -1;
          particle.y = Math.max(particle.size, Math.min(canvas.height - particle.size, particle.y));
        }
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });
      
      // Reset shadow for connections
      ctx.shadowColor = 'transparent';
      ctx.shadowBlur = 0;
      
      // Draw connections with subtle theme colors
      ctx.strokeStyle = 'rgba(245, 208, 97, 0.3)'; // Semi-transparent theme color
      ctx.lineWidth = 1;
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          const currentIsMobile = window.innerWidth <= 768;
          const connectionDistance = currentIsMobile ? 80 : 120; // Shorter connections on mobile
          if (distance < connectionDistance) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);
  
  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 10, // Above content divs but below text
        pointerEvents: 'auto', // Enable hover interactions
        // No background color for clean look
      }}
    />
  );
};

export default ParticlesSimple;
