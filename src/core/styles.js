export const styles = `
  :root {
    --svg-duration: 1s;
  }

  [data-icon] {
    display: inline-block;
    vertical-align: middle;
    background-color: currentColor;
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
    -webkit-mask-position: center;
    mask-position: center;
    -webkit-mask-size: contain;
    mask-size: contain;
  }

  /* Keyframes */
  @keyframes svg-spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
  @keyframes svg-spin-reverse { 0% { transform: rotate(0deg); } 100% { transform: rotate(-360deg); } }
  @keyframes svg-spin-pulse { 0% { transform: rotate(0deg); } 50% { transform: rotate(180deg); opacity: 0.5; } 100% { transform: rotate(360deg); opacity: 1; } }
  @keyframes svg-beat { 0%, 90%, 100% { transform: scale(1); } 45% { transform: scale(1.25); } }
  @keyframes svg-beat-fade { 0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.4; transform: scale(1.125); } }
  @keyframes svg-bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-25%); } }
  @keyframes svg-fade { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
  @keyframes svg-flip { 0% { transform: perspective(400px) rotateY(0); } 100% { transform: perspective(400px) rotateY(360deg); } }
  @keyframes svg-shake { 0%, 100% { transform: rotate(0deg); } 25% { transform: rotate(15deg); } 75% { transform: rotate(-15deg); } }

  /* Speed Modifiers */
  .svg-fast { --svg-duration: 0.5s; }
  .svg-slow { --svg-duration: 2s; }
  .svg-super-slow { --svg-duration: 3s; }

  /* Standard Animations (Infinite) */
  .svg-spin { animation: svg-spin var(--svg-duration, 2s) linear infinite; }
  .svg-spin-reverse { animation: svg-spin-reverse var(--svg-duration, 2s) linear infinite; }
  .svg-spin-pulse { animation: svg-spin-pulse var(--svg-duration, 2s) steps(8) infinite; }
  .svg-beat { animation: svg-beat var(--svg-duration, 1s) infinite; }
  .svg-beat-fade { animation: svg-beat-fade var(--svg-duration, 1s) infinite; }
  .svg-bounce { animation: svg-bounce var(--svg-duration, 1s) infinite; }
  .svg-fade { animation: svg-fade var(--svg-duration, 2s) infinite; }
  .svg-flip { animation: svg-flip var(--svg-duration, 2s) infinite; }
  .svg-shake { animation: svg-shake var(--svg-duration, 1s) infinite; }

  /* Hover Variants (Run on self hover OR group hover) */
  .svg-hover-spin:hover, .group:hover .svg-hover-spin { animation: svg-spin var(--svg-duration, 2s) linear infinite; }
  .svg-hover-spin-reverse:hover, .group:hover .svg-hover-spin-reverse { animation: svg-spin-reverse var(--svg-duration, 2s) linear infinite; }
  .svg-hover-spin-pulse:hover, .group:hover .svg-hover-spin-pulse { animation: svg-spin-pulse var(--svg-duration, 2s) steps(8) infinite; }
  .svg-hover-beat:hover, .group:hover .svg-hover-beat { animation: svg-beat var(--svg-duration, 1s) infinite; }
  .svg-hover-beat-fade:hover, .group:hover .svg-hover-beat-fade { animation: svg-beat-fade var(--svg-duration, 1s) infinite; }
  .svg-hover-bounce:hover, .group:hover .svg-hover-bounce { animation: svg-bounce var(--svg-duration, 1s) infinite; }
  .svg-hover-fade:hover, .group:hover .svg-hover-fade { animation: svg-fade var(--svg-duration, 2s) infinite; }
  .svg-hover-flip:hover, .group:hover .svg-hover-flip { animation: svg-flip var(--svg-duration, 2s) infinite; }
  .svg-hover-shake:hover, .group:hover .svg-hover-shake { animation: svg-shake var(--svg-duration, 1s) infinite; }
`;

export function injectStyles() {
  if (typeof document === 'undefined') return;

  if (!document.getElementById('svglet-styles')) {
    const style = document.createElement('style');
    style.id = 'svglet-styles';
    style.textContent = styles;
    document.head.appendChild(style);
  }
}
