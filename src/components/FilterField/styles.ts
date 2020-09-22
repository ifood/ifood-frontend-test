import { withStyles } from '@material-ui/core';

import { DateTimePicker as MaterialDateTimePicker } from '@material-ui/pickers';

import MaterialTextField from '@material-ui/core/TextField';
import MaterialFormControl from '@material-ui/core/FormControl';

const baseStye = withStyles({
  root: {
    marginTop: 24,
  },
});

const TextField = baseStye(MaterialTextField);

const FormControl = baseStye(MaterialFormControl);

const DateTimePicker = baseStye(MaterialDateTimePicker);

export { TextField, FormControl, DateTimePicker };
