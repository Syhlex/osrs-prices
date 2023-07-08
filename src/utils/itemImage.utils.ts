const ITEM_IMAGE_URL = 'https://oldschool.runescape.wiki/images/';

// Accepts the raw icon string from the item API
export const getItemImageSource = (icon: string) => {
  // Unescapes characters then replaces ' ' with '_'
  // eg. Bullseye%20lantern.png -> Bullseye_lantern.png
  return `${ITEM_IMAGE_URL}${decodeURIComponent(icon).replace(/ /g, '_')}`;
};
