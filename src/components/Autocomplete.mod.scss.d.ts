declare namespace AutocompleteModScssNamespace {
  export interface IAutocompleteModScss {
    autocompleteItem: string;
    autocompleteOptions: string;
  }
}

declare const AutocompleteModScssModule: AutocompleteModScssNamespace.IAutocompleteModScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: AutocompleteModScssNamespace.IAutocompleteModScss;
};

export = AutocompleteModScssModule;
