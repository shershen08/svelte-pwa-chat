describe("The home page", function() {
    it("has menu", function() {
      cy.visit("/");
      cy.get("nav")
        .contains("svg");
    });
  });