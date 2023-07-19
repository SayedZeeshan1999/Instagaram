import React from "react";

class Input extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            form: {
                mobileorEmail: null,
                fullName: null,
                userName: null,
                password: null
            },
            error: ''
        }

    }

    validate() {
        let form = this.state.form;

        if (!form.mobileorEmail) {
            this.setState({ error: 'Enter Mobile Number or Email' });
            return false;
        }

        if (!form.fullName) {
            this.setState({ error: 'Enter Full Name' });
            return false;
        }

        if (!form.userName) {
            this.setState({ error: 'Enter Username' });
            return false;
        }

        if (!form.password) {
            this.setState({ error: 'Enter Password' });
            return false;
        }


        if (form.password.length < 8) {
            this.setState({ error: 'Password should be greater than or equal to 8 ' })

            return false;
        }

        return true;
    }


    // handleInput(value, key) {
    //     console.log(value, key);
    // }
    // handleForm() {
    //     console.log("form submitted")
    // }

    handleInput = (value, key) => {
        let form = this.state.form;
        form[key] = value;
        this.setState({ form });
    }

    handleForm = () => {
        const isValidated = this.validate()
        console.log(this.state);

        if (isValidated) {
            console.log('form submitted');
        } else {
            console.log('form not submitted')
        }
    }

    render() {
        const { error } = this.state;
        return <div className="form">
            <>
                <input

                    type="text" placeholder="Phone Number or Email"
                    onChange={(data) => this.handleInput(data.target.value, "mobileorEmail")} />

                <input
                    type="text" placeholder="Full Name"
                    onChange={(data) => this.handleInput(data.target.value, "fullName")} />

                <input
                    type="text" placeholder="Username"
                    onChange={(data) => this.handleInput(data.target.value, "userName")} />

                <input
                    type="password" placeholder="Password"
                    onChange={(data) => this.handleInput(data.target.value, 'password')} />

                <button onClick={this.handleForm}>Sign up</button>

                {
                    error ? (<h4>{error}</h4>) :null
                }
            </>

        </div>
    }
}

export default Input;