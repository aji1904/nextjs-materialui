import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import NavigatorBar from './component/appbar';
import { Box } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function ContainedButtons() {
  const classes = useStyles();

  return (
    <div>
      <NavigatorBar />
      <div className={classes.root}>
      <Box component="span" m={1}>
        <Button variant="contained" color="secondary">
          Welcome
        </Button>
      </Box>
      </div>
    </div>
  );
}
