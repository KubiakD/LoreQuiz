import classes from './Scoreboard.module.css';
const Scoreboard = (props) => {
  return (
    <table className={classes.scoreboard}>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Score</th>
        </tr>
        {props.ranking.map((user) => {
          return (
            <tr key={user.name}>
              <td>{user.name}</td>
              <td>{user.score}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Scoreboard;
