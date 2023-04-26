declare namespace CardModScssNamespace {
  export interface ICardModScss {
    card: string;
    cardContent: string;
    cardHeader: string;
  }
}

declare const CardModScssModule: CardModScssNamespace.ICardModScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: CardModScssNamespace.ICardModScss;
};

export = CardModScssModule;
