import {
  Routes,
  Route,
} from 'react-router-dom'
import Edit from './pages/Edit'
import Overlay from './pages/Overlay'

const Router = () => (
  <Routes>
    <Route path='overlay' element={<Overlay />} />
    <Route path='edit' element={<Edit />} />
  </Routes>
)

export default Router