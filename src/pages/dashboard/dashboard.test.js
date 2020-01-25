/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import DashBoard from '.';
import { AppContext } from '../../App';

describe('DashBoard', () => {

  it('Should render without errors', () => {
    const component = shallow(
      <AppContext.Provider value={{ state: { users: [] } }}>
        <DashBoard />
      </AppContext.Provider>
    );
    expect(component.length).toBe(1);
  });

});
