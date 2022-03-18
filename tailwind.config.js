module.exports = {
	mode: 'jit',
      content: [
    // Example content paths...
    './dist/**/*.html',
    './src/**/*.{js,ts,html}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'mont': 'Montserrat',
        'ubuntu': 'Ubuntu',
      },
      colors: {
        'primary' : {
          500 : '#6619cc',
          100 : '#b9b0c4bd'
        },
        'accent' : '#cc3366',
      }
    },
  },
  plugins: [],
}
