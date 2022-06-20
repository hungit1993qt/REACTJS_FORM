import React, { Component } from "react";
import { connect } from "react-redux";

class UserForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            values: {
                firstName: "",
                lastName: "",
                email: "",
                address: "",
                dateOfBirth: "",
            },
        };
    }

    handleChange = (evt) => {
        const { value, name } = evt.target;
        this.setState((state) => ({
            values: {
                ...state.values,
                [name]: value,
            },
        }));
    };
    
    handleSubmit = (evt) => {
        evt.preventDefault();

        if (this.props.user.id) { 
            this.props.onUpdateUser(this.props.user.id, this.state.values);
        } else {
            const id = Math.floor(Math.random() * 10000);
            const user = { ...this.state.values, id };
            this.props.onCreateUser(user);
            
        }
    };

    componentDidUpdate(prevProps) {
        if (prevProps.user.id !== this.props.user.id) {
            this.setState({ values: { ...this.props.user } });
        }
        
    }

    render() {
        const { values } = this.state;

        return (
            <form id="form-user" onSubmit={this.handleSubmit}>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="mb-3">
                            <label htmlFor="firstName" className="form-label">
                                First Name
                            </label>
                            <input
                                type="text"
                                id="firstName"
                                className="form-control"
                                name="firstName"
                                value={values.firstName}
                                onChange={this.handleChange}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="lastName" className="form-label">
                                Last Name
                            </label>
                            <input
                                type="text"
                                id="lastName"
                                className="form-control"
                                name="lastName"
                                value={values.lastName}
                                onChange={this.handleChange}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="form-control"
                                name="email"
                                value={values.email}
                                onChange={this.handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="col-sm-6">
                        <div className="mb-3">
                            <label htmlFor="address" className="form-label">
                                Address
                            </label>
                            <input
                                type="text"
                                id="address"
                                className="form-control"
                                name="address"
                                value={values.address}
                                onChange={this.handleChange}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="dateOfBirth" className="form-label">
                                Date of Birth
                            </label>
                            <input
                                type="text"
                                id="dateOfBirth"
                                className="form-control"
                                name="dateOfBirth"
                                value={values.dateOfBirth}
                                onChange={this.handleChange}
                                required
                            />
                        </div>
                    </div>

                    <button className="btn btn-success">Submit</button>
                </div>
            </form>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.selectedUser,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onCreateUser: (user) => {
            const action = { type: "CREATE_USER", user };
            dispatch(action);
        },

        onUpdateUser: (userId, user) => {
            const action = { type: "UPDATE_USER", userId, user };
            dispatch(action);
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);
