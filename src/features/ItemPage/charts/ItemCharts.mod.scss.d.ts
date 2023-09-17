declare namespace ItemChartsModScssNamespace {
  export interface IItemChartsModScss {
    itemCharts: string;
  }
}

declare const ItemChartsModScssModule: ItemChartsModScssNamespace.IItemChartsModScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ItemChartsModScssNamespace.IItemChartsModScss;
};

export = ItemChartsModScssModule;
