const PinContainer = ({ children, ...props }) => {
    return (
        <div className="pin-container" {...props}>
            {children}
        </div>
    );
}

export default PinContainer;