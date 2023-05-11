import { SelectInput } from './Input';
import Button from './Button';
import classes from './Settings.module.css';
const Settings = () => {
    const options = ['easy', 'medium', 'hard'];
    return (
        <div className={classes.backdrop}>
        <section className={classes.overlay}>
            <SelectInput label='Difficulty level' input={{id: 'difLevel'}} options={options} />
            <input type='range' />
            <Button>Save</Button>
        </section>
        </div>
    );
}; 
export default Settings;