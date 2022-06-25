import { 
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';
import Home  from './components/Home';
import Post  from './components/Post';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:id" element={<Post />} />
            </Routes>
        </Router>
    );
}

export default App;
