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
  toggleBlockType(type){
    this.onChange(
      RichUtils.toggleBlockType(this.state.editorState, type)
    );
  }
  render() {
    return (
        <div>
            <button onClick={() => this.toggleBlockType('header-three')}>标题</button>  
            <button onClick={() => this.toggleInlineStyle('BOLD')}>加粗</button>  
            <button onClick={() => this.toggleInlineStyle('ITALIC')}>斜体</button> 
            <button onClick={() => this.toggleInlineStyle('UNDERLINE')}>下划线</button>    
            <button onClick={() => this.toggleBlockType('unordered-list-item')}>无序列表</button>  
            <button onClick={() => this.toggleBlockType('ordered-list-item')}>有序列表</button>  
            <Editor editorState={this.state.editorState} onChange={this.onChange} customStyleMap={styleMap}/>
        </div>

    );
  }
}

export default MyEditor;