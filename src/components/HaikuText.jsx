import { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import styles from './HaikuText.module.css';
import { hyphenate } from "hyphen/en";


export default function HaikuText (){
  const [text, setText] = useState('');
  const [hyphenatedText, setHyphenatedText] = useState('');

  useEffect(() => {
    hyphenate(text, { hyphenChar: "%" })
    .then(result => {
      setHyphenatedText(() => result);
      console.log(result);
    })
  }, [text]);

  const handleChange = event => {
    setText(() => event.target.value);
  }

  return (
    <>
      <TextField
        id="outlined-multiline-static"
        variant="outlined"
        // label="Multiline"
        // defaultValue="Default Value"
        multiline
        rows={3}
        value={text}
        onChange={handleChange}
      />
      <p>{hyphenatedText}</p>
    </>
  )
}
