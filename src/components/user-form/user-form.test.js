/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import UserForm from '.';

describe('UserForm', () => {

  it('Should render without errors', () => {
    const component = shallow(<UserForm />);
    expect(component.length).toBe(1);
  });

});
