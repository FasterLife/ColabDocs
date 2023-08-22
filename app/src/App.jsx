import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Editor from "@monaco-editor/react"
import * as Y from "yjs"
import { WebrtcProvider } from "y-webrtc"
import { MonacoBinding } from "y-monaco"
import { styled } from "styled-components"

const Button = styled.button`
  background-color: #716E6D;
  color: white;
  padding: 5px 15px;
  border-radius: 5px;
  margin: 10px 10px;
`

// Setup Monaco Editor
// Attach YJS Text to Monaco Editor

function App() {
  const editorRef = useRef(null);

  // Editor value -> YJS Text value (A text value shared by multiple people)

  // Initialize YJS, tell it to listen to our Monaco instance for changes.
  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;

    // Initialize YJS
    const doc = new Y.Doc(); // a collection of shared objects -> Text

    // Connect to peers (or start connection) with webRTC
    const provider = new WebrtcProvider("test-room", doc);
    const type = doc.getText("monaco"); // doc { "monaco": "what our IDE is showing" }

    // Bind YJS to Monaco
    const binding = new MonacoBinding(type, editorRef.current.getModel(), new Set([editorRef.current]), provider.awareness);
    console.log(provider.awareness)
  }

  return (
    <div>
      <Editor
        height="90vh"
        width="100vw"
        theme="vs-dark"
        onMount={handleEditorDidMount}
      />
    </div>
  )
}

export default App
