import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import SoapCalcForm from './SoapCalcForm'

describe(`SoapCalcForm component`, () => {
  it('renders a form.SoapCalcForm by default', () => {
    const wrapper = shallow(<SoapCalcForm />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
