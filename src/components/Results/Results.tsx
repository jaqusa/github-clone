import React from "react";
import Navbar from "./../Navbar/Navbar";
import List from "./List";

export default class Results extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      usersList: []
    };
  }

  getUsersList(users: object[]) {
    this.setState({
      usersList: users
    });
  }

  toShow() {
    if (this.state.usersList[0] !== undefined) {
      return <List List={this.state.usersList} />;
    } else {
      return <h3 className="text-center">searching user ...</h3>;
    }
  }

  render() {
    return (
      <div>
        <Navbar getUsersList={this.getUsersList.bind(this)} />
        <div>
          <div className="column">{this.toShow()}</div>
        </div>
      </div>
    );
  }
}
