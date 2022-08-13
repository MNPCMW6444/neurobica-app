
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import"./loginPageOptions.css"
export default function LoginPageOptions() {
  return (
    <div className='login-page-options'>
      
      <Checkbox defaultChecked 
  sx={{
    color: "white[800]",
    '&.Mui-checked': {
      color:" pink[600]",
    },
  }}
/>
<FormControlLabel control={<Checkbox defaultChecked />} label="Forgot Password?" />

    </div>
  )
}
