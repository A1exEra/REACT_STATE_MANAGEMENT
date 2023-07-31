import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { Outlet, Link } from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';
import store from './store/ReduxStore';
const links = [
  { path: 'use-ref', element: 'USE REF' },
  { path: 'use-state', element: 'USE STATE' },
  { path: 'use-effect', element: 'USE EFFECT' },
  { path: 'use-context', element: 'USE CONTEXT' },
  { path: 'use-reducer', element: 'USE REDUCER' },
  { path: 'use-callback', element: 'USE CALLBACK' },
  { path: 'use-debounce', element: 'USE DEBOUNCE' },
  { path: 'redux', element: 'REDUX' },
];

function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>GOD OF CODE</h1>
      <hr />
      <ul className="nav">
        {links.map((el) => (
          <li>
            <Link to={`${el.path}`}>
              <p>{el.element}</p>
            </Link>
          </li>
        ))}
      </ul>
      <hr />
      <Provider store={store}>
        <Outlet />
      </Provider>
    </>
  );
}

export default App;
