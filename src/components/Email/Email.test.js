import React from "react";
import { mount } from 'enzyme';
import Email from "./Email";

describe("Email", () => {
  it("should render without crashing", () => {
    const wrapper = mount(<Email />);
    expect(wrapper).toHaveLength(1);
  });
});