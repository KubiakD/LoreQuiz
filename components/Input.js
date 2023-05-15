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
  return (
    <div>
      <label htmlFor={props.input.id}>{props.label}</label>
        <select
          className={classes.select}
          {...props.input}
          name={props.input.id}
        >
          {props.options.map((option) => (
            <option value={option} key={option}>{option}</option>
          ))}
          ;
        </select>
        </div>
  );
};
export const RangeInput = props => {
  return (
    <>
      <label htmlFor={props.input.id}>{props.label}</label>
      <div className={classes.range}>
        <input type='range' min={props.min} max={props.max} />
       </div>
    </>
  );
};