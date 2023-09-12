declare namespace ItemPageModScssNamespace {
  export interface IItemPageModScss {
    itemPage: string;
  }
}

declare const ItemPageModScssModule: ItemPageModScssNamespace.IItemPageModScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ItemPageModScssNamespace.IItemPageModScss;
};

export = ItemPageModScssModule;
