const Button = ({onClick}) => {
    return (
        <button onClick={onClick} type="button" className="Button">Load more</button>
    )
}

window.scrollTo({
  top: document.documentElement.scrollHeight,
  behavior: "smooth",
});

export default Button;