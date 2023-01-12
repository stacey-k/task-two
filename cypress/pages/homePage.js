class homePage{
    //Locators
    navigationElements = {
        earnFlybuysLink : () => cy.get('.primary-nav__list > [data-testid="primary-nav-earn"] > a'),
        extrasLink : () => cy.get('.primary-nav__list > [data-testid="primary-nav-extras"] > a'),
        tipsAndTricksLink : () => cy.get('.primary-nav__list > [data-testid="primary-nav-tips-n-tricks"] > a'),
        flybuysStoreLink : () => cy.get('.primary-nav__list > [data-testid="primary-nav-store"] > a'),
        chooseCurrencyLink : () => cy.get('.primary-nav__list > [data-testid="primary-nav-choose-currency"] > a')
    }
    compactNavigationElements = {
        hamburgerButton : () => cy.get('#hamburger_btn'),
        homeLink : () => cy.get('.home_menu_item'),
        earnFlybuysLink : () => cy.get('#level1_nav > [data-testid="primary-nav-earn"] > a'),
        extrasLink : () => cy.get('#level1_nav > [data-testid="primary-nav-extras"] > a'),
        tipsAndTricksLink : () => cy.get('#level1_nav > [data-testid="primary-nav-tips-n-tricks"] > a'),
        flybuysStoreLink : () => cy.get('#level1_nav > [data-testid="primary-nav-store"] > a'),
        chooseCurrencyLink : () => cy.get('#level1_nav > [data-testid="primary-nav-choose-currency"] > a')
    }


}
export default homePage;