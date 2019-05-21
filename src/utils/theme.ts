export interface Color {
  /**
   * 900
   */
  darkest: string
  /**
   * 800
   */
  darker: string
  /**
   * 700
   */
  dark: string
  /**
   * 600
   */
  main: string
  /**
   * 500
   */
  light: string
  /**
   * 400
   */
  lighter: string
  /**
   * 300
   */
  lightest: string
}

export interface Theme {
  primary: Color
  accentBlue: Color
  accentOrange: Color
  accentRed: Color
  accentYellow: Color
  neutral: Color
  focus: {
    main: string
    lighter: string
  }
}

const lightTheme: Theme = {
  primary: {
    darkest: '#0F4224',
    darker: '#166336',
    dark: '#1E8448',
    main: '#26A65B',
    light: '#51B77B',
    lighter: '#A8DBBD',
    lightest: '#E9F6EE'
  },
  accentBlue: {
    darkest: '#0A343D',
    darker: '#14697A',
    dark: '#1B8CA3',
    main: '#22AFCC',
    light: '#64C7DB',
    lighter: '#A6DFEA',
    lightest: '#D2EFF4'
  },
  accentOrange: {
    darkest: '#664213',
    darker: '#99631D',
    dark: '#CC8427',
    main: '#FFA631',
    light: '#FFC06E',
    lighter: '#FFE4C1',
    lightest: '#FFF6EA'
  },
  accentRed: {
    darkest: '#4C1E1E',
    darker: '#7F3333',
    dark: '#B24747',
    main: '#FF6667',
    light: '#FF9393',
    lighter: '#FFC1C1',
    lightest: '#FFE0E0'
  },
  accentYellow: {
    darkest: '#614D17',
    darker: '#917422',
    dark: '#C29B2E',
    main: '#F3C13A',
    light: '#F6D475',
    lighter: '#FBECC3',
    lightest: '#FDF8EB'
  },
  neutral: {
    darkest: '#2D2D2D',
    darker: '#474747',
    dark: '#797979',
    main: '#B2B2B2',
    light: '#DFDFDF',
    lighter: '#F3F3F3',
    lightest: '#FAFAFA'
  },
  focus: {
    main: '#2574A9',
    lighter: 'rgba(37,116,169, 0.3)'
  }
}

const darkTheme: Theme = {
  primary: {
    darkest: '#0F4224',
    darker: '#166336',
    dark: '#1E8448',
    main: '#26A65B',
    light: '#51B77B',
    lighter: '#A8DBBD',
    lightest: '#E9F6EE'
  },
  accentBlue: {
    darkest: '#0A343D',
    darker: '#14697A',
    dark: '#1B8CA3',
    main: '#22AFCC',
    light: '#64C7DB',
    lighter: '#A6DFEA',
    lightest: '#D2EFF4'
  },
  accentOrange: {
    darkest: '#664213',
    darker: '#99631D',
    dark: '#CC8427',
    main: '#FFA631',
    light: '#FFC06E',
    lighter: '#FFE4C1',
    lightest: '#FFF6EA'
  },
  accentRed: {
    darkest: '#4C1E1E',
    darker: '#7F3333',
    dark: '#B24747',
    main: '#FF6667',
    light: '#FF9393',
    lighter: '#FFC1C1',
    lightest: '#FFE0E0'
  },
  accentYellow: {
    darkest: '#614D17',
    darker: '#917422',
    dark: '#C29B2E',
    main: '#F3C13A',
    light: '#F6D475',
    lighter: '#FBECC3',
    lightest: '#FDF8EB'
  },
  neutral: {
    darkest: '#2D2D2D',
    darker: '#474747',
    dark: '#797979',
    main: '#B2B2B2',
    light: '#DFDFDF',
    lighter: '#F3F3F3',
    lightest: '#FAFAFA'
  },
  focus: {
    main: '#2574A9',
    lighter: 'rgba(37,116,169, 0.3)'
  }
}

const theme = {
  lightTheme,
  darkTheme
}

// export type Theme = typeof theme;

export default theme
