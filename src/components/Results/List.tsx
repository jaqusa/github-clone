import React from "react";
import { Link } from "react-router-dom";

export default class List extends React.Component<IProps, any> {
  render(): JSX.Element[] {
    return this.props.List.map((user: any, i: number) => {
      return (
        <div className="card pb-4" key={user.id}>
          <div className="row no-gutters">
            <div className="col-md-2 mt-4 ml-4">
              <img src={user.avatar_url} className="card-img" />
            </div>
            <div className="col-md-4">
              <div className="card-body">
                <h3>{user.login}</h3>
                <div className="card-text pt-5">
                  <Link to={`/${user.login}`}> Details </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
  }
}

interface IProps {
  List: [];
}
