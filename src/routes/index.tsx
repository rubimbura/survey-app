import { Suspense } from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { lazy } from 'react'


const HomePage = lazy(()=> import('../pages/Home'))
const OcupationForm = lazy(()=> import('../pages/OcupationForm'))
const SuccessPage = lazy(() => import('../components/successPage'))

const DefaultRoutes = () => {
  return(
    <BrowserRouter>
      <Suspense fallback={<div>loading..</div>}>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/occupation/:id' element={<OcupationForm/>}/>
        <Route path='/success' element={<SuccessPage/>}/>
      </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default DefaultRoutes