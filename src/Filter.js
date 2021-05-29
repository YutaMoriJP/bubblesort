import React from "react";
import styled from "styled-components";

const Container = styled.article`
  display: flex;
  padding: 10px;
  justify-content: ${props =>
    ({ left: "flex-start", center: "center", right: "flex-end" }[
      props.position
    ] || "center")};
  select {
    cursor: pointer;
  }
`;

const Select = ({
  options = [{ value: "default", text: "default" }],
  label = "label",
  onChange,
  disabled,
}) => {
  return (
    <>
      <label htmlFor={label}>{label}</label>
      <select onChange={onChange} id={label} disabled={disabled}>
        {options.map(option => {
          return (
            <option key={option.value} value={option.value}>
              {option.text}
            </option>
          );
        })}
      </select>
    </>
  );
};

const Filter = ({
  options,
  position,
  setFilterBy,
  label = "FILTER BY",
  disabled,
}) => {
  const filter = id => options.filter(option => +option.value === +id);
  const handleChange = event => {
    console.log(event.target.value);
    setFilterBy(filter(event.target.value));
  };
  return (
    <>
      <Container position={position}>
        <Select
          options={options}
          label={label}
          onChange={handleChange}
          disabled={disabled}
        />
      </Container>
    </>
  );
};

export default Filter;
