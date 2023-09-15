describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000/");
    cy.get('input[type="text"]').type("cat");
    cy.get("button").click();
    cy.get("article").find("span");
  });
});
