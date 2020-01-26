/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import Login from '.';

describe('Login', () => {

  it('Should render without errors', () => {
    const component = shallow(<Login />);

    expect(component.length).toBe(1);
  });

});
