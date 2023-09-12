declare namespace ItemPriceChartModScssNamespace {
  export interface IItemPriceChartModScss {
    itemPriceChart: string;
  }
}

declare const ItemPriceChartModScssModule: ItemPriceChartModScssNamespace.IItemPriceChartModScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ItemPriceChartModScssNamespace.IItemPriceChartModScss;
};

export = ItemPriceChartModScssModule;
