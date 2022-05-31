/**
 * App.js
 */

import React from "react";
import Table from "./Table";
import Table02 from "./Table02";
import Table03 from "./Table03";


class App extends React.Component {
  render() {

    // define the data that is going to be used by Table03
    // https://www.json.org/json-en.html
    // these data have a special characteristic : they can not be changed 
    const students = [
      {
        name: "Ana",
        surname: "Lopes",
      },
      {
        name: "Mário",
        surname: "Silva",
      },
      {
        name: "Maria",
        surname: "Pereira",
      },
      {
        name: "Luís",
        surname: "Gomes",
      },
    ]

    return (
      <div className="container">
        {/** we are using JSX. 
         *  'classeName' will be changed, in execution mode, to 'class' at browser */}

        <h1> First Students' list</h1>
        <Table />

        <br /> <br />
        <h1> Second Students' list</h1>
        <Table02 />

        <br /> <br />
        <h1> Third Students' list</h1>
        <Table03 studentsDataIN={students} />
      </div>
    )
  }
}

export default App;
