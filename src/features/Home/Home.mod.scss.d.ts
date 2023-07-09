declare namespace HomeModScssNamespace {
  export interface IHomeModScss {
    favouriteText: string;
    header: string;
    highestVolumeCard: string;
    highlightedText: string;
    home: string;
    italicText: string;
    quickTipsCard: string;
    quickTipsList: string;
  }
}

declare const HomeModScssModule: HomeModScssNamespace.IHomeModScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: HomeModScssNamespace.IHomeModScss;
};

export = HomeModScssModule;
