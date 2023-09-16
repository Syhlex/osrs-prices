declare namespace SelectModScssNamespace {
  export interface ISelectModScss {
    dropdown: string;
    listItem: string;
    select: string;
  }
}

declare const SelectModScssModule: SelectModScssNamespace.ISelectModScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: SelectModScssNamespace.ISelectModScss;
};

export = SelectModScssModule;
