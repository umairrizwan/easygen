import { DROPDOWN_OPTIONS, TITLES, jsonObj } from "../../types";
import { selectors } from "./selectors";

export default class HomeActions {
  getHeader() {
    return cy.get(selectors.header);
  }

  getHomeButton() {
    return cy.get(selectors.homebutton);
  }

  selectDynamicDropdown(dropdownValue) {
    return cy.get(selectors.dropdown).select(dropdownValue);
  }

  //The following function will assert majority UI elements appearing on the UI
  verifyUIElements = () => {
    const homeactions = new HomeActions();
    homeactions.getHeader().invoke("text").should("not.be.empty");
    homeactions
      .getHeader()
      .contains(TITLES.HEADER_TITLE)
      .should("have.text", TITLES.HEADER_TITLE);

    homeactions.getHeader().should("not.have.text", "");
    homeactions
      .getHomeButton()
      .contains(TITLES.HOME_TITLE)
      .should("have.text", TITLES.HOME_TITLE);

    homeactions.selectDynamicDropdown(DROPDOWN_OPTIONS.OPTION_THREE);

    //Using Custom commands to verify ALERT and CONFIRM & also its text
    cy.verifyAlerts("Alert User", "Alert");
    cy.verifyAlerts("Confirm User", "Confirm");
  };
}
