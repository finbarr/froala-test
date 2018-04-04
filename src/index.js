import React from "react"
import ReactDOM from "react-dom"
import "froala-editor/js/froala_editor.pkgd.min.js"
import FroalaEditor from "react-froala-wysiwyg"

// ReactDOM.render(
//   <FroalaEditor tag="textarea" />,
//   document.getElementById("root")
// )

class Editor extends React.Component {
  componentWillMount() {
    // console.log($)
  }

  render() {
    return (
      <div>
        <h1>1</h1>
        <FroalaEditor tag="textarea" />
      </div>
    )
  }
}

ReactDOM.render(<Editor />, document.getElementById("root"))
