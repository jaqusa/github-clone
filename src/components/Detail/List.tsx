import React from "react";

export default class List extends React.Component<IProps, any> {
  render(): JSX.Element[] {
    return this.props.List.map((item: any, i: number) => {
      return (
        <div className="card pb-4" key={item.id}>
          <div className="row no-gutters">
            <div className="col-md-10">
              <div className="card-body">
                <h2>{item.name}</h2>
                <p>{item.description}</p>
                <div> <i className="fas fa-code fa-fw"/> {item.language}</div>
                <div> <i className="fas fa-code-branch fa-fw"/> {item.forks_count}</div>
                <div className="card-text pt-5">
                  <a href={item.html_url}>
                    <i className="fas fa-link fa-fw" />
                    <span className="pl-2">Go to</span>{" "}
                  </a>
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
