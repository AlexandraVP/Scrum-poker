import styles from "./App.module.css";
import Card from "./components/Card/Card";
import classNames from "classnames";
import {useState} from "react";
import Button from "./components/Button/Button";

const estimates = ["☕", "0.5", "1", "2", "3", "5", "8", "13"];

function App() {
    const [name, setName] = useState('');
    const [votes, setVotes] = useState([]);

    function handleNameChange(e) {
        setName(e.target.value);
    }
   async function showEstimates() {
        const result = await fetch("/estimate");
        setVotes(await result.json());
    }
    async function deleteEstimates() {
        await fetch('/estimate', {method: 'DELETE'});
        setVotes([]);
    }
    return (
        <div className={styles.layout}>
            <div className={styles.layout__content}>
                <input
                    className={classNames(styles.input,
                    styles.layout__left,
                    styles.layout__element)}
                       placeholder="Username"
                    value={name}
                    onChange={handleNameChange}
                />
                <div className={classNames(styles.row, styles.layout__element)}>
                    {estimates.map(estimate =>
                        <Card
                            value={estimate}
                              key={estimate}
                              className={styles.row__item}
                            name={name}
                        />)}
                </div>
                <Button buttonType="primary" onClick={showEstimates}
                className={styles.layout__element}>
                    SHOW
                </Button>
                <Button onClick={deleteEstimates}
                        className={styles.layout__element}>
                    DELETE ESTIMATES
                </Button>
                { votes.length > 0 && (
                    <div className={styles.table}>
                        <div className={styles.table__row}>
                            <div className={styles.table__cell}>Name</div>
                            <div className={styles.table__cell}>Story Points</div>
                        </div>
                        {votes.map(vote=>(
                            <div className={styles.table__row} key={vote.name}>
                                <div className={styles.table__cell}>{vote.name}</div>
                                <div className={styles.table__cell}>{vote.estimate}</div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default App;
