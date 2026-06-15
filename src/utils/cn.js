// Lightweight classname helper (no external dep needed)
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}