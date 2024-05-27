import { useSignOut } from 'react-firebase-hooks/auth';
import auth from '../firebase/firebase.config';
import { Link, Outlet } from 'react-router-dom';

export default function DashbaordLayout() {
  const [signOut] = useSignOut(auth);

  const handleLogout = async () => {
    await signOut();
  };
  return (
    <div className="drawer lg:drawer-open bg-white">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet />
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side border-r-2 shadow-inner">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        <ul className="menu p-4 w-56 min-h-screen bg-whhite text-black flex flex-col justify-between">
          {/* Sidebar content here */}

          <div>
            <div>
              <Link to={'/dashbord'} className="text-xl font-bold  rounded  ">
                Dashboad
              </Link>
            </div>
            <div className="collapse collapse-arrow bg-white mt-5">
              <input type="checkbox" name="my-accordion-2" />
              <div
                tabIndex={0}
                role="button"
                className="collapse-title  font-semibold"
              >
                Recipes
              </div>
              <ul tabIndex={0} className="collapse-content">
                <li className="hover:bg-slate-200">
                  <Link to={'/dashbord/manage-recipes'}>
                    Mangae All Recipes
                  </Link>
                </li>
                <li className="hover:bg-slate-200">
                  <a>Sidebar Item 2</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex gap-4">
            <Link to={'/'} className="btn btn-neutral">
              Home
            </Link>
            <button className="btn btn-error" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
}
