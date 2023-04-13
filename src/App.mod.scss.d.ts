declare namespace AppModScssNamespace {
  export interface IAppModScss {
    app: string;
  }
}

declare const AppModScssModule: AppModScssNamespace.IAppModScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: AppModScssNamespace.IAppModScss;
};

export = AppModScssModule;
