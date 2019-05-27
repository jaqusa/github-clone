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

  render() {
    return (
      <div>
        <Navbar getUsersList={this.getUsersList.bind(this)} />
        <div className="col-md-8 ml-4 mt-4">
          <div className="row">
            <List usersList={this.state.usersList} />
          </div>
        </div>
      </div>
    );
  }
}
