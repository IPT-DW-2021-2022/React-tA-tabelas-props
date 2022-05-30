/**
 * App.js
 */

import React from "react";
import Table from "./Table";
import Table02 from "./Table02";

class App extends React.Component {

  render() {
    return (
      <div className="container">
        {/** we are using JSX. 
         *  'classeName' will be changed, in execution mode, to 'class' at browser */}

        <h1> First Students' list</h1>
        <Table />

        <br /> <br />
        <h1> Second Students' list</h1>
        <Table02 />
      </div>
    )
  }
}

export default App;
