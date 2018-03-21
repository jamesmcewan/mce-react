import React from "react";
import { mount } from 'enzyme';
import Meta from "./Meta";

describe("Meta", () => {
  it("should render without crashing", () => {
    const wrapper = mount(<Meta />);
    expect(wrapper).toHaveLength(1);
  });
});