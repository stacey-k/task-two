class extrasPage{
    //Locators
    elements = {
        searchBar : () => cy.get('#footer_query'),
        searchButton : () => cy.get('.search_wrap > .search-form > .search-form__button')
    }


}
export default extrasPage;