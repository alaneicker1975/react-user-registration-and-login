/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import Register from '.';

describe('Login', () => {

  it('Should render without errors', () => {
    const component = shallow(<Register />);

    expect(component.length).toBe(1);
  });

});
