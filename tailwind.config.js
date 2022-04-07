module.exports = {
  content: [
    './index.html',
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'red': '#C85853',
        'bglight': '#FFEED9',
        'bgdark': '#FFDDBF',
        'whitee': '#FFF8F2',
        'colortitle': '#594F43',
        'colorparagraph': '#594F43'
      }
    },
    fontFamily: {
      'title': ['Eczar'],
      'paragraph': ['Work Sans']
    }
  },
  plugins: [],
}

