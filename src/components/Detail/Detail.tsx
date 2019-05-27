import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { getDetails, getSomething } from "../../Services/Services";
import { Link } from "react-router-dom";
import List from "./List";
import "./styles.css";

export default class Detail extends React.Component<IProps, any> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      name: this.props.match.params.name,
      user: {},
      repositories: [{}],
    };
  }

  async componentDidMount() {
    const userDetail = await getDetails(this.state.name);
    const repositoriesDetail = await getSomething(userDetail.repos_url);
    this.setState({
      user: userDetail,
      repositories: repositoriesDetail,
    });
  }

  render() {
    return (
      <div className="container mt-5 ">
        <div className="row">
          <div className="col">
            <div className="card-info">
              <img src={this.state.user.avatar_url} className="avatar" alt="avatar_url"/>
              <div className="card-body">
                <h4 className="card-title">{this.state.user.name}</h4>
                <h5 className="card-subtitle">{this.state.user.login}</h5>
                <div className="card-text">
                  <ul className="info mt-3">
                    {this.state.user.bio ? <li>{this.state.user.bio}</li> : ""}
                    {this.state.user.company ? (
                      <li>
                        <i className="fas fa-user-friends fa-fw" />{" "}
                        <span className="pl-2">{this.state.user.company}</span>
                      </li>
                    ) : (
                      " "
                    )}
                    {this.state.user.location ? (
                      <li>
                        <i className="fas fa-map-marker-alt fa-fw" />{" "}
                        <span className="pl-2">{this.state.user.location}</span>
                      </li>
                    ) : (
                      ""
                    )}
                    {this.state.user.blog ? (
                      <li>
                        <i className="fas fa-link fa-fw" />
                        <span className="pl-2">{this.state.user.blog}</span>
                      </li>
                    ) : (
                      ""
                    )}
                  </ul>
                  <hr />
                </div>
              </div>
            </div>
            <div className="text-center">
              <Link to="/">
                <div className="btn btn-light none mb-5">
                  {" "}
                  <span className="pr-1">Search Again</span>{" "}
                  <i className="fas fa-search fa-fw" />{" "}
                </div>
              </Link>
            </div>
          </div>
          <div className="col">
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <span className="nav-link active">Repositories</span>
              </li>
            </ul>
            <div className="tab-content">
              <div
                className="tab-pane fade show active"
                id="repositories"
                role="tabpanel"
                aria-labelledby="repositories-tab"
              >
                <List List={this.state.repositories} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

interface IProps extends RouteComponentProps<IState> {}

interface IState {
  name: string;
}
