import { NavLink, Outlet } from 'react-router-dom';

export default function App() {

  return (
    <>
      <nav className='bg-brand-blue-100 h-14 flex'>
        <NavLink to="/">
        <img className='h-full' src='/logo.jpg'/>
        </NavLink>
        <div className='flex flex-row justify-evenly items-center w-5/6 text-center px-8 h-full'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/page-02">Page 02</NavLink>
            <NavLink to="/page-03">Page 03</NavLink>
        </div>
      </nav>

      <main>
        <Outlet />
      </main>
    </>
  );
}
