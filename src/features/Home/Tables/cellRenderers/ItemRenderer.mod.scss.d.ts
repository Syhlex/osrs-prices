declare namespace ItemRendererModScssNamespace {
  export interface IItemRendererModScss {
    itemRenderer: string;
  }
}

declare const ItemRendererModScssModule: ItemRendererModScssNamespace.IItemRendererModScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ItemRendererModScssNamespace.IItemRendererModScss;
};

export = ItemRendererModScssModule;
