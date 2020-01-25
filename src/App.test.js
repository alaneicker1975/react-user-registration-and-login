/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {

  it('Should render without errors', () => {
    const component = shallow(<App />);
    expect(component.length).toBe(1);
  });

});
