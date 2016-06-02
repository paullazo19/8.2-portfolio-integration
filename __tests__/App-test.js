// __tests__/CheckboxWithLabel-test.js
'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import App from '../modules/App';

jest.unmock('../modules/App');

describe('Node heroku boilerplate', () => {

  it('contains my name', () => {
    // This places our component into our test to find off of
    var appRendered = TestUtils.renderIntoDocument(
      <App/>
    )
    // find class on page
    var heading = TestUtils.findRenderedDOMComponentWithClass(appRendered, "heading");
    // assert it has text
    expect(heading.textContent).toContain("Paul");
  });
});
