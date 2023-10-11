declare namespace FilterInputModScssNamespace {
  export interface IFilterInputModScss {
    input: string;
  }
}

declare const FilterInputModScssModule: FilterInputModScssNamespace.IFilterInputModScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: FilterInputModScssNamespace.IFilterInputModScss;
};

export = FilterInputModScssModule;
