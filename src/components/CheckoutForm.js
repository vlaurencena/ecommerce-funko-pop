const CheckoutForm = (props) => {

    const checkEmails = (event) => {
        event.preventDefault();
        if (event.target.email.value !== event.target.confirmEmail.value) {
            alert("Your emails don't match");
        } else {
            props.handleSubmit();
        }
    }
    return (
        <form className="checkout-form" onChange={props.handleFormChange} onSubmit={checkEmails}>
            <div className="checkout-form__row-two-column">
                <div>
                    <label htmlFor="fname">First name</label>
                    <input className="checkout-form__input" type="text" id="fname" name="fname" value={props.fname} placeholder="Your name" required/>
                </div>
                <div>
                    <label htmlFor="lname">Last name</label>
                    <input className="checkout-form__input" type="text" id="lname" name="lname" value={props.lname} placeholder="Your last name" required/>
                </div>
            </div>
            <div className="checkout-form__row-one-column">
                <label htmlFor="lname">Email</label>
                <input className="checkout-form__input" type="email" id="email" name="email" value={props.email} placeholder="Your email" required/>
            </div>
            <div className="checkout-form__row-one-column">
                <label htmlFor="confirmEmail">Confirm Email</label>
                <input className="checkout-form__input" type="email" id="confirmEmail" name="confirmEmail" placeholder="Confirm your email" required/>
            </div>
            <div className="checkout-form__row-one-column">
                <label htmlFor="tel">Telephone</label>
                <input className="checkout-form__input" type="tel" id="tel" name="tel" value={props.tel} placeholder="Your mobile number" required/>
            </div>
            <div className="checkout-form__row-one-column">
                <label htmlFor="comments">Comments</label>
                <input className="checkout-form__input" type="textarea" id="comments" name="comments" value={props.comments} placeholder="Any comments about your purchase?" />
            </div>
            <input type="submit" value="Submit" />
        </form>
    )
}

export default CheckoutForm;