import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
}from 'react-router-dom'

//layouts and pages
import RootLayout from './layouts/RootLayout'
import Home from './pages/Home'
import About from './pages/About'
import Menu from './pages/Menu'
import Reservations from './pages/Reservations'
import OrderOnline from './pages/OrderOnline'
import Login from './pages/Login'

//router and routes

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="menu" element={<Menu />} />
      <Route path="reservation" element={<Reservations />} />
      <Route path="OrderOnline" element={<OrderOnline />} />
      <Route path="login" element={<Login />} />
    </Route>
  )
)

function App() {
  return (
      <RouterProvider router={router} />
  );
}

export default App;
