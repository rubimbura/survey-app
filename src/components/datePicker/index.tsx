import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

type Props = { 
  placeholder:string,
  handleDateChange:any,
}

export default function DatePickerComponent({placeholder, handleDateChange}: Props) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
      <div style={{width: '100%', paddingBottom:20}}>
        <DatePicker label={placeholder} onChange={handleDateChange}/>
      </div>
      </DemoContainer>
    </LocalizationProvider>
  );
}