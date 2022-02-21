import './index.css';
import { Route, Routes } from 'react-router-dom';

import { Navigation } from './constants';
import { Todo } from './pages';

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path={Navigation.TODO} caseSensitive={false} element={<Todo />} />
			</Routes>
		</div>
	);
}

export default App;
