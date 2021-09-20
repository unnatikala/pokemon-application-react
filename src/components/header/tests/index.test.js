import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Header from '../index';
import { Wrapper, Heading } from "../styles";

describe('<Header />', () => {
configure({adapter: new Adapter()});

  let renderComponent;
  beforeEach(() => {
    renderComponent = () => shallow(<Header />);
  });

  it('should render Header component', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find(Wrapper).length).toBe(1);
    expect(renderedComponent.find(Heading).length).toBe(1);
  });
});
