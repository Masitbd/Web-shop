import React from 'react';
import logo from '../../../../src/assests/images/logo.png';

const Header = () => {
  return (
    <div className="container mx-auto bg-slate-400">
      <div>
        <div className="flex  items-center p-3 justify-between">
          <div>
            <img src={logo} alt="" />
          </div>
          <div>
            <input type="text" name="" id="" />
            <button>Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
