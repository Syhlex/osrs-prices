declare namespace NavBarModScssNamespace {
  export interface INavBarModScss {
    navbar: string;
  }
}

declare const NavBarModScssModule: NavBarModScssNamespace.INavBarModScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: NavBarModScssNamespace.INavBarModScss;
};

export = NavBarModScssModule;