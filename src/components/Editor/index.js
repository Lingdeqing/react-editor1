import React from 'react';
import {Editor, EditorState, RichUtils} from 'draft-js';

const styleMap = {
    'RED': {
        color: 'red'
    }
}
class MyEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {editorState: EditorState.createEmpty()};
    this.onChange = (editorState) => this.setState({editorState});
  }
  toggleInlineStyle(style){
      this.onChange(
        RichUtils.toggleInlineStyle(this.state.editorState, style)
      );
  }
  render() {
    return (
        <div>
            <button onClick={() => this.toggleInlineStyle('BOLD')}>bold</button>  
            <button onClick={() => this.toggleInlineStyle('RED')}>red</button>        
            <Editor editorState={this.state.editorState} onChange={this.onChange} customStyleMap={styleMap}/>
        </div>

    );
  }
}

export default MyEditor;