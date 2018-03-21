import React from "react";
import { mount } from 'enzyme';
import SocialIcon from "./SocialIcon";

describe("SocialIcon", () => {
  it("should render without crashing", () => {
    const wrapper = mount(<SocialIcon />);
    expect(wrapper).toHaveLength(1);
  });
});