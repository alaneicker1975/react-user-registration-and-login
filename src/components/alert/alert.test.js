/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import Alert from './';

describe('Alert', () => {

  it('Should render without errors', () => {
    const component = shallow(<Alert />);
    expect(component.length).toBe(1);
  });

});
