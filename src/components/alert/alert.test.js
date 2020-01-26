/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import Alert from './';

describe('Alert', () => {

  it('Should render without errors', () => {
    const component = shallow(<Alert />);

    expect(component.length).toBe(1);
  });

  it('Should render message text', () => {
    const component = shallow(<Alert text="An error has occurred" />);
    
    expect(component.find('.alert').text()).toBe('An error has occurred');
  });

  it('Should add .alert--error class', () => {
    const component = shallow(<Alert type="error" />);
    
    expect(component.find('.alert').hasClass('alert--error')).toBe(true);
  });

  it('Should add .alert--right class', () => {
    const component = shallow(<Alert align="right" />);
    
    expect(component.find('.alert').hasClass('alert--right')).toBe(true);
  });
});
