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
        position: 'relative',
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
        display: 'flex',
      padding: 10,
      textAlign: "right",
      position: 'absolute',
      right: '20px',
      bottom: '10px',
    },
    btn:{
        width: '60px',
        height: '30px',
        lineHeight: '30px',
        backgroundColor: '#e2e2e2',
        textAlign: 'center',
    margin:'0 10px',
    borderRadius: '6px',
    }
  };

  export default styles;