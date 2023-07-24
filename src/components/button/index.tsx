import Button from '@mui/material/Button';


type Props = {
  label:string,
  onClick: () => void,
}

export default function PrimaryButton({label, onClick}: Props) {
  return (
    <Button onClick={onClick} variant="contained" style={{width: '100%'}}>{label}</Button>
  );
}