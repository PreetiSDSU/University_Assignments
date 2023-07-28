let preeti = "Preeti Kulkarni";
let sally = "Sally Smith";
let mark = "Mark Martin";
let holly = "Holly Unlikely";
const element = /*#__PURE__*/React.createElement("ul", {
  style: {
    color: "blue",
    fontSize: "24px"
  }
}, /*#__PURE__*/React.createElement("li", null, preeti), /*#__PURE__*/React.createElement("li", null, sally), /*#__PURE__*/React.createElement("li", null, mark), /*#__PURE__*/React.createElement("li", null, holly));
ReactDOM.render(element, document.getElementById("content"));