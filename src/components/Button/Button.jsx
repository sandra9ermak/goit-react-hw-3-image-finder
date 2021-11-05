const Button = ({onClick, onScroll}) => {
    return (
        <div className="button-wrapper">
            <button onClick={onClick} type="button" className="Button" onScroll={onScroll}>Load more</button>
        </div>
    )
}

export default Button;