import './styles/App.module.scss'
import { 
  BrowserRouter as Router,
  Routes,
  Route }
from 'react-router-dom';
import { Home } from './views/Home/Home';
import { Layout } from './component/Layout';
import { About } from './views/about/About';
import { Portfolio } from './views/portfolio/Portfolio';
import { MymarkupGuide } from './views/mymarkupguide/MymarkupGuide';

function App() {
  return (
    <Router>
			<Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/portfolio' element={<Portfolio />}></Route>
          <Route path='/markup/:type' element={<MymarkupGuide />}></Route>
        </Route>
			</Routes>
		</Router>
  );
}

export default App;
