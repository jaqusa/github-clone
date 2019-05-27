import * as React from "react";
import "./styles.css";
import Axios from 'axios'

export default class Navbar extends React.Component <IProps,any> {

  constructor(props: IProps){
    super(props);
    this.state = {
      searchInput : '',
      timeoutId: null,
      users:[]
    }
  };

  handleChange(e: React.ChangeEvent<HTMLInputElement>){
    const {name , value} = e.target
    this.setState ({
      [name] : value
    })
    if(this.state.searchInput !== ''){   
      if(this.state.timeoutId != null)
          clearTimeout(this.state.timeoutId)

      this.setState({
        timeoutId :  setTimeout(() => {
          Axios.get(`https://api.github.com/search/users?q=${this.state.searchInput}`)
            .then(r => {
                this.props.getUsersList(r.data.items)
                this.setState({
                  users : r.data.items
                })
              })
            .catch(e => console.log(e.message))
        },200),
      })
    }
  }

  handleSubmit(e: React.FormEvent<HTMLFormElement>){
      e.preventDefault()

  }

  render() {
    return (
      <nav className="navbar">
        <div className="text-white navbar-brand">
          <img
            id="logo"
            src="https://www.rust-lang.org/static/images/github.svg"
            width="45"
            className="d-inline-block align-top"
            alt="Github logo"
          />
          <span className="span"> Github Clone</span>
        </div>
          <div className="search">
            <form className="form-inline" onSubmit={e => this.handleSubmit(e)}>
              <input
                id="searchInput"
                name="searchInput"
                autoComplete="off"
                placeholder="Search users"
                className="form-control search-input"
                onChange={ e => this.handleChange(e)}
              />
              <img
                id="slashImage"
                src="https://github.githubassets.com/images/search-key-slash.svg"
                alt="Slash"
              />
            </form>
          </div>
      </nav>
    );
  }
}

interface IProps{
  getUsersList:(users: object[]) => void;
}