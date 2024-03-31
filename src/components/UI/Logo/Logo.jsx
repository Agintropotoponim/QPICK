import classes from './Logo.module.css'

const Logo = ({ logoText, onClick, ...props }) => {
    return (
        <div onClick={onClick} {...props}>
            <p className={classes['logo_text']} >
                {logoText}
            </p>
        </div>
    );
}

export default Logo;