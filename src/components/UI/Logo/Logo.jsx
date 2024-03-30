import classes from './Logo.module.css'

const Logo = ({ logoText, ...props }) => {
    return (
        <div {...props}>
            <p className={classes.logo_text} >
                {logoText}
            </p>
        </div>
    );
}

export default Logo;