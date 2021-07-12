import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import './Button.scss';

interface Props {
  children: ReactNode;
  to?: string;
  onClick?: () => void;
}

const Button = ({ children, to, onClick }: Props) => {
  return (
    <>
      {to ? (
        <Link to={to}>
          <button onClick={onClick} className='button'>
            {children}
          </button>
        </Link>
      ) : (
        <button onClick={onClick} className='button'>
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
