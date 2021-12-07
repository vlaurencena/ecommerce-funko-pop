import { Redirect, Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const ThankYou = () => {

    const location = useLocation();

    const [redirect, setRedirect] = useState(false);

    const [seconds, setSeconds] = useState(60);

    useEffect(() => {
        seconds > 0 && setTimeout(() => setSeconds(seconds - 1), 1000);
        seconds === 0 && setRedirect(true);
    }, [seconds]);


    const handleClick = () => {
        const order = location.state.orderId
        navigator.clipboard.writeText(order)
            .then(() => {
                showTooltip();
                console.log("Text copied to clipboard...")
            })
            .catch(err => {
                console.log('Something went wrong', err);
            })
    }

    const [tooltipOn, setTooltipOn] = useState(false)

    const showTooltip = () => {
        setTooltipOn(true);
        setTimeout(() => {
            setTooltipOn(false)
        }, 3000);
    }

    return (
        <>
            <div className="flex-1 flex-center flex-column" >
                <p>{location.state.buyerName}, thank you for your purchase!</p>
                <p>Your order was successfully processed and we will contact you by email in a few minutes.</p>
                <p>Your order ID is:
                    <span className="tooltip">{location.state.orderId}
                    <span className={`tooltiptext ${tooltipOn && `tooltiptext-visible`}`}>Copied to clipboard.</span>
                    </span>.
                    <span onClick={handleClick} className="material-icons icon-copy-clipboard">
                        content_copy
                    </span>
                </p>
                <p>Click <Link to="/">HERE</Link> to go back to de Home Page, or you will redirect automatically in:</p>
                <p>{seconds} seconds.</p>
            </div>
            {redirect && <Redirect to="/" />}
        </>
    )
}

export default ThankYou;