import classes from './Scoreboard.module.css';
const Scoreboard = (props) => {
  return (
    <table className={classes.scoreboard}>
        
      <th>Name</th>
      <th>Score</th>
      {props.ranking.map((user) => {
        return (
          <tr key={user.name}>
            <td>{user.name}</td>
            <td>{user.score}</td>
          </tr>
        );
      })}
    </table>
  );
};

export default Scoreboard;
