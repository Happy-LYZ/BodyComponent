import React, { Component } from "react";
import ReactDOM from "react-dom";
import Modal from "./components/Modal";
import "./index.less";

class App extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      visiable: false // 是否显示模态框
    };
  }

  /**
   * @method 显示模态框
   */
  showModal() {
    this.setState({
      visiable: true
    });
  }
  
  /**
   * @method 隐藏模态框
   */
  hideModal() {
    this.setState({
      visiable: false
    });
  }

  render() {
    return (
      <div className="App">
        <h2 onClick={this.showModal.bind(this)}> 显示模态框 </h2>
        <Modal
          visible={this.state.visiable}
          title="Title"
          content="我是挂载于body下的全局模态框"
          onOk={this.hideModal.bind(this)}
          onCancel={this.hideModal.bind(this)}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
