import { useTilt } from '@/hooks/useTilt';

export default function TiltCard({ children, className, style, strength = 10 }) {
  const { ref, onMouseMove, onMouseLeave } = useTilt(strength);
  return (
    <div
      ref={ref}
      className={className}
      style={style}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </div>
  );
}
