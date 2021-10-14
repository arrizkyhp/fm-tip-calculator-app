import { shallow, mount } from "enzyme";
import Input from "layouts/Input";

let container;
 beforeEach(() => {
   container = mount(<Input />);
   //  console.log(container.debug());
 });

describe("rendering component", () => {
    it("should render input bill", () => {
        const billLabel =  <label htmlFor="bill">Bill</label>

        expect(container.contains(billLabel)).toEqual(true);
        expect(container.exists("#bill")).toEqual(true);
    })

     it("should render select tip", () => {
       const tipLabel = <label htmlFor="tip">Select Tip %</label>;
       expect(container.contains(tipLabel)).toEqual(true);
       expect(container.find(".btn").every('.btn--tip')).toEqual(true);
       expect(container.find(".btn--tip")).toHaveLength(5);
       expect(container.exists(".custom-tip")).toEqual(true);
     });

     it("should render Number of People", () => {
       const nopLabel = <label htmlFor="nop">Number of People</label>;

       expect(container.contains(nopLabel)).toEqual(true);
       expect(container.exists("#nop")).toEqual(true);
     })

     describe("should render information component", () => {
      it("should render tip Amount", () => {
          const tipAmount = <h1 className="info__text__title">Tip Amount</h1>;

          expect(container.contains(tipAmount)).toEqual(true);
          expect(container.exists("#tipAmount")).toEqual(true);
      })

      it("should render total", () => {
        const total = <h1 className="info__text__title">Total</h1>

        expect(container.contains(total)).toEqual(true);
        expect(container.exists("#total")).toEqual(true);
      })
     })
})

describe("logic", () => {
  it("should not input negative value to Bill Input", () => {
    container
      .find("input")
      .at(0)
      .simulate("change", { target: { value: -1 } });

    expect(container.find("input").at(0).prop('defaultValue')).toBe(0)
  })

  it("should not input negative value to custom tip", () => {
    container.find("input").at(1).simulate("change", { target: { value: -2 }});
    expect(container.find("input").at(1).prop('defaultValue')).toBe(0);
  })

  it("should not input negative value to Number of People input", () => {
    container.find("input").at(2).simulate("change", { target: { value: -2 }});
    expect(container.find("input").at(2).prop('defaultValue')).toBe(0)

  })
})