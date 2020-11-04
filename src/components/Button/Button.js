import styles from "./Button.module.css";
import classNames from "classnames";

const buttonTypes = {
    PRIMARY: 'primary',
    SECONDARY: 'secondary'
};

function Button({disabled, children, onClick, buttonType=buttonTypes.SECONDARY, className}) {
    return (
            <button
                className={classNames(styles.button, className,
                    {
                        [styles.button_type_secondary]: buttonType === buttonTypes.SECONDARY,
                        [styles.button_type_primary]: buttonType === buttonTypes.PRIMARY
                    })}
                disabled={disabled}
                onClick={onClick}
            >{children}
            </button>
    );
}

export default Button;