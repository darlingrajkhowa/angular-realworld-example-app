describe('Verify the user is able to login with correct username and password', () => {
    it('passes', () => {
      cy.visit('http://localhost:4202/login')
      cy.get('#id_email').type('cvtrtest1@convertr.io')
      cy.get('#id_password').type('Password!23')
      cy.get('#login_btn').click()
      cy.wait(3000)
    })
  })

  describe('Verify the user is able to create an article', () => {
    it('passes', () => {
      
      cy.wait(5000)
      cy.visit('http://localhost:4202/editor')
      cy.get('#title').type('my first blog')
      cy.get('input[formcontrolname = "description"]').type('my blog description')
      cy.get('#body').type('here goes the blog body')
      cy.get('#tags').type("tag1{enter}")
      cy.get('#publish').click()
      cy.wait(5000)

      if (cy.get('.error-messages').should('exist','blank')){
        cy.log("please enter all fields")
      }
      
      else {
        cy.url().should('include', 'article')
      }
      cy.wait(5000)
    
      //cy.get('#publish').click()
      //cy.url().should('include', 'article')
    })
  })
  describe('Verify the user is able to delete the selected article', () => {
    it('passes', () => {
        cy.visit('http://localhost:4202/profile/cvtrtest1@convertr.io')
        cy.get('.preview-link').should('have.text','my first blog').click()
         })
    })
    describe('Deleting an article', () => {
        it('passes', () => {
            
            cy.get('#del_btn').click()
             })
        })

  

