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
  lighest: string
}

export interface Theme {
  primary: {
    darker: string
    main: string
    /**
     * # LIGHTER PRIMARY COLOR
     * ![horse wat](https://media.giphy.com/media/xULW8Fes0Tau8uOic0/giphy.gif)
     *  - light theme: "rgba(71,71,71, 0.4)",
     *  - dark theme: unimplemented!
     */
    lighter: string
  }
  secondary: {
    main: string
  }
  background: {
    main: string
    darker: string
  }
  accentBlue: Color
  neutral: Color
  focus: {
    main: string
    lighter: string
  }
}

const lightTheme: Theme = {
  primary: {
    darker: '#2A2A2A',
    main: '#474747',
    lighter: 'rgba(71,71,71, 0.4)'
  },
  secondary: {
    main: '#ffffff'
  },
  background: {
    main: '#F3F3F3',
    darker: ''
  },
  accentBlue: {
    darkest: '#0A343D',
    darker: '#14697A',
    dark: '#1B8CA3',
    main: '#22AFCC',
    light: '#64C7DB',
    lighter: '#A6DFEA',
    lighest: '#D2EFF4'
  },
  neutral: {
    darkest: '#2D2D2D',
    darker: '#474747',
    dark: '#797979',
    main: '#B2B2B2',
    light: '#DFDFDF',
    lighter: '#F3F3F3',
    lighest: '#FAFAFA'
  },
  focus: {
    main: '#2574A9',
    lighter: 'rgba(37,116,169, 0.3)'
  }
}

const darkTheme: Theme = {
  focus: {
    lighter: '',
    main: ''
  },
  primary: {
    main: '#F3F3F3',
    darker: '',
    lighter: ''
  },
  secondary: {
    main: '#000'
  },
  background: {
    darker: '#2A2A2A',
    main: '#474747'
  },
  accentBlue: {
    darkest: '0A343D',
    darker: '14697A',
    dark: '1B8CA3',
    main: '22AFCC',
    light: '64C7DB',
    lighter: 'A6DFEA',
    lighest: 'D2EFF4'
  }
}

const theme = {
  lightTheme,
  darkTheme
}

// export type Theme = typeof theme;

export default theme
