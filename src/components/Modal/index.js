import React, { Component } from "react";
import ReactDOM from "react-dom";
import './index.less'

export default class Modal extends Component {
  constructor(props) {
    super(props);
    this.modal = null;
  }

  /**
   * @method 组件挂载后
   */
  componentDidMount() {
    let node = document.getElementById('modal-id');
    if(node){
      this._renderLayer();
    }else{
      this.modal = document.createElement("div");
      document.body.appendChild(this.modal);
      this._renderLayer();
    }
  }

  /**
   * @method 组件更新后
   */
  componentDidUpdate() {
    let node = document.getElementById('modal-id');
    if(node){
      this._renderLayer();
    }else{
      document.body.appendChild(this.modal);
      this._renderLayer();
    }
  }

  /**
   * @method 模态框 取消按钮
   */
  onCancel = () => {
    const { onCancel } = this.props;
    onCancel instanceof Function && onCancel();
  };

  /**
   * @method 模态框 确定按钮
   */
  onOk = () => {
    const { onOk } = this.props;
    onOk instanceof Function && onOk();
  };

  /**
   * @method 渲染模态框内容
   */
  _renderLayer() {
    const { title, content } = this.props;
    let JSXdom = (
      <div id="modal-id" style={{ display: this.props.visible ? "block" : "none" }}>
        <div className="mask"></div>
        <div className="modalWrap">
          <div className="modal">
            <h2>{ title }</h2>
            <p>{ content }</p>
            <div className="btnGroup">
              <div onClick={ this.onCancel }>取消</div>
              <div type="primary" onClick={ this.onOk }>确定</div>
            </div>
          </div>
        </div>
      </div>
    );
    ReactDOM.render(JSXdom, this.modal);
  }

  render() {
    return null;
  }
}
