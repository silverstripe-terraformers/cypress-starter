const isInViewport = (_chai, utils) => {
  function assertIsInViewport(options) {
    const subject = this._obj;

    const bottom = Cypress.$(cy.state('window')).height();
    const rect = subject[0].getBoundingClientRect();

    // Keeping our "is in viewport" check simple. If the top of the element is anywhere in our viewport, and if the
    // bottom of the element is lower than the top of our viewport, then we will consider this to be "in view"
    this.assert(
      rect.top > 0 && rect.bottom > 0 && rect.top <= bottom,
      "expected #{this} to be in viewport",
      "expected #{this} to not be in viewport",
      this._obj
    )
  }

  _chai.Assertion.addMethod('inViewport', assertIsInViewport)
};

chai.use(isInViewport);
