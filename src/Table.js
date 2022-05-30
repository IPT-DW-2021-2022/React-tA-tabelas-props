/**
 * Table.js
 * 
 * This table shows a simple list of students
 */

import React, { Component } from "react";

class Table extends Component {

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                    </tr>
                </thead>
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
            </table>
        )
    }

}

export default Table;