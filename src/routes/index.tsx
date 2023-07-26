import { Suspense } from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { lazy } from 'react'


const HomePage = lazy(()=> import('../pages/Home'))
const CattleFarming = lazy(()=> import('../pages/CattleFarming'))
const SuccessPage = lazy(() => import('../components/successPage'))
const Pigfarming = lazy(() =>import('../pages/PigFarming'))
const GoatFarming = lazy(() => import('../pages/GoatFarming'))
const RabbitFarming = lazy(() => import('../pages/RabbitFarming'))


const DefaultRoutes = () => {
  return(
    <BrowserRouter>
      <Suspense fallback={<div></div>}>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/occupation/cattle-farming' element={<CattleFarming/>}/>
        <Route path='/occupation/pig-farming' element={<Pigfarming/>}/>
        <Route path='/occupation/goat-farming' element={<GoatFarming/>}/>
        <Route path='/occupation/rabbit-farming' element={<RabbitFarming/>}/>
        <Route path='/success' element={<SuccessPage/>}/>
      </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default DefaultRoutes