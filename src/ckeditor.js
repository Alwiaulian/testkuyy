import React, { Component } from 'react';
import logo from './logo.svg';
// import './App.css';
import CKEditor from 'react-ckeditor-component';

 
class Example extends Component {
    constructor(props) {
        super(props);
        this.updateContent = this.updateContent.bind(this);
        this.state = {
            content: 'content',
        }
    }
 
    updateContent(newContent) {
        this.setState({
            content: newContent
        })
    }
    
    onChange(evt){
      console.log("onChange fired with event info: ", evt);
      var newContent = evt.editor.getData();
      this.setState({
        content: newContent
      })
    }
    
    onBlur(evt){
      console.log("onBlur event called with event info: ", evt);
    }
    
    afterPaste(evt){
      console.log("afterPaste event called with event info: ", evt);
    }
 
    render() {
        return (
            <CKEditor 
              activeClass="p10" 
              content={this.state.content} 
              events={{
                "blur": this.onBlur,
                "afterPaste": this.afterPaste,
                "change": this.onChange
              }}
             />
        )
    }
}
export default Example;