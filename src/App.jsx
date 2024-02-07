import { NavLink, Outlet } from 'react-router-dom';

export default function App() {

  return (
    <>
      <nav className='Index-Nav-Container'>
        <article className='Index-Nav'>
          <div>
            <NavLink to="/">Home</NavLink>
          </div>
          <div>
            <NavLink to="/page-02">Page 02</NavLink>
          </div>
          <div>
            <NavLink to="/page-03">Page 03</NavLink>
          </div>
        </article>
      </nav>


      <main>
        <Outlet />
      </main>
    </>
  );
}
