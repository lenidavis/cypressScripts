describe('Google search widget example scripts', () => {
  let data; 

  beforeEach(() => {
    // Set the data file
    cy.fixture('google.json').then((jsonData) => {
      data = jsonData; 
      // Visit Google homepage before each test
      cy.visit(data.home);
    });
  });

  it('Open Google homepage, and check for an element on the page', () => {
    cy.get(data.homepageElement).should('exist');
  });

  it('Weather search and widget', () => {
    // Enter search query into the search input field
    cy.get(data.searchInput).type(data.weatherSearch);
   // Wait for search results to load
   cy.get(data.searchResultArea).should('be.visible');
    // Verify weather widget elements
    cy.get(data.weatherTitleID).should('contain.text', data.weatherTitleCopy);
    cy.get(data.weatherLocalTimeID).should('exist');
    cy.get(data.weatherdescriptionID).should('exist');
    cy.get(data.weatherTempNumberID).should('exist');
    cy.get(data.weatherTemperatureLabelID).should('contain.text', data.weatherTemperatureLabelCopy);
  });

  it('Movie search and widget', () => {
    // Enter search query into the search input field
    cy.get(data.searchInput).type(data.movieSearch);
   // Wait for search results to load
   cy.get(data.searchResultArea).should('be.visible');
    // Verify movie widget elements
    cy.get(data.movieTitleID).should('contain.text', data.movieTitleCopy);
    cy.get(data.movieInfoID).should('exist');
  });
});
