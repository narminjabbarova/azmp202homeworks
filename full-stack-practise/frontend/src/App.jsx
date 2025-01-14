import { Route, Routes } from 'react-router-dom'
import Favorites from './pages/client/Favorites'
import Home from './pages/client/Home'
import NotFound from './pages/client/NotFound'
import Products from './pages/client/Products'
import ClientLayout from './layouts/client/index'
import AdminLayout from './layouts/admin'
import DashBoard from './pages/admin/DashBoard'
import AddProduct from './pages/admin/Add'


function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<ClientLayout />}>
          <Route index element={<Home />} />
          <Route path='products' element={<Products />} />
          <Route path='favorites' element={<Favorites />} />
        </Route>

        <Route path='/admin' element={<AdminLayout />}>
          <Route index element={<DashBoard />} />
          <Route path='addproduct' element={<AddProduct />} />

        </Route>


        <Route path='*' element={<NotFound />} />

      </Routes>
    </>
  )
}

export default App
