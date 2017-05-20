import React from 'react'
import { render } from 'react-dom';
var AceEditor  = require('react-ace').default;
import brace from 'brace';
import 'brace/mode/javascript';
import 'brace/theme/github';
var onChange = function(obj) {
  console.log(obj+ "foo");
};
// render a first
render(
  (<div className="App"><AceEditor
    mode="javascript"
    theme="github"
    name="blah1"
    height="6em"
    onChange={onChange}
    /></div>),
  document.getElementById("app")
);
