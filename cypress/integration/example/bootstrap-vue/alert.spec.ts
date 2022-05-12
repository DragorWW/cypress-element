import { el } from "../../../../src";

const alert = el({
  name: "alert",
  el: ".alert",
  close() {
    this.find(".close").click();
  },
});

const page = el({
  name: "AlertPage",
  visit() {
    cy.visit(`https://bootstrap-vue.org/docs/components/alert`);
  },
  dismissibleAlerts: el({
    el: ".vue-example-b-alert-dismiss",
    alert,
  }),
});

describe("alert", () => {
  beforeEach(() => {
    page.visit();
  });
  it("dismissible alerts", () => {
    page.dismissibleAlerts.alert
      .scrollIntoView({ offset: { top: -100, left: 0 } })
      .should("be.visible");
    page.dismissibleAlerts.alert.close();

    page.dismissibleAlerts.find(alert.el).should("not.exist");
  });
});
