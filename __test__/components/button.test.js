import React from "react";
import { shallow } from "enzyme";
import Button from "../../components/button";

describe("<Button />", () => {
  test("Render del componente Button", () => {
    const button = shallow(<Button />);
    expect(button.length).toEqual(1);
  });
});
