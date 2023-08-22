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

  return (
    <div>
      <Editor
        height="90vh"
        width="100vw"
        theme="vs-dark"
      />
    </div>
  )
}

export default App
