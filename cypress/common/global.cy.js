import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';
import Pages from '../page_objects';

export const globalPageContext = {page: undefined};

// GIVEN
Given('I am on the {string}', (pageName) => {
  const currentPage = Pages[pageName];
  if (!currentPage) {
    throw new Error('Could not find page object, make sure it is added to pages/index.js');
  }

  globalPageContext.page = currentPage;
});

Given('I navigate to the {string}', (pageName) => {
  const currentPage = Pages[pageName];
  if (!currentPage) {
    throw new Error('Could not find page object, make sure it is added to pages/index.js');
  }

  globalPageContext.page = currentPage;

  cy.visit(currentPage.url);
});

Given("I visit {string}", (url) => {
  cy.visit(url);
});

Given("I request {string}", (url) => {
  cy.request(url);
});

Given('I am on mobile', () => {
  cy.viewport('iphone-6');
});

Given('I am on desktop', () => {
  cy.viewport('macbook-15');
});

Given('I wait {int} seconds', (milliseconds) => {
  cy.wait((milliseconds * 1000));
});

// THEN

Then('The title should be {string}', (title) => {
  cy.title().should('eq', title);
});

// visibility
Then('The {string} is visible', (pageElement) => {
  cy.get(globalPageContext.page.elements[pageElement]).should('be.visible');
});

Then('The {string} is not visible', (pageElement) => {
  cy.get(globalPageContext.page.elements[pageElement]).should('not.be.visible');
});

Then('The {string} is in the viewport', (pageElement) => {
  cy.get(globalPageContext.page.elements[pageElement]).should('be.inViewport');
});

Then('The {string} is not in the viewport', (pageElement) => {
  cy.get(globalPageContext.page.elements[pageElement]).should('not.be.inViewport');
});

Then(`The first of the {string} is visible`, (pageElement) => {
  cy.get(globalPageContext.page.elements[pageElement])
    .eq(0)
    .should('be.visible');
})

Then(`The second of the {string} is visible`, (pageElement) => {
  cy.get(globalPageContext.page.elements[pageElement])
    .eq(1)
    .should('be.visible');
})

Then(`The third of the {string} is visible`, (pageElement) => {
  cy.get(globalPageContext.page.elements[pageElement])
    .eq(2)
    .should('be.visible');
})

Then(`The fourth of the {string} is visible`, (pageElement) => {
  cy.get(globalPageContext.page.elements[pageElement])
    .eq(3)
    .should('be.visible');
})

Then(`The last of the {string} is visible`, (pageElement) => {
  cy.get(globalPageContext.page.elements[pageElement])
    .last()
    .should('be.visible');
})

Then(`The first of the {string} is not visible`, (pageElement) => {
  cy.get(globalPageContext.page.elements[pageElement])
    .eq(0)
    .should('not.be.visible');
})

Then(`The second of the {string} is not visible`, (pageElement) => {
  cy.get(globalPageContext.page.elements[pageElement])
    .eq(1)
    .should('not.be.visible');
})

Then(`The third of the {string} is not visible`, (pageElement) => {
  cy.get(globalPageContext.page.elements[pageElement])
    .eq(2)
    .should('not.be.visible');
})

Then(`The fourth of the {string} is not visible`, (pageElement) => {
  cy.get(globalPageContext.page.elements[pageElement])
    .eq(3)
    .should('not.be.visible');
})

Then(`The last of the {string} is not visible`, (pageElement) => {
  cy.get(globalPageContext.page.elements[pageElement])
    .last()
    .should('not.be.visible');
})

// exists on page
Then('The {string} exists', (pageElement) => {
  cy.get(globalPageContext.page.elements[pageElement]).should('exist');
});

Then('The {string} does not exist', (pageElement) => {
  cy.get(globalPageContext.page.elements[pageElement]).should('not.exist');
});

Then(`The first of the {string} exists`, (pageElement) => {
  cy.get(globalPageContext.page.elements[pageElement])
    .eq(0)
    .should('exist');
})

