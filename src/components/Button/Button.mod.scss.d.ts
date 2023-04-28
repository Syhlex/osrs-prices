declare namespace ButtonModScssNamespace {
  export interface IButtonModScss {
    navButton: string;
  }
}

declare const ButtonModScssModule: ButtonModScssNamespace.IButtonModScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ButtonModScssNamespace.IButtonModScss;
};

export = ButtonModScssModule;
