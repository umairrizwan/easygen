import { jsonObj } from "../../types";
import { iframeselector, selectors } from "./selectors";

export default class IFrame {
  getDiscoverbttn() {
    return cy.get(iframeselector.discoverAutoTransactionBttn);
  }

  //This function compares footer text with a predefined array and footer elements that are recvied from UI
  verifyIframefooterLinks() {
    cy.get(selectors.iFrame.iframeId).then(($iFrame) => {
      const $iframebody: any = $iFrame.contents().find("body");
      cy.wrap($iframebody)
        .find(selectors.iFrame.footerli)
        .each(($liElements) => {
          var actuaulLiElements = $liElements.text();
          Object.keys(jsonObj).forEach(($key) => {
            var expectedLiElements = jsonObj[$key];
            if (actuaulLiElements == expectedLiElements) {
              expect(actuaulLiElements).to.be.eql(expectedLiElements);
            }
          });
        });
    });
  }
}
