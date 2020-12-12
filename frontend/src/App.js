import { Provider } from 'react-redux'

import store from './store';
import GlobaStyles from './styles/global'
import Routes from './routes'

import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <GlobaStyles />
      <Provider store={store}>
        <Header/>
        <Routes />
        <Footer />
      </Provider>
    </>
  );
}



export default App;
