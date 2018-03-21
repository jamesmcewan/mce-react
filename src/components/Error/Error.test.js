import React from "react";
import { mount } from 'enzyme';
import Error from "./Error";

describe("Error", () => {
  it("should render without crashing", () => {
    const wrapper = mount(<Error />);
    expect(wrapper).toHaveLength(1);
  });
});