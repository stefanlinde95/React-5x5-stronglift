import React, { useState } from 'react';

function Header() {
  const [login, setLogin] = useState(false)
  return (
    <header>
        <nav className="primary-header mb-10">
            <div className="container mx-auto flex">
                <h1 className="text-3xl py-2 font-bold">5x5 Workout</h1>
                <div className="flex-grow text-right">
                  <div className="inline-flex">
                    {login ? <img src="https://thispersondoesnotexist.com/image" width="50px" alt="first name" className="profile-picture rounded-full my-1 mr-4"/> : ""}
                    <button className="py-4 pr-7" onClick={()=> setLogin(!login)}>{login ? `Log out` : `Log in`}</button>
                  </div>
                </div>
            </div>
        </nav>
    </header>
  );
}

export default Header;