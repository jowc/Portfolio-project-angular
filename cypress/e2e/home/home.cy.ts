describe("Home Page", () => {
    

    it("should have Joseph Chikeme", () => {
        cy.visit("localhost:4200")
        cy.get("h1").contains("Joseph Ojiofor Chikeme")
    })
})