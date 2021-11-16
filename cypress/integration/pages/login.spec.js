import { navBarTests } from '../../common';

describe('Log In Page', () => {
  beforeEach(() => {
    cy.visit('https://127.0.0.1:3000/login');
  })

  describe('render', () => {
    navBarTests.render();
  
    it('should render the title', () => {
      cy.get('[data-testid=login_title]').contains('Log In.');
    });
  });

  describe('events', () => {
    navBarTests.events();
  });
});
