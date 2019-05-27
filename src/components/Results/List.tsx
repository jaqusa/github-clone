import React from "react";

export default class List extends React.Component<IProps, any> {
  render(): JSX.Element[] {
    return this.props.usersList.map((user: any, i: number) => {
      return (
        <div className="card pb-4" key={user.id}>
          <a href={`/profile/${user.id}`} onClick={(e)=>{e.preventDefault() window.history.go()}}>
            <div className="row no-gutters">
              <div className="col-md-2 mt-4 ml-4">
                <img src={user.avatar_url} className="card-img" alt="..." />
              </div>
              <div className="col-md-4">
                <div className="card-body">
                  <h5 className="card-title">{user.login}</h5>
                  <p className="card-text" />
                </div>
              </div>
            </div>
          </a>
        </div>
      );
    });
  }
}

interface IProps {
  usersList: [];
}
