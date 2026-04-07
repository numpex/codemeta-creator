import { DefaultLicense, Licenses } from '@/lib/licenses';

import Autocomplete from '@mui/material/Autocomplete';
import Grid from '@mui/material/Unstable_Grid2';
import { License } from '@/lib/types';
import TextField from '@mui/material/TextField';
import { matchSorter } from 'match-sorter';

export default function LicenseInput({ license, setLicense }: {
  license: License,
  setLicense: React.Dispatch<React.SetStateAction<License>>,
}) {
  return (
    <Grid xs={12}>
      <Autocomplete
        id="tags-outlined"
        options={Licenses}
        getOptionLabel={({ name }) => name}
        value={license}
        onChange={(event: any, newValue: License | null) =>
          setLicense(newValue ? newValue : DefaultLicense)}
        fullWidth
        filterOptions={(options, { inputValue }) =>
          matchSorter(options, inputValue, { keys: ['variableName', 'name']})
        }
        renderOption={(props, option) =>
          <li {...props} key={option.variableName}>{option.name}</li>
        }
        renderInput={(params) => {
          return (
            <TextField
              {...params}
              label={'License'}
              placeholder={'placeholder'}
            />
          )}}
      />
    </Grid>
  );
}
