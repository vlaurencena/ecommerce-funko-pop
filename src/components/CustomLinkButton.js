const CustomLinkButton = (props) => {

    let className = "custom-link-button";

    if (props.color === "light") {
        className += " custom-link-button--light";
    } else if (props.color === "dark") {
        className += " custom-link-button--dark";
    }


    if (props.type === "link") {
        return <a className={className} href={props.link}>{props.text}</a>
    } else if (props.type === "button") {
        return <button className={className} onClick={props.onClick}>{props.text}</button>
    } else {
        return null;
    }

}

export default CustomLinkButton;