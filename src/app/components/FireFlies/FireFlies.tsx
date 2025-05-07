const FireFlies = () => {
  const circles = new Array(15).fill(null);

  return circles.map((_, index) => {
    const size = Math.floor(Math.random() * 8) + 4; // 4px to 12px
    const startY = Math.floor(Math.random() * 20) + 100; // 100vh - 120vh
    const endY = -startY - Math.floor(Math.random() * 30);
    const startX = Math.floor(Math.random() * 100); // 0-100vw
    const endX = Math.floor(Math.random() * 100);
    const duration = Math.floor(Math.random() * 9000) + 28000; // 28s–37s
    const delay = Math.floor(Math.random() * 4000); // 0–4s

    const containerStyle: React.CSSProperties = {
      width: `${size}px`,
      height: `${size}px`,
      position: "absolute",
      animation: `move-${index} ${duration}ms linear infinite`,
      animationDelay: `${delay}ms`,
    };

    const circleStyle: React.CSSProperties = {
      width: "100%",
      height: "100%",
      borderRadius: "9999px",
      mixBlendMode: "screen",
      backgroundImage: `radial-gradient(#e9e9eb, #e9e9eb 10%, hsla(180, 100%, 80%, 0) 56%)`,
      animation: `fadeFrames 200ms infinite, scaleFrames 2s infinite`,
      animationDelay: `${Math.floor(Math.random() * 4000)}ms`,
    };

    const keyframeStyle = `
      @keyframes move-${index} {
        from {
          transform: translate3d(${startX}vw, ${startY}vh, 0);
        }
        to {
          transform: translate3d(${endX}vw, ${endY}vh, 0);
        }
      }
    `;

    return (
      <div key={index}>
        <style>{keyframeStyle}</style>
        <div style={containerStyle}>
          <div style={circleStyle}></div>
        </div>
      </div>
    );
  });
};

export default FireFlies;
