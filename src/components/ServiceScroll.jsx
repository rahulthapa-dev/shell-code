'use client'; 
import { useState } from 'react'
import Picker from 'react-mobile-picker'

const selections = {
    serviceName: ['Offline Software Development', 'SEO', 'SMM', 'Website Development', 'Cloud', 'Devops', 'Database'],
}
const SelectScroll = () => {
    const [pickerValue, setPickerValue] = useState({
        serviceName: 'Website Development',
    })
   
    return (
        <Picker value={pickerValue} onChange={setPickerValue} wheelMode="natural" className='text-black font-bold bg-[#F4EF14] text-lg'>
            {Object.keys(selections).map(name => (
                <Picker.Column key={name} name={name}>
                {selections[name].map(option => (
                    <Picker.Item key={option} value={option} itemHeight="45">
                        {option}
                    </Picker.Item>
                ))}
                </Picker.Column>
            ))}
        </Picker>
    )
}
export default SelectScroll