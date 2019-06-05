import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import loadScript from '../utils/loadScript';

const styles = theme => ({
  '@global': {
    '#carbonads': {
      overflow: 'hidden',
      backgroundColor: theme.palette.background.level1,
      padding: `${theme.spacing(1)}px ${theme.spacing(1)}px ${theme.spacing(1)}px ${theme.spacing(
        1,
      ) + 130}px`,
      borderRadius: theme.shape.borderRadius,
      '& .carbon-img': {
        float: 'left',
        marginLeft: -130,
        marginRight: theme.spacing(1),
      },
      '& img': {
        verticalAlign: 'middle',
      },
      '& a': {
        color: theme.palette.text.primary,
        textDecoration: 'none',
      },
      '& .carbon-text': {
        ...theme.typography.body2,
        display: 'block',
      },
      '& .carbon-poweredby': {
        ...theme.typography.caption,
        color: theme.palette.text.secondary,
        display: 'block',
      },
    },
  },
});

class AdCodeFund extends React.Component {
  componentDidMount() {
    const scriptSlot = document.querySelector('#code-fund-script-slot');

    // Concurrence issues
    if (!scriptSlot) {
      return;
    }

    loadScript('https://codefund.io/properties/137/funder.js?theme=styled', scriptSlot);
  }

  render() {
    return (
      <React.Fragment>
        <span id="code-fund-script-slot" />
        <span id="codefund" />
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(AdCodeFund);