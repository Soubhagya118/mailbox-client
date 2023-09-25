
import React, { useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, ContentState, convertToRaw } from 'draft-js';
import { stateToHTML } from 'draft-js-export-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { useDispatch, useSelector } from 'react-redux';
import addmailDetails from '../store/mailDetailsSlice'

function Compose() {
const mailData=useSelector(state=>state.Mail.mailDetails);
const dispatch=useDispatch();

  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const handleEditorStateChange = (newEditorState) => {
    setEditorState(newEditorState);
    // console.log("contenthtml",editorState);

  };

  const handleConvertToHtml = (e) => {
    e.preventDefault();
    const contentState = editorState.getCurrentContent();
    const contentText = contentState.getPlainText();
    console.log(contentText);

    fetch(`https://mailbox-client-fa8fa-default-rtdb.firebaseio.com/mailbox.json`,{
        method:"POST",
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(contentText)
    }).then(res=>{
        console.log(res)
        return res.json()
    }).then(data=>{
        console.log("compose data",data.name);
        dispatch(addmailDetails({mailText:contentText,id:data.name}))
    }).catch(err=>{
        console.log("err",err);
    })

  };

  return (
    <div>
      <h2>Rich Text Editor</h2>
      <Editor
        editorState={editorState}
        onEditorStateChange={handleEditorStateChange}
      />
      <button className='border-2 border-black px-2 rounded-lg' onClick={handleConvertToHtml}>Send</button>
    </div>
  );
}

export default Compose;
