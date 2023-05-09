declare namespace RefreshModScssNamespace {
  export interface IRefreshModScss {
    autoRefreshWrapper: string;
  }
}

declare const RefreshModScssModule: RefreshModScssNamespace.IRefreshModScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: RefreshModScssNamespace.IRefreshModScss;
};

export = RefreshModScssModule;
