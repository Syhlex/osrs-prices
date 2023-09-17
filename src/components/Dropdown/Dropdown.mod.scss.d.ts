declare namespace DropdownModScssNamespace {
  export interface IDropdownModScss {
    caret: string;
    dropdown: string;
    listItem: string;
    menu: string;
  }
}

declare const DropdownModScssModule: DropdownModScssNamespace.IDropdownModScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: DropdownModScssNamespace.IDropdownModScss;
};

export = DropdownModScssModule;
