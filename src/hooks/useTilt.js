import { useRef, useCallback } from 'react';

export function useTilt(strength = 10) {
  const ref = useRef(null);

  const onMouseMove = useCallback((e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width  - 0.5) * strength;
    const y = ((e.clientY - r.top)  / r.height - 0.5) * strength;
    el.style.transform = `perspective(800px) rotateX(${-y}deg) rotateY(${x}deg) translateZ(14px) scale(1.02)`;
    el.style.transition = 'none';
  }, [strength]);

  const onMouseLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = '';
    el.style.transition = 'transform 0.5s ease, box-shadow 0.5s ease';
  }, []);

  return { ref, onMouseMove, onMouseLeave };
}
