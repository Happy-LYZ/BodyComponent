import React, { Component } from "react";
import ReactDOM from "react-dom";
const styles = {
  mask: {
    position: "fixed",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.65)",
    height: "100%",
    zIndex: 1000
  },
  modalWrap: {
    position: "fixed",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    zIndex: 1000
  },
  modal: {
    fontSize: 14,
    padding: 20,
    width: 520,
    height: 200,
    margin: "100px auto 0",
    backgroundColor: "#fff",
    borderRadius: 4,
    overflow: "hidden",
    textAlign: "center"
  },
  btnGroup: {
    padding: 10,
    textAlign: "right"
  }
};

export default class MaskEle extends Component {
  constructor(props) {
    super(props);

    this.modal = null;
  }

  componentDidMount() {
    this.modal = document.createElement("div");
    document.body.appendChild(this.modal);

    this._renderLayer();
  }

  componentDidUpdate() {
    document.body.appendChild(this.modal);
    this._renderLayer();
  }

  onCancel = () => {
    const { onCancel } = this.props;
    onCancel instanceof Function && onCancel();
  };

  onOk = () => {
    const { onOk } = this.props;
    onOk instanceof Function && onOk();
  };

  // 渲染模态框内容
  _renderLayer() {
    const { title, content } = this.props;

    let JSXdom = (
      <div style={{ display: this.props.visible ? "block" : "none" }}>
        <div style={styles.mask} />
        <div style={styles.modalWrap}>
          <div style={styles.modal}>
            <h2>{title}</h2>
            <p>{content}</p>
            <div style={styles.btnGroup}>
              <div onClick={this.onCancel}>取消</div>
              <div type="primary" onClick={this.onOk}>
                确定
              </div>
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
