import React from "react";
class Raining extends React.Component {
  constructor() {
    super();
    this.state = {
      itsRaining: false
    };
  }

  ItsRaining = () => {
    "this.state", this.state;
  };

  render() {
    const { itsRaining } = this.state;
    return (
      <div>
        <div>
          <h1>Is it raining today? {itsRaining ? "Yes" : "No"}</h1>
        </div>
      </div>
    );
  }
}
export default Raining;
