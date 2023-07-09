declare namespace ItemDetailsModScssNamespace {
  export interface IItemDetailsModScss {
    actionBar: string;
    detailsBox: string;
    detailsSection: string;
    header: string;
    headerContainer: string;
    itemDetails: string;
    itemId: string;
    itemName: string;
  }
}

declare const ItemDetailsModScssModule: ItemDetailsModScssNamespace.IItemDetailsModScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ItemDetailsModScssNamespace.IItemDetailsModScss;
};

export = ItemDetailsModScssModule;
