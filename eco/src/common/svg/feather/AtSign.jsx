import React from 'react';

const AtSign = props => {
  return (
    <svg
      className='feather feather-at-sign'
      height='24'
      width='24'
      fill='none'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <circle cx='12' cy='12' r='4' />
      <path d='M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94' />
    </svg>
  );
};

export default AtSign;
