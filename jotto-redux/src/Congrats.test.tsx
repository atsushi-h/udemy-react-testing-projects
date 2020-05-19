import React from 'react';
import { shallow } from 'enzyme';

import Congrats, { Props } from './Congrats';
import { findByTestAttr } from '../test/testUtils';

const defaultProps: Props = { success: false };

function setup(props: Props) {
  return shallow(<Congrats {...props} />);
}

test('renders without error', () => {
  const wrapper = setup(defaultProps);
  const component = findByTestAttr(wrapper, 'component-congrats');
  expect(component.length).toBe(1);
});
test('renders no text when `success` prop is false', () => {
  const wrapper = setup({ success: false });
  const component = findByTestAttr(wrapper, 'component-congrats');
  expect(component.text()).toBe('');
});
test('renders no text when `success` prop is true', () => {
  const wrapper = setup({ success: true });
  const component = findByTestAttr(wrapper, 'component-congrats');
  expect(component.text()).toBe('Congratulations! You guessed the word!');
});
