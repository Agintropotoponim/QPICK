import classes from './CounterDisplay.module.css'

const CounterDisplay = ({ imagePath, counter, alt = 'image', position = { x: 0, y: 0 }, ...props }) => {

    let { x, y } = position;

    return (
        <div className={classes['counter-display']} {...props}>
            <section className={classes['counter__section']}>
                <img src={imagePath} alt={alt} />
                <div
                    className={[
                        classes['counter-display__counter'],
                        classes['counter-display__counter_text'],
                    ].join(' ')}
                    style={{ left: x, top: y }}
                >
                    {counter}
                </div>
            </section>
        </div>
    );
}

export default CounterDisplay;