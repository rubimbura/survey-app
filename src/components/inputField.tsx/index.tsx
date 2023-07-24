import TextField from '@mui/material/TextField';

type Props = {
  placeholder:string,
  handleChange:any,
}


export default function InputTextfield({placeholder,handleChange}: Props) {
  return (
    <TextField 
      id="outlined-basic" 
      label={placeholder} 
      variant="outlined" 
      onChange={handleChange}
      style={{width: '100%', paddingBottom: 20}}
    />
  );
}