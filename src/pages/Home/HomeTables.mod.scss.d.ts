declare namespace HomeTablesModScssNamespace {
  export interface IHomeTablesModScss {
    container: string;
  }
}

declare const HomeTablesModScssModule: HomeTablesModScssNamespace.IHomeTablesModScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: HomeTablesModScssNamespace.IHomeTablesModScss;
};

export = HomeTablesModScssModule;
