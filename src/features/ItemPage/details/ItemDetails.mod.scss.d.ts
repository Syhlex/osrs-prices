declare namespace ItemDetailsModScssNamespace {
  export interface IItemDetailsModScss {
    buySellIcon: string;
    grey: string;
    itemDetails: string;
    section: string;
    subtitle: string;
    table: string;
    title: string;
    titleSmall: string;
  }
}

declare const ItemDetailsModScssModule: ItemDetailsModScssNamespace.IItemDetailsModScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ItemDetailsModScssNamespace.IItemDetailsModScss;
};

export = ItemDetailsModScssModule;
