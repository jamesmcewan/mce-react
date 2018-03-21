import React from "react";
import { mount } from 'enzyme';
import Title from "./Title";

describe("Title", () => {
  it("should render without crashing", () => {
    const wrapper = mount(<Title />);
    expect(wrapper).toHaveLength(1);
  });
});