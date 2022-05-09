import { el } from "../../../src";

const page = el({
  getCookieButton: el("#getCookie .set-a-cookie"),
  getCookiesButton: el("#getCookies .set-a-cookie"),
  clearCookieButton: el("#clearCookie .set-a-cookie"),
  clearCookiesButton: el("#clearCookies .set-a-cookie"),
});

context("Cookies", () => {
  beforeEach(() => {
    Cypress.Cookies.debug(true);

    page.visit("https://example.cypress.io/commands/cookies");

    // clear cookies again after visiting to remove
    // any 3rd party cookies picked up such as cloudflare
    page.clearCookies();
  });

  it("cy.getCookie() - get a browser cookie", () => {
    // https://on.cypress.io/getcookie
    page.getCookieButton.click();

    // cy.getCookie() yields a cookie object
    page.getCookie("token").should("have.property", "value", "123ABC");
  });

  it("cy.getCookies() - get browser cookies", () => {
    // https://on.cypress.io/getcookies
    page.getCookies().should("be.empty");

    page.getCookiesButton.click();

    // cy.getCookies() yields an array of cookies
    page
      .getCookies()
      .should("have.length", 1)
      .should((cookies) => {
        // each cookie has these properties
        expect(cookies[0]).to.have.property("name", "token");
        expect(cookies[0]).to.have.property("value", "123ABC");
        expect(cookies[0]).to.have.property("httpOnly", false);
        expect(cookies[0]).to.have.property("secure", false);
        expect(cookies[0]).to.have.property("domain");
        expect(cookies[0]).to.have.property("path");
      });
  });

  it("cy.setCookie() - set a browser cookie", () => {
    // https://on.cypress.io/setcookie
    page.getCookies().should("be.empty");

    page.setCookie("foo", "bar");

    // cy.getCookie() yields a cookie object
    page.getCookie("foo").should("have.property", "value", "bar");
  });

  it("cy.clearCookie() - clear a browser cookie", () => {
    // https://on.cypress.io/clearcookie
    page.getCookie("token").should("be.null");

    page.clearCookieButton.click();

    page.getCookie("token").should("have.property", "value", "123ABC");

    // cy.clearCookies() yields null
    page.clearCookie("token").getCookie("token").should("be.null");
  });

  it("cy.clearCookies() - clear browser cookies", () => {
    // https://on.cypress.io/clearcookies
    page.getCookies().should("be.empty");

    page.clearCookiesButton.click();

    page.getCookies().should("have.length", 1);

    // cy.clearCookies() yields null
    page.clearCookies();

    page.getCookies().should("be.empty");
  });
});
