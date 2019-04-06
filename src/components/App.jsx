import React from "react";
import SearchFillterStock from "../containers/SearchFillterStock";
import TopHeader from "../containers/TopHeader";
import MiddleSection from "./MiddleSection";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <TopHeader />
        <SearchFillterStock />
        <MiddleSection />
      </div>
    );
  }
}

export default App;
