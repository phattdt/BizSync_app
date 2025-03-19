// import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { colors } from '@mui/material';

export default function CheckboxLabels() {
  return (
    <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked sx={{
        color: "#ffffff",
        '&.Mui-checked': {
          color: "#ffffff",
        },
      }} />} label="Update inventory" />
      <FormControlLabel required control={<Checkbox  sx={{
        color: "#ffffff",
        '&.Mui-checked': {
          color: "#ffffff",
        },
      }}/>} label="Process orders" />
      {/* <FormControlLabel disabled control={<Checkbox />} label="Disabled" /> */}
    </FormGroup>
  );
}