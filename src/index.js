import React, { Component } from "react";
import ReactDOM from "react-dom";
import MaskEle from "./com.js";
import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      visiable: false // 新增任务弹窗中，搜索树，是否包含下级
    };
  }

  click() {
    debugger;
    this.setState({
      visiable: this.state.visiable ? false : true
    });
  }
  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2 onClick={this.click.bind(this)}>
          Start editing to see some magic happen!
        </h2>
        <MaskEle
          visible={this.state.visiable}
          title="Title"
          content="test"
          onOk={this.click.bind(this)}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
