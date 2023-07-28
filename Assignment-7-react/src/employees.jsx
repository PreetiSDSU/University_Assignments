let preeti = "Preeti Kulkarni";
let sally = "Sally Smith";
let mark = "Mark Martin";
let holly = "Holly Unlikely";

const element = (
  <ul style={{ color: "blue", fontSize: "24px" }}>
    <li>{preeti}</li>
    <li>{sally}</li>
    <li>{mark}</li>
    <li>{holly}</li>
  </ul>
);
ReactDOM.render(element, document.getElementById("content"));
