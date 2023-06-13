import { useState } from 'react';
import classes from './Input.module.css';
export default function Input(props) {
    return (
      <div className={classes.input}>
        <label htmlFor={props.input.id}>{props.label}</label>
        <input {...props.input} name={props.input.id} onChange={props.onChange}/>
      </div>
    );
};
export const SelectInput = props => {
  const {savedDifLevel} = props;
  const [selectedValue, setSelectedValue] = useState(savedDifLevel);
  const changeHandler = event => {
    props.setSelectedDifLevel(value => event.target.value )
    setSelectedValue(value=>event.target.value)
  };
  return (
    <div>
      <label htmlFor={props.input.id}>{props.label}</label>
        <select
          className={classes.select}
          {...props.input}
          name={props.input.id}
          onChange={changeHandler}
          value={selectedValue}
        >
          {props.options.map((option) => (
            <option value={option} key={option}>{option}</option>
            ))}
        </select>
        </div>
  );
};
export const RangeInput = props => {
  const savedValue = props.value;
  const [value, setValue] = useState(savedValue);
  const changeHandler = event => {
    setValue(value => event.target.value)
  };
  return (
    <>
      <label htmlFor={props.input.id}>{props.label}</label>
      <div className={classes.range}>
        <input type='range' min={props.min} max={props.max} value={value} onChange={changeHandler}/>
       </div>
    </>
  );
};