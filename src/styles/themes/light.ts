export interface ILightTheme {
  title: string;
  colors: {
    primary: {
      main: string;
    };
  };
}

const LightTheme: ILightTheme = {
  title: 'light',
  colors: {
    primary: {
      main: '#F5DB13',
    },
  },
};

export default LightTheme;
