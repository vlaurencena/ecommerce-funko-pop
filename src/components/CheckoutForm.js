

const CheckoutForm = (props) => {

    

    return (
        <form className="checkout-form" onChange={props.handleFormChange} onSubmit={props.handleSubmit}>
            <div className="checkout-form__row-two-column">
                <div>
                    <label htmlFor="fname">First name</label>
                    <input type="text" id="fname" name="fname" value={props.fname} placeholder="Your name" />
                </div>
                <div>
                    <label htmlFor="lname">Last name</label>
                    <input type="text" id="lname" name="lname" value={props.lname} placeholder="Your last name" />
                </div>
            </div>
            <div className="checkout-form__row-one-column">
                <label htmlFor="lname">Email</label>
                <input type="email" id="email" name="email" value={props.email} placeholder="Your email" />
            </div>
            <div className="checkout-form__row-one-column">
                <label htmlFor="tel">Telephone</label>
                <input type="tel" id="tel" name="tel" value={props.tel} placeholder="Your mobile number" />
            </div>
            <div className="checkout-form__row-one-column">
                <label htmlFor="comments">Comments</label>
                <input type="textarea" id="comments" name="comments" value={props.comments} placeholder="Any comments about your purchase?" />
            </div>
            <input type="submit" value="Submit" />
        </form>
    )
}

export default CheckoutForm;