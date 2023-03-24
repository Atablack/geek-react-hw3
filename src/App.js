import React from "react";

class Example extends React.Component {
  constructor(wayState) {
    super(wayState);
    this.state = {
      color: "black",
      height: 182,
    };
  }

  render() {
    return (
      <div>
        <p>{this.state.color}</p>
        <p>{this.state.height}</p>
        <Way note="the way how Props work" />
      </div>
    );
  }
}

const Way = (props) => {
  return <h1>{props.note}</h1>;
};

export default Example;
