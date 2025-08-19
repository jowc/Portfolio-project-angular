describe("Home Page", () => {

    beforeEach(() => {
        cy.visit("localhost:4200")
    })
    

    it("should have Joseph Chikeme", () => {
        cy.get("h1").contains("Joseph Ojiofor Chikeme")
    })

    it("should load projects", () => {
        cy.get("app-projects-card").should("have.length.above", 2)
    })

    it("hero let's chat button should redirect to contact page", () => {
        cy.contains("Let's Chat").first().click()
        cy.url().should("equal", "http://localhost:4200/contact")
    })

    it("CTA let's chat button should redirect to contact page", () => {
        cy.contains("Let's Chat").last().click()
        cy.url().should("equal", "http://localhost:4200/contact")
    })
}) 