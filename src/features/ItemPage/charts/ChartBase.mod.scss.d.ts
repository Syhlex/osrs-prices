declare namespace ChartBaseModScssNamespace {
  export interface IChartBaseModScss {
    chartCard: string;
    plot: string;
    subtitle: string;
    title: string;
  }
}

declare const ChartBaseModScssModule: ChartBaseModScssNamespace.IChartBaseModScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ChartBaseModScssNamespace.IChartBaseModScss;
};

export = ChartBaseModScssModule;
