/**
 * Table02.js
 * 
 * This table shows a simple list of students
 */

import React, { Component } from "react";

function Header() {
    return (
        <thead>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
            </tr>
        </thead>
    )
}

const Body = () => {
    return (
        <tbody>
            <tr>
                <td>Ana</td>
                <td>Lopes</td>
            </tr>
            <tr>
                <td>Mário</td>
                <td>Silva</td>
            </tr>
            <tr>
                <td>Maria</td>
                <td>Pereira</td>
            </tr>
            <tr>
                <td>Luís</td>
                <td>Gomes</td>
            </tr>
        </tbody>
    )
}

class Table02 extends Component {

    render() {
        return (
            <table className="table table-hover table-bordered">
                <Header />
                <Body />
            </table>
        )
    }

}

export default Table02;