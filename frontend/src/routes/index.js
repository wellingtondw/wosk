import { BrowserRouter, Route } from 'react-router-dom'

import Home from '../pages/Home'

const routes = () => {
  return (
    <BrowserRouter>
      <Route exact path='/' component={Home}  />
    </BrowserRouter>
  )
}

export default routes
