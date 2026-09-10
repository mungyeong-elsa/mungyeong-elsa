/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Brand color system — "Warm Editorial + Modern Digital"
        base: '#F7F5F0', // Background
        ink: '#17251F', // Main Dark
        text: '#27302C', // Text
        muted: '#737A74', // Secondary
        forest: '#667A63', // Natural Green
        beige: '#D8CBB8', // Warm Beige
        accent: '#B87952', // Accent
        paper: '#FFFFFF', // White
      },
      fontFamily: {
        sans: [
          'Pretendard',
          'Pretendard Variable',
          '-apple-system',
          'BlinkMacSystemFont',
          'system-ui',
          'Roboto',
          '"Noto Sans KR"',
          '"Malgun Gothic"',
          'sans-serif',
        ],
        display: [
          'Manrope',
          'Inter',
          'Pretendard',
          '-apple-system',
          'system-ui',
          'sans-serif',
        ],
      },
      fontSize: {
        // Fluid / responsive typography helpers
        'fluid-hero': 'clamp(2.75rem, 7vw, 5.5rem)',
        'fluid-h2': 'clamp(1.9rem, 4.2vw, 3.25rem)',
        'fluid-h3': 'clamp(1.35rem, 2.4vw, 2rem)',
        'fluid-lead': 'clamp(1.125rem, 1.6vw, 1.5rem)',
      },
      maxWidth: {
        content: '1280px',
        prose: '68ch',
      },
      spacing: {
        section: 'clamp(5rem, 12vw, 9rem)',
      },
      letterSpacing: {
        label: '0.22em',
      },
      transitionTimingFunction: {
        soft: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s cubic-bezier(0.22, 1, 0.36, 1) both',
        'fade-in': 'fade-in 0.9s ease both',
        'scale-in': 'scale-in 0.8s cubic-bezier(0.22, 1, 0.36, 1) both',
      },
    },
  },
  plugins: [],
}
