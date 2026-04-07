import Autocomplete from '@mui/material/Autocomplete';
import Grid from '@mui/material/Unstable_Grid2';
import TextField from '@mui/material/TextField';
import { stringList } from '@/lib/types';

export default function ListInput({ pValue, pOnChange, pName }: {
  pValue : stringList,
  pOnChange: any,
  pName : string,
}) {
  return (
    <Grid xs={12}>
      <Autocomplete
        multiple
        freeSolo={true}
        options={[]}
        value={pValue}
        onChange={(event, newValue) => pOnChange(newValue)}
        fullWidth
        renderInput={(params) => {
          return (
            <TextField
              {...params}
              label={pName}
              placeholder={'Type and enter'}
            />
          )}}
      />
    </Grid>
  );
}
