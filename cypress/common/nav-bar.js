const navBarRenderTests = () => {
  describe('nav bar', () => {
    it('should render the nav bar About link', () => {
      cy.get('[data-testid=nav-bar_about]').contains('About');
    });

    it('should render the nav bar News link', () => {
      cy.get('[data-testid=nav-bar_news]').contains('News');
    });

    it('should render the nav bar Contact link', () => {
      cy.get('[data-testid=nav-bar_contact]').contains('Contact');
    });

    it('should render the nav bar Log In button', () => {
      cy.get('[data-testid=nav-bar_log-in-button]').contains('Log In');
    });
  });
};

const navBarEventTests = () => {
  describe('nav bar', () => {
    it('should redirect to /about when the nav bar About link is clicked', () => {
      cy.get('[data-testid=nav-bar_about]').click();
      cy.url().should('include', '/about');
    });
  
    it('should redirect to /news when the nav bar News link is clicked', () => {
      cy.get('[data-testid=nav-bar_news]').click();
      cy.url().should('include', '/news');
    });
  
    it('should redirect to /contact when the nav bar Contact link is clicked', () => {
      cy.get('[data-testid=nav-bar_contact]').click();
      cy.url().should('include', '/contact');
    });
  
    it('should redirect to /login when the nav bar Log In button is clicked', () => {
      cy.get('[data-testid=nav-bar_log-in-button]').click();
      cy.url().should('include', '/login');
    });
  });
}

export default {
  render: navBarRenderTests,
  events: navBarEventTests
}
