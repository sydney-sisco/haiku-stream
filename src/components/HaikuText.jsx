import { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import styles from './HaikuText.module.css';
import { countSyllables, validSyllables } from "../helpers/syllables";
import SubmitButton from './SubmitButton';


export default function HaikuText (){
  const [text, setText] = useState('');
  const [counts, setCounts] = useState([0, 0, 0]);
  const [valid, setValid] = useState(false);

  useEffect(() => {

    console.log('start:', text)
    
    const newCounts = text.trim().split('\n')
    .map(line => countSyllables(line));

    setCounts(() => [...newCounts])
    setValid(() => validSyllables(newCounts));

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
        fullWidth
        multiline
        rows={3}
        value={text}
        onChange={handleChange}
        className={styles.textBox}
      />
      <div>
        {counts.map((count, i) => <p key={i} >{count}</p>)}
      </div>
      {valid && <SubmitButton />}
    </>
  )
}
