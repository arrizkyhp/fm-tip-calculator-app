import { shallow, mount } from "enzyme";
import Info from "layouts/Info";

describe("rendering component", () => {
    const container = shallow(<Info />);

    it("should render tipAmount info", () => {
        expect(container.exists("#tipAmount")).toEqual(true);
    })

    it("shoould render total info", () => {
        expect(container.exists("#total")).toEqual(true);
    })

    it("should render reset button", () => {
        expect(container.find("#buttonReset").text()).toEqual("RESET")
    })
})

describe("passing props", () => {
  const tipAmount = 4.28;
  const total = 32.79;
  const infoContainer = mount(<Info tipAmount={tipAmount} total={total} />);

  it("should accept tipAmount props", () => {
    expect(infoContainer.props().tipAmount).toEqual(tipAmount);
  });

  it("should accept total props", () => {
    expect(infoContainer.props().total).toEqual(total);
  });

  it("should render correct tipAmount value info", () => {
    expect(infoContainer.find("#tipAmount").text()).toBe(`$${tipAmount}`);
  });

  it("should render correct total value info", () => {
    expect(infoContainer.find("#total").text()).toBe(`$${total}`);
  })
});
