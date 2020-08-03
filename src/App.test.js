import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

let wrapped = shallow(<App />);

describe('App', () => {
  it('should render two inputs', () => {
    expect(wrapped.find('Input')).toHaveLength(2);
  });
  it('should render a button', () => {
    expect(wrapped.find('Button')).toHaveLength(1);
  });
  it('should render a list', () => {
    expect(wrapped.find('List')).toHaveLength(1);
  });
});
