import React, { Fragment } from 'react';
import spinner from './spinner.gif';

//"return()" not needed for arrow functions when tag is returned directly
export const Spinner = () => (
  <Fragment>
    <img
      src={spinner}
      alt='Loading...'
      style={{ width: '200px', margin: 'auto', display: 'block' }}
    />
  </Fragment>
);

export default Spinner;
