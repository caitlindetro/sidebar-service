import React from "react";
import TopBar from "./components/form.js";
import SoldHomes from './components/botForm.js';
import ReactDOM from 'react-dom';
import axios from "axios";

//Put the overall module in here
export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      topBar: [],
      botBar: []
    }
  }

  componentDidMount() {
    let id = Number(window.location.pathname.replace(/\//, ''));
    axios.get(`http://localhost:3002/api/sidebar/${id}`)
    .then(data => {
      this.setState({
        topBar: data.data[0],
        botBar: data.data[1]
      })
    })
  }

  render() {
    return ( 
      <div>
        <aside id="ASIDE_1">
          <div id="DIV_2">
            <TopBar topInfo={this.state.topBar}/>
            <SoldHomes botInfo={this.state.botBar}/>
          </div>
        </aside>
      </div>
    )
  }
}
