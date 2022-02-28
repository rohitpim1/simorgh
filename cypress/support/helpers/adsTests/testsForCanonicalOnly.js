import path from 'ramda/src/path';
import config from '../../config/services';
import envConfig from '../../config/envs';

export default ({ service }) => {
  describe(`Canonical Ads`, () => {
    it('should be displayed based on whether ads toggle is enabled/disabled', () => {
      const serviceName = config[service].name;
      cy.on('uncaught:exception', err => {
        expect(err.message).to.include('Cannot read properties of undefined');
        return false;
      });
      cy.getToggles(serviceName).then(() => {
        cy.fixture(`toggles/${serviceName}.json`).then(toggles => {
          const adsEnabled = path(['ads', 'enabled'], toggles);

          if (adsEnabled) {
            cy.url().then(currentURL => {
              cy.visit(currentURL, {
                headers: {
                  'BBC-Adverts': 'true',
                },
              });
            });

            const dataPath = `${envConfig.baseUrl}${Cypress.env(
              'currentPath',
            )}.json`;

            cy.request(dataPath).then(({ body: jsonData }) => {
              const adCampaignKeyword = path(
                ['metadata', 'adCampaignKeyword'],
                jsonData,
              );

              // Bootstrap script should exist on Canonical
              cy.get('head script[src*="dotcom-bootstrap.js"]').should('exist');
              cy.get('head script[type="text/javascript"]').should(scripts => {
                expect(scripts).to.contain('pageAds: true');

                if (adCampaignKeyword) {
                  expect(scripts).to.contain(
                    `adcampaign: '${adCampaignKeyword}'`,
                  );
                }
              });

              // Leaderboard & MPU
              cy.get('[data-e2e="advertisement"]').within(() => {
                cy.get('[id="dotcom-leaderboard"]').should('exist');
                cy.get('[id="dotcom-mpu"]').should('exist');
              });
            });
          } else {
            cy.log(`Ads not enabled for ${service}`);
          }
        });
      });
    });
  });
};
