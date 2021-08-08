describe('pihk-ui: PihkUi component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=pihkui--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to PihkUi!');
    });
});
