import Typography from 'typography'

const typography = new Typography({
  googleFonts: [
    {
      name: 'Montserrat',
      styles: ['400']
    },
    {
      name: 'Bai Jamjuree',
      styles: ['400']
    }
  ],
  baseFontSize: '10px',
  baseLineHeight: 1.666,
  headerFontFamily: ['Montserrat', 'sans-serif'],
  bodyFontFamily: ['Bai Jamjuree', 'sans-serif']
})

export default typography
