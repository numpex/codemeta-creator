import { ChangeEvent } from '@/lib/types';
import Grid from '@mui/material/Unstable_Grid2';
import TextField from '@mui/material/TextField';

export default function TextInput({ pValue, pOnChange, pName, pHolder }: {
  pValue : string,
  pOnChange: React.Dispatch<React.SetStateAction<string>>,
  pName : string,
  pHolder : string,
}) {
  return (
    <Grid xs={12}>
      <TextField
        label={pName}
        value={pValue}
        fullWidth
        placeholder={pHolder}
        onChange={(event: ChangeEvent) => { pOnChange(event.target.value);
        }}
      />
    </Grid>
  );
}
