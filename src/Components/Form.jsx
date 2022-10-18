import React from "react";


const Form = () => {
    return (
        <div className="contact-content--form">
            <form>

                <input type="text" id="fname" name="firstname" placeholder="First Name" />
                <input type="text" id="lname" name="lastname" placeholder="Last Name" />
                <input type="text" id="email" name="email" placeholder="Email" />
                <textarea id="message" name="message" placeholder="Message"></textarea>
                <input type="submit" value="Submit" />
            
            </form>
        </div>
    );
}

export default Form;