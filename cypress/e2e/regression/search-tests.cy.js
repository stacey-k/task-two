import extrasPage from "../../pages/extrasPage";
import homePage from "../../pages/homePage";

const home = new homePage();
const extras = new extrasPage();

before(function (){
  cy.fixture('testData').then(function (data) {
    this.data = data;
  })
  cy.visit('https://www.flybuys.co.nz');
})

describe('search for extras', () => {
  it('should fail to find an unknown extra', function () {
    home.compactNavigationElements.hamburgerButton().click();
    home.compactNavigationElements.extrasLink().click();
    extras.elements.searchBar().click().type(this.data.search);
    extras.elements.searchButton().click();
    cy.get('#maincontent').should('contain',"Sorry there are no results");
  })
})