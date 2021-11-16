import { navBarTests } from '../../common';

describe('Register Page', () => {
  beforeEach(() => {
    cy.visit('https://127.0.0.1:3000/register');
  })

  describe('render', () => {
    navBarTests.render();
    
    it('should render the subtitle', () => {
      cy.get('[data-testid=error_pre-message]').contains('404');
    });
  
    it('should render the title', () => {
      cy.get('[data-testid=error_title]').contains('Page not found.');
    });
  });

  describe('events', () => {
    navBarTests.events();
  });
});
