import TextField from '@material-ui/core/TextField';
import styles from './HaikuText.module.css';


export default function HaikuText (){


  return (
    <TextField
      id="outlined-multiline-static"
      label="Multiline"
      multiline
      rows={3}
      defaultValue="Default Value"
      variant="outlined"
    />
  )
}
