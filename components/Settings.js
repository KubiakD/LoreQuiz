import { settingsContextConfig } from '../store/userSettings';
import { SelectInput, RangeInput } from './Input';
import Button from './Button';
import classes from './Settings.module.css';
import { useContext, useState, useEffect } from 'react';
const Settings = props => {
    const {settings, setSettings} = useContext(settingsContextConfig);
    const savedDifLevel = settings.difLevel;
    const savedQuestionsQuantity = settings.questionsQuantity;
    const options = ['easy', 'medium', 'hard'];
    const [selectedDifLevel, setSelectedDifLevel] = useState('easy');
    const quantities = props.max;
    const cancelHandler = () => {
        props.setOpenSettings(state => false);
    };
    const submitHandler = event => {
        event.preventDefault();
        const selectInputValue = event.target[0].value;
        const rangeInputValue = event.target[1].value;
        const newSettings = {
            difLevel: selectInputValue,
            questionsQuantity: rangeInputValue
        };
        setSettings(state => ({...state, ...newSettings}));
        props.setOpenSettings(state=>false);
    };
    return (
        <div className={classes.backdrop}>
        <form className={classes.overlay} onSubmit={submitHandler}>
            <SelectInput 
                label='Difficulty level' 
                input={{id: 'difLevel', value: selectedDifLevel}} 
                options={options} 
                setSelectedDifLevel={setSelectedDifLevel} 
                savedDifLevel={savedDifLevel} 
            />
            <RangeInput input={{id: 'quantity'}} label='Number of questions' min='4' max={quantities[`${selectedDifLevel}`]} value={savedQuestionsQuantity} />
            <div className={classes.btnControl}>
            <Button>Save</Button>
            <Button button={{type: 'reset'}} onClick={cancelHandler}>Cancel</Button>
            </div>
        </form>
        </div>
    );
}; 
export default Settings;