import React from "react";
import { mount } from 'enzyme';
import Social from "./Social";

describe("Social", () => {
  it("should render without crashing", () => {
    const wrapper = mount(<Social />);
    expect(wrapper).toHaveLength(1);
  });
});