import React from 'react';
import { Link } from 'react-router-dom';
import { useUserStore } from '../state/useUserStore.ts';

const Header = () => {
  const userName = useUserStore((state) => state.userName)
  return (
    <header className='row align-items-center p-3'>
      <div className='col-3'>
        <Link to='/' className='btn btn-link text-dark'>
          <i className='fas fa-home icon-large'></i> 
        </Link>
        <Link to='/history' className='btn btn-link text-dark'>
          <i className='fas fa-history icon-large'></i>
        </Link>
      </div>
      <h1 className='col-6'>Преобразователь музыки</h1>
      <div className="col-3 text-end">
        <span className="fs-4">{userName}</span>
      </div>
    </header>
  );
}

export default Header;