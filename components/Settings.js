import { SelectInput, RangeInput } from './Input';
import Button from './Button';
import classes from './Settings.module.css';
const Settings = props => {
    const options = ['easy', 'medium', 'hard'];
    const cancelHandler = () => {
        props.setOpenSettings(curState => false);
    };
    return (
        <div className={classes.backdrop}>
        <section className={classes.overlay}>
            <SelectInput label='Difficulty level' input={{id: 'difLevel'}} options={options} />
            <RangeInput input={{id: 'quantity'}} label='Number of questions' min='4' max='10' />
            <div className={classes.btnControl}>
            <Button>Save</Button>
            <Button onClick={cancelHandler}>Cancel</Button>
            </div>
        </section>
        </div>
    );
}; 
export default Settings;