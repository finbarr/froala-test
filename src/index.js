import React from "react"
import ReactDOM from "react-dom"
import "froala-editor/js/froala_editor.pkgd.min.js"
import FroalaEditor from "react-froala-wysiwyg"

ReactDOM.render(
  <FroalaEditor tag="textarea" />,
  document.getElementById("root")
)
