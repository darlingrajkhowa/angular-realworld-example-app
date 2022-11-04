describe('Navigate to the URL', () => {
  it('passes', () => {
    cy.visit('http://localhost:4202/login')
  })
})


//Validate login with invalid password

describe('Verify the user is unable to login with incorrect username and password', () => {
  it('passes', () => {
    cy.get('input[formcontrolname = "email"]').click().type('cvtrtest1@certr.io')
    cy.get('input[formcontrolname = "password"]').click().type('Password')
    cy.get('#login_btn').click()
    cy.wait(5000)
    cy.get('.error-messages').should('have.text',' email or password is invalid ')
  })
})

//Validate login in with valid credentials


describe('Verify the user is able to login with correct username and password', () => {
  it('passes', () => {
    cy.visit('http://localhost:4202/login')
    cy.get('#id_email').type('cvtrtest1@convertr.io')
    cy.get('#id_password').type('Password!23')
    cy.get('#login_btn').click()
    cy.url().should('be.equal', 'http://localhost:4202/')
  })
})




  



