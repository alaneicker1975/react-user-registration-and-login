/* eslint-disable no-undef */
import React from 'react';
import { act } from 'react-test-renderer';
import { mount } from 'enzyme';
import UserList from '.';
import { AppContext } from '../../App';

describe('UserList', () => {

  let component;

  const context = {
    state: {
      users: [{ username: 'testuser', isAdmin: 0 }]
    },
    dispatch() {},
  };

  beforeEach(() => {
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

  it('Should fetch users and render to a list', async done => {
    const mockSuccessResponse = [
      { username: 'bobsmith', isAdmin: 0 },
      { username: 'paulblack', isAdmin: 1 },
    ];

    const mockJsonPromise = Promise.resolve(mockSuccessResponse); 
    const mockFetchPromise = Promise.resolve({ 
      json: () => mockJsonPromise,
    });

    jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);

    await act(async () => {
      mount(
        <AppContext.Provider value={context}>
          <UserList />
        </AppContext.Provider>
      );
    });

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith('http://localhost:6060/api/v1/users');

    global.fetch.mockClear();
    done();
  });

});
