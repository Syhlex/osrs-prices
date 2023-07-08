declare namespace AutocompleteModScssNamespace {
  export interface IAutocompleteModScss {
    autocomplete: string;
    autocompleteItem: string;
    autocompleteItemImage: string;
    autocompleteOptions: string;
    input: string;
    listItem: string;
  }
}

declare const AutocompleteModScssModule: AutocompleteModScssNamespace.IAutocompleteModScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: AutocompleteModScssNamespace.IAutocompleteModScss;
};

export = AutocompleteModScssModule;
