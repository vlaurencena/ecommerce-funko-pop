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

    return (
        <>
            <div className="flex-1 flex-center flex-column" >
                <p>{location.state.buyerName}, thank you for your purchase!</p>
                <p>Your order was successfully processed and we will contact you by email in a few minutes.</p>
                <p>Your order ID is: {location.state.orderId}.</p>
                <p>Click <Link to="/">HERE</Link> to go back to de Home Page, or you will redirect automatically in:</p>
                <p>{seconds} seconds.</p>
            </div>
            {redirect && <Redirect to="/" />}
        </>
    )
}

export default ThankYou;