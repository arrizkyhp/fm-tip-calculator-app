import { shallow, mount } from 'enzyme' ;
import Input from 'layouts/Input';
import Home from 'pages/Home';

describe('Homepage', () => {
    let container;
    beforeEach(() => {
        container = mount(<Home />)
    })

    it("should render Splitter Logo", () => {
        expect(container.find(".logo").text()).toContain("SPLITTER");
    })

    it("should render Input component", () => {
         expect(container.exists("#bill")).toEqual(true);
    })
})