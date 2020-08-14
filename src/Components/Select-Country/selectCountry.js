import React from 'react';
import { Select } from 'antd';

function Region(props){
    const {country} = props;
const { Option } = Select;


function handleChange(value) {
    console.log(country);
    let filtered = country.filter(
        countryOne => {
            return (
          countryOne.region == value
        )
        }
      );
      //console.log(filtered, "hello");
      props.setSearchCountry(filtered);
    };
 


  return(
    <Select id="region" placeholder="Countries by region" defaultValue="ALL" style={{ width: 120 }} onChange={handleChange}>
    <Option value="Americas">Americas</Option>
    <Option value="Africa">Africa</Option>
    <Option value="Asia">Asia</Option>
    <Option value="Europe">Europe</Option>
    <Option value="Oceania">Oceania</Option>
  </Select>
  )
}

export default Region
