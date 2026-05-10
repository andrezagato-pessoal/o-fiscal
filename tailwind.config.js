/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.cljs",
    "./public/**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        // Neutrais (Cash)
        cream:    '#FBF6EF',
        panel:    '#FFFFFF',
        'panel-2':'#F5EFE5',
        ink:      { DEFAULT: '#231C12', 2: '#6B5F4D', 3: '#A99A82' },
        rule:     { DEFAULT: '#E8DFD0', soft: '#F2EBDD' },
        warm:     '#E97A3F',
        ok:       '#2E8254',
        bad:      '#C04545',
        warn:     '#D08A2A',
        // Pessoas (mantidas)
        andre:    '#3B82F6',
        bianca:   '#EC4899',
        fernanda: '#14B8A6',
        bruna:    '#F97316',
        conjunta: '#8B5CF6',
      },
      fontFamily: {
        sans: ['Manrope', 'ui-sans-serif', 'system-ui', '-apple-system'],
      },
      fontSize: {
        display: ['2rem', { lineHeight: '1.05', letterSpacing: '-0.025em', fontWeight: '700' }],
      },
      borderRadius: {
        'panel': '18px',
        'modal': '24px',
        'pill':  '999px',
      },
      boxShadow: {
        soft:  '0 1px 2px rgba(35,28,18,0.04), 0 4px 12px rgba(35,28,18,0.04)',
        modal: '0 30px 80px rgba(35,28,18,0.35)',
        fab:   '0 12px 24px rgba(35,28,18,0.28)',
      },
    },
  },
  plugins: [],
}
