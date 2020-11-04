import styles from "./Card.module.css";
import Button from "../Button/Button";
import classNames from 'classnames';

function Card({value, className, name}) {

    function handleClick() {
        const payload = {name, estimate:value};
        fetch("/estimate",
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify(payload)
            })
    }

    return (
                <div className={classNames(styles.card, className)}>
                    <div className={styles.card__estimate}>{value}</div>
                    <Button disabled={!name} onClick={handleClick}>Submit</Button>
                </div>
    );
}

export default Card;