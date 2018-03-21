import React from "react";
import { mount } from 'enzyme';
import Content from "./Content";

describe("Content", () => {
  it("should render without crashing", () => {
    const wrapper = mount(<Content />);
    expect(wrapper).toHaveLength(1);
  });
});