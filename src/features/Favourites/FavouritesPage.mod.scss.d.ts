declare namespace FavouritesPageModScssNamespace {
  export interface IFavouritesPageModScss {
    favouritesPage: string;
    header: string;
    noFavouritesText: string;
  }
}

declare const FavouritesPageModScssModule: FavouritesPageModScssNamespace.IFavouritesPageModScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: FavouritesPageModScssNamespace.IFavouritesPageModScss;
};

export = FavouritesPageModScssModule;
