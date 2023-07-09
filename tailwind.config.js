/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './node_modules/flowbite/**/*.js',
    './node_modules/tailwind-datepicker-react/dist/**/*.js',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    backgroundPosition: {
      'center-40': '50% 40%',
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },

        brightRed: 'hsl(12, 88%, 59%)',
        brightRedLight: 'hsl(12, 88%, 69%)',
        brightRedSupLight: 'hsl(12, 88%, 95%)',
        darkBlue: '#0a4a7c',
        darkGrayishBlue: 'hsl(227, 12%, 61%)',
        brightBlue: '#00b7e3',
        deepBlue: '#0da3e8',
        oceanBlue: '#0da4e7',
        veryLightBlue: '#e9f8ff',
        borderBlue: '#d5f0ff',
        veryDarkBlue: '#030333',
        veryPaleRed: 'hsl(13, 100%, 96%)',
        veryLightGray: 'hsl(0, 0%, 98%)',
        grayishWhite: '#c4faff',
        darkBrown: '#3f3f3f',
        textGray: '#7b94a8',
        borderBlue: '#d5f0ff',
        borderGray: '#d6d6d6',
        menuBlue: '#0da3e3',
        pinkish: '#b7b7b7',
      },
      backgroundImage: {
        contactBg: "url('/contact-bg.png')",
        curveLine: "url('/curve-line.png')",
        hkWave: "url('/hk-wave.png')",
        ngoWave: "url('/ngo-wave.png')",
        preIpoCurveLine: "url('/pre-ipo-curve-line.png')",
        internalControlCurveLine: "url('/internal-control-curve-line.png')",
        lineBg: "url('/line-bg.png')",
        heroBg: "url('/hero-bg.png')",
        textBg: "url('/text-bg.png')",
        moreInfoBg: "url('/more-info.png')",
        titleBg: "url('/title-bg.png')",
        menuBg: "url('/menu.png')",
        popupBg: "url('/popup.png')",
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/forms')({ strategy: 'class' }),
    require('flowbite/plugin'),
  ],
}
