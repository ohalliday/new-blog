export interface WebsiteConfig {
  title: string;
  description: string;
  coverImage: string;
  logo: string;
  /**
   * Specifying a valid BCP 47 language helps screen readers announce text properly.
   * See: https://dequeuniversity.com/rules/axe/2.2/valid-lang
   */
  lang: string;
  /**
   * blog full path, no ending slash!
   */
  siteUrl: string;
  /**
   * full url, no username
   */
  facebook?: string;
  /**
   * full url, no username
   */
  twitter?: string;
  /**
   * hide or show all email subscribe boxes
   */
  showSubscribe: boolean;
  /**
   * create a list on mailchimp and then create an embeddable signup form. this is the form action
   */
  mailchimpAction?: string;
  /**
   * this is the hidden input field name
   */
  mailchimpName?: string;
  /**
   * name and id of the mailchimp email field
   */
  mailchimpEmailFieldName?: string;
  /**
  /**
   * Meta tag for Google Webmaster Tools
   */
  googleSiteVerification?: string;
  /**
  /**
   * Appears alongside the footer, after the credits
   */
  footer?: string;
}

const config: WebsiteConfig = {
  title: 'Owen Halliday',
  description: '18 y/o Software Developer 👨‍💻',
  coverImage: '',
  logo: 'img/colour-logo.png',
  lang: 'en',
  siteUrl: 'https://owenhalliday.co.uk',
  facebook: 'https://www.facebook.com/owenhalliday.co.uk',
  twitter: 'https://twitter.com/owenhalliday1',
  showSubscribe: true,
  mailchimpAction:
    'https://gmail.us20.list-manage.com/subscribe/post?u=495c232084f291d2604a7042f&amp;id=b4e5612d1d',
  mailchimpName: 'b_495c232084f291d2604a7042f_b4e5612d1d',
  mailchimpEmailFieldName: 'MERGE0',
  footer: '',
};

export default config;
