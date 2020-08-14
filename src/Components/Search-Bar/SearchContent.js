import React, {  useState } from "react";
import { AutoComplete, Input } from "antd";

function Search(props) {
    const { country } = props;
  const [name, setName] = useState("");
  const [options, setOptions] = useState([]);

  const onSearch = val => {
    let filtered = country.filter(
      country =>
        country.name
          .toString()
          .toLowerCase()
          .includes(val)
    );
    setOptions(filtered);
    props.setSearchCountry(filtered);
  };
  const onSelect = (val, option) => {
    setName(option.value);
  };
console.log(options)
return (
    <div>
        
    <AutoComplete
        options={options}
        onSelect={(val, option) => onSelect(val, option)}
        onSearch={onSearch}
      ><Input.Search
      placeholder="Search Country"
      enterButton="Search"
      size="large"
      onSearch={onSearch}
    />
    </AutoComplete>
    </div>
)
}
export default Search