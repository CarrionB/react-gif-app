import React, { useState } from "react";
import PropTypes from 'prop-types'

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInput = (e) => setInputValue(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(inputValue.trim().length > 0){
      setCategories((state) => [inputValue, ...state]);
      setInputValue("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleInput} />
    </form>
  );
};

AddCategory.proTypes= {
  setCategories: PropTypes.func.isRequired
}
