var React = require('react');
var ReactDOM = require('react-dom');

var objOne = {
    name: "Bob",
    location: "France"
}

var objTwo = {
    age: 32,
    ...objOne
}

console.log(objTwo);

ReactDOM.render(
    <h1>Boilerplate app!</h1>,
    document.getElementById("app")
);