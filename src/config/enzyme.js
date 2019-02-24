import { mount, shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

exports.mount = mount;
exports.shallow = shallow;
