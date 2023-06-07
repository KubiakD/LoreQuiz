import { SelectInput, RangeInput } from './Input';
import Button from './Button';
import classes from './Settings.module.css';
import { useState } from 'react';
const Settings = props => {
    const options = ['easy', 'medium', 'hard'];
    const [selectedDifLevel, setSelectedDifLevel] = useState('easy');
    const quantities = props.max;
    const cancelHandler = () => {
        props.setOpenSettings(curState => false);
    };
    return (
        <div className={classes.backdrop}>
        <section className={classes.overlay}>
            <SelectInput label='Difficulty level' input={{id: 'difLevel'}} options={options} setSelectedDifLevel={setSelectedDifLevel} />
            <RangeInput input={{id: 'quantity'}} label='Number of questions' min='4' max={quantities[`${selectedDifLevel}`]} />
            <div className={classes.btnControl}>
            <Button>Save</Button>
            <Button onClick={cancelHandler}>Cancel</Button>
            </div>
        </section>
        </div>
    );
}; 
export default Settings;