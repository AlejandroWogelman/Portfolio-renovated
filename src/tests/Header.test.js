import "@testing-library/jest-dom";
import { Header } from "../components/header/Header";
import { shallow } from "enzyme";

describe("<Header/>", () => {
  const wrapper = shallow(<Header />);

  test("Render of header component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Correct anchor navigation", () => {
    const about = wrapper.find("a").at(0);
    const work = wrapper.find("a").at(1);
    const contact = wrapper.find("a").at(2);

    expect(about.text()).toBe("About");
    expect(about.prop("href")).toBe("#about");

    expect(work.text()).toBe("Work");
    expect(work.prop("href")).toBe("#work");

    expect(contact.text()).toBe("Contact");
    expect(contact.prop("href")).toBe("#contact");
  });
});
