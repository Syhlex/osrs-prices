declare namespace ItemHeaderModScssNamespace {
  export interface IItemHeaderModScss {
    actionBar: string;
    headerContainer: string;
    headerLeft: string;
    itemId: string;
    itemName: string;
  }
}

declare const ItemHeaderModScssModule: ItemHeaderModScssNamespace.IItemHeaderModScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ItemHeaderModScssNamespace.IItemHeaderModScss;
};

export = ItemHeaderModScssModule;
