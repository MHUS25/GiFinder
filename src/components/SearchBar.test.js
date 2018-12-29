import React from 'react';
import {shallow, mount} from 'enzyme'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SearchBar from './SearchBar'

configure({ adapter: new Adapter() });

it('renders SearchBar', () => {
  const wrapper = shallow(<SearchBar />);
  expect(wrapper).toMatchSnapshot()
});
