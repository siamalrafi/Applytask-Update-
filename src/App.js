import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes';



function App({ children }) {
  return (
    <div>
      <RouterProvider router={router} >
        {children}
      </RouterProvider>

    </div>
  );
}

export default App;
