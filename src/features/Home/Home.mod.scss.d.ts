declare namespace HomeModScssNamespace {
  export interface IHomeModScss {
    header: string;
    highestVolumeCard: string;
    home: string;
    quickTipsCard: string;
    quickTipsList: string;
  }
}

declare const HomeModScssModule: HomeModScssNamespace.IHomeModScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: HomeModScssNamespace.IHomeModScss;
};

export = HomeModScssModule;
