// Generic page Class. Used to hold some page elements that exist on all pages
export class Page {
  static url = '/';

  /**
   * A map of identifier to selector used to translate feature file wording to html selectors
   */
  static elements = {
    // left hand side is the name used in your feature file. Right hand side is a valid css selector
    'header links': '.header__link',
    'elemental area': '#main',
    'footer': 'footer',
    'header': 'header',
    'skip link container': '#skiplink',
    'skip link': '#skiplink a'
  }
}
