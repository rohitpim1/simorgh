import envConfig from '../support/config/envs';
import services from '../support/config/services';
import { hasHtmlLangDirAttributes } from '../support/bodyTestHelper';

describe('Article Meta Tests', () => {
  // eslint-disable-next-line no-undef
  before(() => {
    cy.visit(`/news/articles/${services.news.pageTypes.articles.asset}`);
  });

  it('should have the correct lang & dir attributes', () => {
    hasHtmlLangDirAttributes({ lang: 'en-gb', dir: 'ltr' });
  });

  it('should have a nofollow meta tag', () => {
    cy.retrieveMetaDataContent('head meta[name="robots"]', 'noodp,noydir');
  });

  it('should load a maximum of two Reith font files', () => {
    const fontFamiliesArray = [];
    cy.get('*')
      .each(element => {
        const fontFamily = Cypress.$(element).css('font-family');
        if (
          fontFamily &&
          !fontFamiliesArray.includes(fontFamily) &&
          fontFamily.startsWith('Reith')
        ) {
          fontFamiliesArray.push(fontFamily);
        }
      })
      .then(() => {
        expect(fontFamiliesArray.length).to.be.lessThan(3);
        expect(fontFamiliesArray.length).to.be.greaterThan(0);
      });
  });

  it('should have resource hints', () => {
    const resources = [
      envConfig.assetOrigin,
      'https://ichef.bbci.co.uk',
      'https://gel.files.bbci.co.uk',
    ];

    resources.forEach(resource => {
      const selector = `head link[href="${resource}"]`;
      cy.get(selector).should('have.attr', 'rel', 'preconnect');
      cy.get(selector)
        .eq(1)
        .should('have.attr', 'rel', 'dns-prefetch');
    });
  });

  it('should have the correct facebook metadata', () => {
    cy.facebookMeta(
      '100004154058350',
      '1609039196070050',
      'https://www.facebook.com/bbcnews',
    );
  });

  it('should have the correct open graph metadata', () => {
    cy.openGraphMeta(
      'Meghan follows the royal bridal tradition started by the Queen Mother in 1923.',
      'https://www.bbc.co.uk/news/special/2015/newsspec_10857/bbc_news_logo.png',
      'BBC News',
      'en_GB',
      'BBC News',
      "Meghan's bouquet laid on tomb of unknown warrior",
      'article',
      `https://www.bbc.com/news/articles/${services.news.pageTypes.articles.asset}`,
    );
  });
  it('should have the correct twitter metadata', () => {
    cy.twitterMeta(
      'summary_large_image',
      '@BBCNews',
      'Meghan follows the royal bridal tradition started by the Queen Mother in 1923.',
      'BBC News',
      'https://www.bbc.co.uk/news/special/2015/newsspec_10857/bbc_news_logo.png',
      '@BBCNews',
      "Meghan's bouquet laid on tomb of unknown warrior",
    );
  });

  it('should include metadata that matches the JSON data', () => {
    cy.metadataAssertion();
  });

  it('should include the canonical URL & ampHTML', () => {
    const currentOrigin = window.location.origin;
    const canonicalOrigin = 'https://www.bbc.com';
    cy.checkCanonicalURL(
      `${canonicalOrigin}/news/articles/${services.news.pageTypes.articles.asset}`,
    );
    cy.checkAmpHTML(
      `${currentOrigin}/news/articles/${services.news.pageTypes.articles.asset}.amp`,
    );
  });

  it('should include metadata in the head on AMP pages', () => {
    cy.metadataAssertionAMP(
      `/news/articles/${services.news.pageTypes.articles.asset}.amp`,
    );
  });

  it('should include mainEntityOfPage in the LinkedData', () => {
    cy.get('script[type="application/ld+json"]')
      .should('contain', 'mainEntityOfPage')
      .and('contain', 'author')
      .and('contain', 'headline');
  });
});
