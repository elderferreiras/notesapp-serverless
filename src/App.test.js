import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

let wrapped = shallow(<App />);

describe('App', () => {
  it('should render two inputs', () => {
    expect(wrapped.find('Input')).toHaveLength(2);
  });
});
