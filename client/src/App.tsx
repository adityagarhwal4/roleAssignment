import { ToastContainer } from 'react-toastify';
import './App.css'
import { createBrowserRouter, Navigate, Outlet, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Login from './screens/Login/Login';
import AuthGuard from './AuthGuard/AuthGuard';
import Home from './screens/Home/Home';

const queryClient = new QueryClient()

function App() {

  const router = createBrowserRouter([
    {
      element: <AuthGuard children={<Outlet />} />,
      children: [
        {
          path: "/",
          element: <Home />
        }
      ]
    },
    {
      path: "/login",
      element: <Login />
    }
  ])

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ToastContainer
        position="top-center"
        autoClose={1200}
        hideProgressBar={true}
        closeOnClick={true}
        pauseOnHover={true}
        draggable={true}
        theme="colored"
      />
    </QueryClientProvider>
  )
}

export default App
