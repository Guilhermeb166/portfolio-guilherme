'use client';

import React, { useEffect, useRef } from 'react';

export function LightLines({
  className,
  linesOpacity = 0.1,
  lightsOpacity = 0.7,
  speedMultiplier = 1.5,
  gradientFrom = "#0f0f0f",
  gradientTo = "#1a1a2e",
  lightColor = "#4ade80",
  lineColor = "#4ade80",
}) {
  const containerRef = useRef(null);
  const animationsRef = useRef([]);
  const frameRef = useRef(null);

  useEffect(() => {
    const lightsDown = [
      { selector: ".light4", from: -1080, to: 1080 },
      { selector: ".light5", from: -1080, to: 1080 },
      { selector: ".light6", from: -1080, to: 1080 },
      { selector: ".light7", from: -1080, to: 1080 },
      { selector: ".light8", from: -1080, to: 1080 },
      { selector: ".light11", from: -1080, to: 1080 },
      { selector: ".light12", from: -1080, to: 1080 },
      { selector: ".light13", from: -1080, to: 1080 },
      { selector: ".light14", from: -1080, to: 1080 },
      { selector: ".light15", from: -1080, to: 1080 },
      { selector: ".light16", from: -1080, to: 1080 },
    ];

    const lightsUp = [
      { selector: ".light1", from: 1080, to: -1080 },
      { selector: ".light2", from: 1080, to: -1080 },
      { selector: ".light3", from: 1080, to: -1080 },
      { selector: ".light9", from: 1080, to: -1080 },
      { selector: ".light10", from: 1080, to: -1080 },
      { selector: ".light17", from: 1080, to: -1080 },
    ];

    const container = containerRef.current;
    if (!container) return;

    const allLights = [...lightsDown, ...lightsUp];
    animationsRef.current = allLights.map((light) => {
      const element = container.querySelector(light.selector);
      const duration = (Math.floor(Math.random() * 59) + 2) * 0.5 + 0.5;
      return { element, from: light.from, to: light.to, duration: duration / speedMultiplier };
    });

    const animationState = animationsRef.current.map(() => ({
      startTime: performance.now() - Math.random() * 5000,
    }));

    const animate = (time) => {
      animationsRef.current.forEach((ref, index) => {
        if (!ref.element) return;
        const state = animationState[index];
        const elapsed = (time - state.startTime) / 1000;
        const progress = (elapsed % ref.duration) / ref.duration;
        const currentY = ref.from + (ref.to - ref.from) * progress;
        ref.element.style.transform = `translateY(${currentY}px)`;
      });
      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [speedMultiplier]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        position: 'absolute',
        inset: 0,
        height: '100%',
        width: '100%',
        overflow: 'visible',
        background: `linear-gradient(180deg, ${gradientFrom} 0%, ${gradientTo} 100%)`,
        zIndex: 0,
        pointerEvents: 'none'
      }}
    >
      <svg
        style={{ 
          position: 'absolute', 
          height: '100%', 
          width: '100%',
          left: '50%',
          transform: 'translateX(-50%)'
        }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
      >
        <g style={{ opacity: linesOpacity }}>
          <rect x="1253.6" width="4.5" height="1080" style={{ fill: lineColor }} />
          <rect x="873.3" width="1.8" height="1080" style={{ fill: lineColor }} />
          <rect x="1100" width="1.8" height="1080" style={{ fill: lineColor }} />
          <rect x="1547.1" width="4.5" height="1080" style={{ fill: lineColor }} />
          <rect x="615" width="4.5" height="1080" style={{ fill: lineColor }} />
          <rect x="684.6" width="1.8" height="1080" style={{ fill: lineColor }} />
          <rect x="1369.4" width="1.8" height="1080" style={{ fill: lineColor }} />
          <rect x="1310.2" width="0.9" height="1080" style={{ fill: lineColor }} />
          <rect x="1233.4" width="0.9" height="1080" style={{ fill: lineColor }} />
          <rect x="124.2" width="0.9" height="1080" style={{ fill: lineColor }} />
          <rect x="1818.4" width="4.5" height="1080" style={{ fill: lineColor }} />
          <rect x="70.3" width="4.5" height="1080" style={{ fill: lineColor }} />
          <rect x="1618.6" width="1.8" height="1080" style={{ fill: lineColor }} />
          <rect x="455.9" width="1.8" height="1080" style={{ fill: lineColor }} />
          <rect x="328.7" width="1.8" height="1080" style={{ fill: lineColor }} />
          <rect x="300.8" width="4.6" height="1080" style={{ fill: lineColor }} />
          <rect x="1666.4" width="0.9" height="1080" style={{ fill: lineColor }} />
        </g>
        <g style={{ opacity: lightsOpacity }}>
          <path className="light1" style={{ fill: lightColor }} d="M619.5,298.4H615v19.5h4.5V298.4z M619.5,674.8H615v9.8h4.5V674.8z M619.5,135.1H615v5.6h4.5V135.1z M619.5,55.5H615v68.7h4.5V55.5z" />
          <path className="light2" style={{ fill: lightColor }} d="M1258.2,531.9h-4.5v8.1h4.5V531.9z M1258.2,497.9h-4.5v17.9h4.5V497.9z M1258.2,0h-4.5v25.3h4.5V0z M1258.2,252.2h-4.5v42.4h4.5V252.2z" />
          <path className="light3" style={{ fill: lightColor }} d="M875.1,123.8h-1.8v4h1.8V123.8z M875.1,289.4h-1.8v24.1h1.8V289.4z M875.1,0h-1.8v31.4h1.8V0z M875.1,50.2h-1.8v11.5h1.8V50.2z" />
          <path className="light4" style={{ fill: lightColor }} d="M1101.8,983.8h-1.8v8.2h1.8V983.8z M1101.8,1075.9h-1.8v4.1h1.8V1075.9z M1101.8,873.7h-1.8v4.2h1.8V873.7z M1101.8,851h-1.8v18.2h1.8V851z" />
          <path className="light5" style={{ fill: lightColor }} d="M686.4,822.7h-1.8v3.8h1.8V822.7z M686.4,928.4h-1.8v23h1.8V928.4z M686.4,1043.8h-1.8v36.2h1.8V1043.8z" />
          <path className="light6" style={{ fill: lightColor }} d="M1551.6,860.9h-4.4v-34.1h4.4V860.9z M1551.6,533.5h-4.4v-13.9h4.4V533.5z M1551.6,1080h-4.4v-89.1h4.4V1080z" />
          <path className="light7" style={{ fill: lightColor }} d="M1311.1,707.7h-0.9V698h0.9V707.7z M1311.1,436.8h-0.9v-58.9h0.9V436.8z M1311.1,140.7h-0.9V48h0.9V140.7z" />
          <path className="light8" style={{ fill: lightColor }} d="M125.1,514.5h-0.9v-9.7h0.9V514.5z M125.1,243.6h-0.9v-58.9h0.9V243.6z" />
          <path className="light9" style={{ fill: lightColor }} d="M305.4,806.7h-4.6v-42.5h4.6V806.7z M305.4,398.5h-4.6v-17.3h4.6V398.5z M305.4,1080h-4.6V968.8h4.6V1080z" />
          <path className="light10" style={{ fill: lightColor }} d="M1822.9,170.7h-4.5v13.7h4.5V170.7z M1822.9,435.1h-4.5v9.5h4.5V435.1z M1822.9,0h-4.5v25.3h4.5V0z M1822.9,58.3h-4.5v30.6h4.5V58.3z" />
          <path className="light11" style={{ fill: lightColor }} d="M1620.4,1080h-1.8V991.6h1.8V1080z M1620.4,874.6h-1.8v-17.9h1.8V874.6z M1620.4,753.1h-1.8v-25.3h1.8V753.1z" />
          <path className="light12" style={{ fill: lightColor }} d="M457.7,1080h-1.8V956.2h1.8V1080z M457.7,874.6h-1.8v-17.9h1.8V874.6z M457.7,753.1h-1.8v-25.3h1.8V753.1z" />
          <path className="light13" style={{ fill: lightColor }} d="M330.5,1080h-1.8V956.2h1.8V1080z M330.5,874.6h-1.8v-17.9h1.8V874.6z M330.5,753.1h-1.8v-25.3h1.8V753.1z" />
          <path className="light14" style={{ fill: lightColor }} d="M1234.3,1080h-0.9V943.4h0.9V1080z M1234.3,853.5h-0.9v-13.7h0.9V853.5z M1234.3,760.3h-0.9v-19.4h0.9V760.3z" />
          <path className="light15" style={{ fill: lightColor }} d="M1667.3,1080h-0.9V943.4h0.9V1080z M1667.3,853.5h-0.9v-13.7h0.9V853.5z M1667.3,760.3h-0.9v-19.4h0.9V760.3z" />
          <path className="light16" style={{ fill: lightColor }} d="M1371.2,1080h-1.8V943.4h1.8V1080z M1371.2,853.5h-1.8v-13.7h1.8V853.5z M1371.2,760.3h-1.8v-19.4h1.8V760.3z" />
          <path className="light17" style={{ fill: lightColor }} d="M74.8,321.6H70.3v13.7h4.5V321.6z M74.8,586H70.3v9.5h4.5V586z M74.8,150.9H70.3v25.3h4.5V150.9z M74.8,209.2H70.3v30.6h4.5V209.2z" />
        </g>
      </svg>
    </div>
  );
}
