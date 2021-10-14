import App from './App';

import { shallow, mount } from 'enzyme';
import Home from 'pages/Home';


describe('rendering components', () => {
  it("should render App component without crashing", () => {
    shallow(<App />)
  })

  it("should render Home component", () => {
    shallow(<Home />)
  })


})