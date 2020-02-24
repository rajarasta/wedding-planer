import React from 'react';

import ExtendedTable from '../../components/ExtendedTable/ExtendedTable';
import { withRouter } from 'react-router-dom';
import Fab from '@material-ui/core/Fab'

const Guests = () => {
  return (
    <div>
      <ExtendedTable />
      <Fab style={{position:'fixed', bottom: '3rem', right: '3rem'}} />
    </div>

  )
}

export default withRouter(Guests);