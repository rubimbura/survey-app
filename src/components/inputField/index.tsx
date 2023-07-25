import TextField from '@mui/material/TextField';

type Props = {
  placeholder:string,
  handleChange:any,
  type?:any
}


export default function InputTextfield({placeholder,handleChange, type}: Props) {
  return (
    <TextField 
      id="outlined-basic" 
      label={placeholder} 
      variant="outlined" 
      onChange={handleChange}
      type={type}
      style={{width: '100%', paddingBottom: 20}}
    />
  );
}