
describe("Form UI", () => {
  it("Should return true when title and subtitles was correct", () => {
    cy.visit("/");

    cy.contains("Page 1").should("to.have.length", 1);
    cy.contains("Cards").should("to.have.length", 1);
    cy.contains("Rotation Card").should("to.have.length", 1);
  });

  it("Should return the correct number of inputs", () => {
    cy.visit("/");

    cy.get("[data-cy=form-input]").should("have.length", 11);
    cy.get("[data-cy=form-submit]").should("have.length", 1);
  });
});
