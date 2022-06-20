import React, { Component } from 'react'
import UserForm from './UserForm'
import UserList from './UserList'

export default class UserManagement extends Component {
    render() {
        return (
            <div className="container">
                <h1 id='title-form' className="text-center">User Management</h1>
                <UserForm />
                <UserList />
            </div>
        )
    }
}
