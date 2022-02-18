import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import { Contact } from "../components/contact/Contact";

describe("<Contact/>", () => {
  const wrapper = shallow(<Contact />);
  test("Contact rendering", () => {
    expect(wrapper).toMatchSnapshot();
  });
  test("URL from contacts is correct", () => {
    const anchor = wrapper.find("li");
    const Git = anchor.at(0).find("a").prop("href");
    const Linkedin = anchor.at(1).find("a").prop("href");
    const Facebook = anchor.at(2).find("a").prop("href");

    expect(Git).toBe("https://github.com/AlejandroWogelman?tab=repositories");

    expect(Linkedin).toBe(
      "https://www.linkedin.com/in/alejandrowogel?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B%2BvtBYjh%2FQrCJ4tOULZ7mag%3D%3D"
    );

    expect(Facebook).toBe("https://www.facebook.com/AlejandroWogel/");
  });
});
