import { TextField, MenuItem } from "@mui/material";
import { ChangeEvent, stringList } from '@/lib/types';
import Grid from '@mui/material/Unstable_Grid2';

export default function MenuInput({ pValue, pOnChange, pName, pOptions }: {
  pValue : string,
  pOnChange: React.Dispatch<React.SetStateAction<string>>,
  pName : string,
  pOptions : stringList,
}) {
  return (
    <Grid xs={12}>
      <TextField
        select
        label={pName}
        value={pValue}
        fullWidth
        onChange={(event: ChangeEvent) => { pOnChange(event.target.value);
        }}
      >
        {pOptions.map((option) => ( <MenuItem key={option} value={option}> {option} </MenuItem> ))}
      </TextField>
    </Grid>
  );
}
