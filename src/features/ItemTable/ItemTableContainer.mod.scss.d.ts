declare namespace ItemTableContainerModScssNamespace {
  export interface IItemTableContainerModScss {
    itemTableContainer: string;
  }
}

declare const ItemTableContainerModScssModule: ItemTableContainerModScssNamespace.IItemTableContainerModScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ItemTableContainerModScssNamespace.IItemTableContainerModScss;
};

export = ItemTableContainerModScssModule;
