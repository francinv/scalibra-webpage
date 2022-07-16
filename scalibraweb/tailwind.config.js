module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'sundown': '#ffb3b3',
      'stratos': '#01012f',
      'guardsmanred': '#cc0000',
      'white': '#ffffff',
      'athensgray': '#E6E6EA',
      'softred': '#db4d4d',
      'guardsmanred_op': 'rgba(204, 0, 0, 0.8)',
    },
    fontFamily: {
      'body': ['Quicksand', 'Montserrat', 'sans-serif']
    },
    borderWidth: {
      default: '1px',
      '50': '0.5px',
      '1': '1px',
      '2': '2px',
    },
    extend: {
      width: {
        'screen-': '80vw',
      },
    },
    extend: {},
  },
  plugins: [],
}
