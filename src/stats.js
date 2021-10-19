import React from 'react';
import {BrowserRouter, Link} from 'react-router-dom';

function Stats() {
  return (
    <footer className="container mx-auto my-10 rounded-lg w-full lg:w-5/12">
      <div className="flex space-x-4 px-6 py-4">
          <h2 className="font-medium text-xl flex-1">Menu</h2>
      </div>
      <div class="grid grid-cols-3 gap-4 px-6 py-4">
        <Link className="font-light" to='/'>Workout</Link>
        <Link className="font-light" to='/about'>About</Link>
        <Link className="font-light" to='/profile'>Profile</Link>
      </div>
    </footer>
  );
};
  
export default Stats;