Then(`The second of the {string} exists`, (pageElement) => {
  cy.get(globalPageContext.page.elements[pageElement])
    .eq(1)
    .should('exist');
})

Then(`The third of the {string} exists`, (pageElement) => {
  cy.get(globalPageContext.page.elements[pageElement])
    .eq(2)
    .should('exist');
})

Then(`The fourth of the {string} exists`, (pageElement) => {
  cy.get(globalPageContext.page.elements[pageElement])
    .eq(3)
    .should('exist');
})

Then(`The last of the {string} exists`, (pageElement) => {
  cy.get(globalPageContext.page.elements[pageElement])
    .last()
    .should('exist');
})

Then(`The first of the {string} does not exist`, (pageElement) => {
  cy.get(globalPageContext.page.elements[pageElement])
    .eq(0)
    .should('not.exist');
})

Then(`The second of the {string} does not exist`, (pageElement) => {
  cy.get(globalPageContext.page.elements[pageElement])
    .eq(1)
    .should('not.exist');
})

Then(`The third of the {string} does not exist`, (pageElement) => {
  cy.get(globalPageContext.page.elements[pageElement])
    .eq(2)
    .should('not.exist');
})

Then(`The fourth of the {string} does not exist`, (pageElement) => {
  cy.get(globalPageContext.page.elements[pageElement])
    .eq(3)
    .should('not.exist');
})

Then(`The last of the {string} does not exist`, (pageElement) => {
  cy.get(globalPageContext.page.elements[pageElement])
    .last()
    .should('not.exist');
})

Then(`I should see the {string} contains {string}`, (pageElement, content) => {
  cy.get(globalPageContext.page.elements[pageElement])
    .should('contain', content);
})

Then(`Element {string} has attribute {string}`, (pageElement, attribute, value) => {
  cy.get(globalPageContext.page.elements[pageElement])
    .should('have.attr', attribute);
})

Then(`Element {string} does not have attribute {string}`, (pageElement, attribute, value) => {
  cy.get(globalPageContext.page.elements[pageElement])
    .should('not.have.attr', attribute);
})

Then(`Element {string} has attribute {string} with value {string}`, (pageElement, attribute, value) => {
  cy.get(globalPageContext.page.elements[pageElement])
    .invoke('attr', attribute)
    .should('eq', value);
})

Then(`Form field {string} has value {string}`, (pageElement, value) => {
  cy.get(globalPageContext.page.elements[pageElement]).invoke('val').should('eq', value);
})

Then('I should see {int} {string}', (count, pageElement) => {
  cy.get(globalPageContext.page.elements[pageElement])
    .should('have.length', count);
});

Then('The {string} element should receive focus', (pageElement) => {
  cy.get(globalPageContext.page.elements[pageElement])
    .should('have.focus');
});

//WHEN

When('I click on the {string} element', (pageElement) =>{
  cy.get(globalPageContext.page.elements[pageElement])
    .click({ scrollBehavior: 'center' });
})

When('I click on the first {string} element', (pageElement) =>{
  cy.get(globalPageContext.page.elements[pageElement])
    .first().click({ scrollBehavior: 'center' });
})

When('I focus on the {string} element', (pageElement) =>{
  cy.get(globalPageContext.page.elements[pageElement])
    .focus();
})

When('I scroll to the {string} element', (pageElement) => {
  cy.get(globalPageContext.page.elements[pageElement])
    .scrollIntoView();
});

When('I press Enter key on {string} element', (pageElement) => {
  cy.get(globalPageContext.page.elements[pageElement])
    .type('{enter}');
});

When('I press the tab key', () => {
  cy.focused().tab();
});

When('I press the tab key on {string}', (pageElement) => {
  cy.get(globalPageContext.page.elements[pageElement])
    .tab();
});

When("I fill the {string} textfield with value {string}", (textfield, value) => {
  cy.get(globalPageContext.page.elements[textfield]).type(value);
});
