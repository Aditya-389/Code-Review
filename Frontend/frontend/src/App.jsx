import { useEffect, useState } from 'react'
import "prismjs/themes/prism-tomorrow.css"
import Editor from "react-simple-code-editor"
import prism from "prismjs"
import rehypeHighlight from "rehype-highlight"
import "highlight.js/styles/github-dark.css"
import axios from "axios"
import Markdown from "react-markdown"
import './App.css'

function App() {

  // To allow editing, we are using state variables

  const [code, setCode] = useState(`function sum() {
  return 1 + 1;
}`);

  const [review, setReview] = useState(``);
  useEffect(() => {
   prism.highlightAll();
  },[])

  async function reviewCode() {
    // iss function ki help se backend per code bheje
    // fir backend uss code ko review karega aur respond dega

    const response = await axios.post('http://localhost:3000/ai/get-review', {code})
  
    // jese he data milega usko setReview mai set kardo
    setReview(response.data);
  }


  return (
    <>
    <main>
      <div className="left">
        <div className="code">
          <Editor 
          value = {code}
          onValueChange={code => setCode(code)}
          highlight={code => prism.highlight(code, prism.languages.javascript, "javascript")}
          padding={10}
          style={{
            fontFamily : '"Fira code", "Fira Mono", "monospace"',
            fontSize : 16,
            border : "1px solid #ddd",
            borderRadius : "5px",
            height : "100%",
            width : "100%"
          }}
          
          />
        </div>
        <div onClick={reviewCode} className="review">Review</div>
      </div>
        
      <div className="right">
      {review ? (
          <Markdown rehypePlugins={[rehypeHighlight]}>
            {review}
          </Markdown>
          ) : (
            <p>No review yet.</p>
          )}
      </div>
    </main>
    </>
  )


}

export default App
