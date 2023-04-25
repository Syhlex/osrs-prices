declare namespace HomeModScssNamespace {
  export interface IHomeModScss {
    header: string;
    home: string;
  }
}

declare const HomeModScssModule: HomeModScssNamespace.IHomeModScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: HomeModScssNamespace.IHomeModScss;
};

export = HomeModScssModule;
