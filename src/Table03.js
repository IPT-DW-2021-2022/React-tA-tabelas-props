/**
 * Table03.js
 * 
 * This table shows a simple list of students
 */

import React, { Component } from "react";

/**
 * write the table header
 * @returns 
 */
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

/**
 * write the table body
 * @param {*} props : the data to be writed: a list of students
 * @returns 
 */
const Body = (props) => {
    // we are building each table row, with the data we receive
    // <=> foreach()
    const rows = props.dataTableIN.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.surname}</td>
            </tr>
        )
    })

    // we return the body of table, with the 'rows' defined up
    return (
        <tbody> {rows} </tbody>
    )
}


/**
 * the code of component Table03
 */
class Table03 extends Component {
    render() {
        // 'read' data that was supplied to component 'Table03'
        const { studentsDataIN } = this.props

        return (
            <table className="table table-striped table-sucess">
                <Header />
                <Body dataTableIN={studentsDataIN} />
            </table>
        )
    }
}

export default Table03;