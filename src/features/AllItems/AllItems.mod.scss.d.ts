declare namespace AllItemsModScssNamespace {
  export interface IAllItemsModScss {
    allItems: string;
  }
}

declare const AllItemsModScssModule: AllItemsModScssNamespace.IAllItemsModScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: AllItemsModScssNamespace.IAllItemsModScss;
};

export = AllItemsModScssModule;
