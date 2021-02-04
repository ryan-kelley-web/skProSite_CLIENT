import React, { Component } from 'react'

interface SKContact_tsProps {
    updateToken: (token: string, profile: {} | null) => void;
}

interface SKContact_tsState {
    status: string;
}

class SKContact extends React.Component<SKContact_tsProps, SKContact_tsState> {
    constructor(props: SKContact_tsProps) {
        super(props);
        this.submitForm = this.submitForm.bind(this);


        this.state = {
            status: ''
        }
    }

    submitForm(ev: any) {
        ev.preventDefault();

        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                this.setState({ status: "SUCCESS" });
            } else {
                this.setState({ status: "ERROR" });
            }
        }
        xhr.send(data);
    }


    render() {
        const { status } = this.state;

        return (
            <div>
                <h1>Follow fSwS on Social Media</h1>
                <ul>
                    <li>
                        <a
                            href="https://www.instagram.com/"
                            target="_blank">
                            the Gram
                        </a>
                    </li>

                    <li>
                        <a
                            href="https://www.twitter.com/"
                            target="_blank">
                            the Twit
                        </a>
                    </li>

                    <li>
                        <a
                            href="https://www.facebook.com/"
                            target="_blank">
                            the Book
                        </a>
                    </li>

                    <li>
                        <a
                            href="https://www.youtube.com/"
                            target="_blank">
                            the Tube
                        </a>
                    </li>
                </ul>
                <h3>We Truly Value Your Feedback</h3>
                <p>Reach out directly using this form and we'll be in touch ASAP.</p>

                <form
                    onSubmit={this.submitForm}
                    action={'https://formspree.io/f/xyybobpo'}
                    method="POST">

                    <input
                        type="name"
                        name="formName"
                        placeholder="Name" /> <br /><br />

                    <input
                        type="email"
                        name="formEmail"
                        placeholder="Email" /> <br /><br />

                    <textarea
                        name="formMessage"
                        placeholder="How can we help?"
                        rows={10}
                        cols={45} /><br /><br />
                    {status === "SUCCESS" ?
                        alert("Thank you for your message. \nPlease allow 48hr for a reply.")
                        // <p>Thank you for your message.</p>
                        :
                        <button>Submit</button>}

                    {status === "ERROR" && <p>Oops! There was an error.</p>}

                </form>
            </div>
        )
    }
}

export default SKContact;
