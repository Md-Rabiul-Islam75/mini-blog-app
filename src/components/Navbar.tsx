import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  const user = true; //for checking user is logged in or not
  return (
    <div className="navbar bg-base-100 shadow-sm flex justify-evenly">
      <div className="">
        <Link href={"/"} className="btn btn-ghost text-xl">MiniBlog</Link>
      </div>
      <div className="">
        <input type="text" placeholder="Filter by Post id" className="input input-bordered w-24 md:w-auto" />
      </div>


      <div >
        {
          !user ? (<Link href="/login"><button className='btn'>Login</button></Link>)
            : (
              <><Link href="/dashboard"><button className='btn'>Dashboard</button></Link>
                <Link href="/logout"><button className='btn ml-2'>Logout</button></Link>
              </>
            )
        }
      </div>

    </div>

  );
};

export default Navbar;