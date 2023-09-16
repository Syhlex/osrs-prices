declare namespace ItemChartBaseModScssNamespace {
  export interface IItemChartBaseModScss {
    itemChartCard: string;
    plot: string;
    subtitle: string;
    title: string;
  }
}

declare const ItemChartBaseModScssModule: ItemChartBaseModScssNamespace.IItemChartBaseModScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ItemChartBaseModScssNamespace.IItemChartBaseModScss;
};

export = ItemChartBaseModScssModule;
