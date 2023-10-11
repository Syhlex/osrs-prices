declare namespace PaginationModScssNamespace {
  export interface IPaginationModScss {
    goToFirstPageButton: string;
    goToLastPageButton: string;
    goToNextPageButton: string;
    goToPreviousPageButton: string;
    pageDisplay: string;
  }
}

declare const PaginationModScssModule: PaginationModScssNamespace.IPaginationModScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: PaginationModScssNamespace.IPaginationModScss;
};

export = PaginationModScssModule;
