import { navBarTests } from '../../common';

describe('Landing Page', () => {
  beforeEach(() => {
    cy.visit('https://127.0.0.1:3000/');
  });

  describe('render', () => {
    navBarTests.render();

    it('should render the subtitle', () => {
      cy.get('[data-testid=landing_subtitle]').contains('Project');
    });
  
    it('should render the title', () => {
      cy.get('[data-testid=landing_title]').contains('Bubblewrap.');
    });
  
    it('should render the Log In button', () => {
      cy.get('[data-testid=landing_log-in-button]').contains('Log In');
    });
  
    it('should render the Register button', () => {
      cy.get('[data-testid=landing_register-button]').contains('Register');
    });
  })

  describe('events', () => {
    navBarTests.events();

    it('should redirect to /login when the Log In button is clicked', () => {
      cy.get('[data-testid=landing_log-in-button]').click();
      cy.url().should('include', '/login');
    });

    it('should redirect to /register when the Log In button is clicked', () => {
      cy.get('[data-testid=landing_register-button]').click();
      cy.url().should('include', '/register');
    });
  });
});
