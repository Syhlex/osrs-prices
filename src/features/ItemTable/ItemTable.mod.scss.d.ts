declare namespace ItemTableModScssNamespace {
  export interface IItemTableModScss {
    itemTable: string;
  }
}

declare const ItemTableModScssModule: ItemTableModScssNamespace.IItemTableModScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ItemTableModScssNamespace.IItemTableModScss;
};

export = ItemTableModScssModule;