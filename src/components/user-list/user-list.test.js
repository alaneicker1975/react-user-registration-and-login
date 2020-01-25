/* eslint-disable no-undef */
import React from 'react';
import { mount } from 'enzyme';
import UserList from '.';
import { AppContext } from '../../App';

describe('UserList', () => {

  let component;

  beforeEach(() => {
    const context = {
      state: {
        users: [{ username: 'testuser', isAdmin: 0 }]
      },
      dispatch() {},
    };

    component = mount(
      <AppContext.Provider value={context}>
        <UserList />
      </AppContext.Provider>
    );
  });

  it('Should render without errors', () => {
    expect(component.length).toBe(1);
  });

  it('Should render a list', () => {
    expect(component.find('.user-list').children().length).toBe(1);
  });

});
