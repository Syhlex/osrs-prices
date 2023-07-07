declare namespace IconModScssNamespace {
  export interface IIconModScss {
    iconDefault: string;
  }
}

declare const IconModScssModule: IconModScssNamespace.IIconModScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: IconModScssNamespace.IIconModScss;
};

export = IconModScssModule;
