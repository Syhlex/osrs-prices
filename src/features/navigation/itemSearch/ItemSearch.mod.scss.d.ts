declare namespace ItemSearchModScssNamespace {
  export interface IItemSearchModScss {
    autocomplete: string;
  }
}

declare const ItemSearchModScssModule: ItemSearchModScssNamespace.IItemSearchModScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ItemSearchModScssNamespace.IItemSearchModScss;
};

export = ItemSearchModScssModule;
