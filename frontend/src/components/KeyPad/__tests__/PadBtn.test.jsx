import React from 'react';
import { shallow } from 'enzyme';
import { PadBtn } from '../components';

describe("Component PadBtn", () => {
    test("it should render with given value and subtext", () => {
        const value = '5';
        const subText ='subtext';

        const wrapper = shallow(<PadBtn value={value} subText={subText}/>);
        expect(wrapper.find('.numValue').text()).toBe(value);
        expect(wrapper.find('.subText').text()).toBe(subText);
    });

    test("It should call the onClick function when clicked", () => {
        const mockOnClick = jest.fn();

        const wrapper = shallow(<PadBtn onClick={mockOnClick} />);
        wrapper.simulate('click');
        expect(mockOnClick.mock.calls.length).toBe(1);
    });
});
