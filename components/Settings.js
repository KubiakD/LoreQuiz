import classes from './Settings.module.css';
const Settings = () => {
    return (
        <div className={classes.backdrop}>
        <section className={classes.overlay}>
            <select type='select'>
                <option>easy</option>
                <option>medium</option>
                <option>hard</option>
            </select>
            <input type='range' />
            <button>save</button>
        </section>
        </div>
    );
}; 
export default Settings;