/// <reference types='cypress'/>
import { BasePage } from "../../pageobjects/base/baseClass";
import HomeActions from "../../pageobjects/homepage/actions-homepage";
import IFrame from "../../pageobjects/homepage/actions-iframe";
import { selectors } from "../../pageobjects/homepage/selectors";
import { DROPDOWN_OPTIONS, TITLES, iFrame_TITLE } from "../../types";

describe("Test Suite To Automate UI Elements And Also IFrame Elements", () => {
  const homepageactions = new HomeActions();
  const iframeactions = new IFrame();
  var filePath = "";

  beforeEach(() => {
    const basepage = new BasePage();

    basepage.visitHomePage();
    cy.fixture("example").then((response) => {
      filePath = response.filePath;
    });
  });

  it("TC-01 [Positive Case] - Verify elements on Homepage separately", () => {
    //Asserting header title
    homepageactions.getHeader().invoke("text").should("not.be.empty");
    homepageactions
      .getHeader()
      .contains(TITLES.HEADER_TITLE)
      .should("have.text", TITLES.HEADER_TITLE);

    //Asserting home title
    homepageactions.getHeader().should("not.have.text", "");
    homepageactions
      .getHomeButton()
      .contains(TITLES.HOME_TITLE)
      .should("have.text", TITLES.HOME_TITLE);

    //Selecting dropdown options
    homepageactions.selectDynamicDropdown(DROPDOWN_OPTIONS.OPTION_ONE);

    //Using Custom commands to verify both the  aler types [ALERT and CONFIRM] & also its text
    cy.verifyAlerts("Alert User", "Alert");
    cy.verifyAlerts("Confirm User", "Confirm");
  });

  it("TC-02 [Positive Case] - Verify elements on Homepage via single function", () => {
    //This is another way of asserting elements with one methos
    homepageactions.verifyUIElements();
  });

  it("TC-03 [Positive Case] - Custom function to read content from file and use it for alerts", () => {
    //Calling custom command to read file via cy.task()
    cy.ReadFile(filePath).then((fileText) => {
      cy.wrap(fileText);
      const message: string = fileText;

      cy.get(selectors.alertNameTxtBox).type(message);
      cy.get(selectors.confirmBttn).click();
      cy.on("window:confirm", (response) => {
        expect(response).to.be.eql(
          `Hello ${message}, Are you sure you want to confirm?`
        );
      });
    });
  });

  it("TC-04 [Positive Case] - Verify elements within iFrame", () => {
    //Asserting Iframe title should be visible and also have text [All-in-one course creation tool for enterprises]
    cy.get(selectors.iFrame.iframeId).then(($iFrame) => {
      const $iframebody: any = $iFrame.contents().find("body");
      cy.wrap($iframebody)
        .find(selectors.iFrame.headerTitle)
        .should("be.visible")
        .then((response) => {
          const actualHeaderText = response.text();
          expect(actualHeaderText).to.be.eql(iFrame_TITLE.IFRAME_HEADER_TITLE);
        });

      //Asserting Iframe title should be visible and also have text [Learn how to use Easygenerator in 2 minutes]
      cy.wrap($iframebody)
        .find(selectors.iFrame.headerh2title)
        .should("be.visible")
        .then((response) => {
          var title = response.text();
          expect(title).to.be.eql(iFrame_TITLE.IFRAME_HEADER_TITLE2);
        });

      cy.wrap($iframebody)
        .find(selectors.iFrame.discoverAutoTransactionBttn)
        .should("be.visible");

      //The following function checks the text in the footer links
      iframeactions.verifyIframefooterLinks();
    });
  });
});
