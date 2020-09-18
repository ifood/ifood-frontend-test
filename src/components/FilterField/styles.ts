import { withStyles } from '@material-ui/core';

import MaterialTextField from '@material-ui/core/TextField';
import MaterialFormControl from '@material-ui/core/FormControl';

const TextField = withStyles({
  root: {
    marginTop: 24,
  },
})(MaterialTextField);

const FormControl = withStyles({
  root: {
    marginTop: 24,
  },
})(MaterialFormControl);

export { TextField, FormControl };
