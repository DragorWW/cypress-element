import { Page, Element } from "../../../src";

class AssertionPage<T> extends Page<T> {
  url = "https://example.cypress.io/commands/assertions";
  visit() {
    super.visit(this.url);

    return this;
  }
}

context("Assertions", () => {
  const assertionsPage = new AssertionPage(
    {},
    {
      table: new Element(
        { selector: ".assertion-table" },
        {
          firstRow: new Element({ selector: "tbody tr:last" }),
          lastRow: new Element({ selector: "tbody tr:last" }),
        }
      ),
      link: new Element({ selector: ".assertions-link" }),
      pBlock: new Element({ selector: ".assertions-p p" }),
      docsHeader: new Element({ selector: ".docs-header div" }),
      twoElements: new Element(
        { selector: ".two-elements" },
        {
          first: new Element({ selector: ".first" }),
          second: new Element({ selector: ".second" }),
        }
      ),
      randomNumber: new Element({ selector: "#random-number" }),
    }
  );

  beforeEach(() => {
    assertionsPage.visit();
  });

  describe("Implicit Assertions", () => {
    it(".should() - make an assertion about the current subject", () => {
      assertionsPage._.table._.firstRow.should("have.class", "success");
      assertionsPage._.table._.firstRow.el
        .find("td")
        .first()
        // checking the text of the <td> element in various ways
        .should("have.text", "Column content")
        .should("contain", "Column content")
        .should("have.html", "Column content")
        // chai-jquery uses "is()" to check if element matches selector
        .should("match", "td")
        // to match text content against a regular expression
        // first need to invoke jQuery method text()
        // and then match using regular expression
        .invoke("text")
        .should("match", /column content/i);

      // a better way to check element's text content against a regular expression
      // is to use "cy.contains"
      // https://on.cypress.io/contains
      assertionsPage._.table._.lastRow.el
        // finds first <td> element with text content matching regular expression
        .contains("td", /column content/i)
        .should("be.visible");

      // for more information about asserting element's text
      // see https://on.cypress.io/using-cypress-faq#How-do-I-get-an-element’s-text-contents
    });

    it(".and() - chain multiple assertions together", () => {
      assertionsPage._.link
        .should("have.class", "active")
        .and("have.attr", "href")
        .and("include", "cypress.io");
    });
  });

  describe("Explicit Assertions", () => {
    it("pass your own callback function to should()", () => {
      // Pass a function to should that can have any number
      // of explicit assertions within it.
      // The ".should(cb)" function will be retried
      // automatically until it passes all your explicit assertions or times out.
      assertionsPage._.pBlock.should(($p) => {
        // https://on.cypress.io/$
        // return an array of texts from all of the p's
        const texts = $p.map((i, el) => Cypress.$(el).text());

        // jquery map returns jquery object
        // and .get() convert this to simple array
        const paragraphs = texts.get();

        // array should have length of 3
        expect(paragraphs, "has 3 paragraphs").to.have.length(3);

        // use second argument to expect(...) to provide clear
        // message with each assertion
        expect(paragraphs, "has expected text in each paragraph").to.deep.eq([
          "Some text from first p",
          "More text from second p",
          "And even more text from third p",
        ]);
      });
    });

    it("finds element by class name regex", () => {
      assertionsPage._.docsHeader
        // .should(cb) callback function will be retried
        .should(($div) => {
          expect($div).to.have.length(1);

          const className = $div[0].className;

          expect(className).to.match(/heading-/);
        })
        .el.then(($div) => {
          expect($div, "text content").to.have.text("Introduction");
        });
    });

    it("can throw any error", () => {
      assertionsPage._.docsHeader.should(($div) => {
        if ($div.length !== 1) {
          // you can throw your own errors
          throw new Error("Did not find 1 element");
        }

        const className = $div[0].className;

        if (!className.match(/heading-/)) {
          throw new Error(`Could not find class "heading-" in ${className}`);
        }
      });
    });

    it("matches unknown text between two elements", () => {
      /**
       * Text from the first element.
       * @type {string}
       */
      let text;

      /**
       * Normalizes passed text,
       * useful before comparing text with spaces and different capitalization.
       * @param {string} s Text to normalize
       */
      const normalizeText = (s) => s.replace(/\s/g, "").toLowerCase();

      assertionsPage._.twoElements._.first.el.then(($first) => {
        // save text from the first element
        text = normalizeText($first.text());
      });

      assertionsPage._.twoElements._.second.should(($div) => {
        // we can massage text before comparing
        const secondText = normalizeText($div.text());

        expect(secondText, "second text").to.equal(text);
      });
    });

    it("retries the should callback until assertions pass", () => {
      assertionsPage._.randomNumber.should(($div) => {
        const n = parseFloat($div.text());

        expect(n).to.be.gte(1).and.be.lte(10);
      });
    });
  });
});
