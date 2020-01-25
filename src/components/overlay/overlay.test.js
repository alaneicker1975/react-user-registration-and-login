/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import Overlay from '.';

describe('Overlay', () => {

  it('Should render without errors', () => {
    const component = shallow(<Overlay />);
    expect(component.length).toBe(1);
  });

});
