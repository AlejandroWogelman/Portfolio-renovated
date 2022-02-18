import { About } from "../components/about/About";
import { shallow } from "enzyme";
import "@testing-library/jest-dom";

describe("<About/>", () => {
  const wrapper = shallow(<About />);

  test("rendered of contact component", () => {
    expect(wrapper).toMatchSnapshot();
  });
  test("View description", () => {
    const descrip = wrapper.find("p").at(0).html();
    expect(descrip.includes("Alejandro Wogelman")).toBe(true);
  });

  test("imgs correct path", () => {
    const div = wrapper.find(".about-img-hob").find("li");

    const gym = div.at(0).find("img");
    const futbol = div.at(1).find("img");
    const cursos = div.at(2).find("img");
    const anime = div.at(3).find("img");

    expect(futbol.prop("src")).toBe("Soccer_Isometric.svg");
    expect(anime.prop("src")).toBe("ball_dragon_game_movie_icon_183186.svg");
    expect(cursos.prop("src")).toBe("Javascript_Isometric.svg");
    expect(gym.prop("src")).toBe("Fitness_Monochromatic.svg");
  });
});
