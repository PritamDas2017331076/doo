import React, {Component} from 'react';
import { render } from 'react-dom';
import {EditorState} from "draft-js";
import {Editor} from "react-draft-wysiwyg";


class EditorContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
          editorState: EditorState.createEmpty(),
        };
      }
    
      onEditorStateChange = (editorState) => {
        // console.log(editorState)
        this.setState({
          editorState,
        });
      };
    
      render(){
        function uploadImageCallBack(file) {
          return new Promise(
            (resolve, reject) => {
              const xhr = new XMLHttpRequest();
              xhr.open('POST', 'https://api.imgur.com/3/image');
              xhr.setRequestHeader('Authorization', 'Client-ID 4fc5c83846b77af');
              const data = new FormData();
              data.append('image', file);
              xhr.send(data);
              xhr.addEventListener('load', () => {
                const response = JSON.parse(xhr.responseText);
                console.log(response)
                resolve(response);
              });
              xhr.addEventListener('error', () => {
                const error = JSON.parse(xhr.responseText);
                console.log(error)
                reject(error);
              });
            }
          );
        }
        const { editorState } = this.state;
        return <div className='editor'>
          <Editor
            editorState={editorState}
            onEditorStateChange={this.onEditorStateChange}    
            toolbar={{
              inline: { inDropdown: true },
              list: { inDropdown: true },
              textAlign: { inDropdown: true },
              link: { inDropdown: true },
              history: { inDropdown: true },
              image: { uploadCallback: uploadImageCallBack, alt: { present: true, mandatory: true } },
            }}
          />
        </div>
      }
}

const Edittor = () => {
    return (
        <div>
          <h2>React Wysiwyg Rich Editor Using Draft.js</h2>
          <EditorContainer />
        </div>
    )
}

export default Edittor
