module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'app-index': '#E5E5E5',
        'app-header': '#FFF',
        'app-light': '#C5CAE9',
        'app-accent': '#FF5252',
        app: {
          50: '#F4F5FB',
          100: '#E8EBF7',
          200: '#CACFED',
          300: '#ACB4E2',
          400: '#7E8BD2',
          500: '#3F51B5',
          600: '#37479F',
          700: '#313E8C',
          800: '#273372',
          900: '#1C234F'
        }
      }
    }
  },
  plugins: []
}
