import classes from './Modal.module.css'

const Modal = ({ isModal, setIsModal, children, ...props }) => {

    const cls = [classes.modal];

    if (isModal) cls.push(classes.active)

    return (
        <div className={cls.join(" ")} onClick={() => setIsModal(false)}>
            <div className={classes.content} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
}

export default Modal;