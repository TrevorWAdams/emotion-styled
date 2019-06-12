import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.666,
  headerFontFamily: ['system-ui', 'sans-serif'],
  bodyFontFamily: ['system-ui', 'sans-serif'],
})


export const { scale, rhythm, options } = typography
export default typography