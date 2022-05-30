/**
 * App.js
 */

import React from "react";
import Table from "./Table";

class App extends React.Component {

  render() {
    return (
      <div className="container">
        {/** we are using JSX. 
         *  'classeName' will be changed, in execution mode, to 'class' at browser */}

        <h1>Students' list</h1>
        <Table />

      </div>
    )
  }
}

export default App;
