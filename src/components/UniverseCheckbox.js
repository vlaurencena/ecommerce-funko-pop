import { useState } from "react";

const UniverseCheckbox = (props) => {

    const [checked, setChecked] = useState(false);

    const handleClick = () => {
        setChecked(!checked);
    };

    return (
        <>
            <input onClick={handleClick} id={props.universe} name={props.universe} type="checkbox" checked={checked} />
        </>
    )
}

export default UniverseCheckbox;