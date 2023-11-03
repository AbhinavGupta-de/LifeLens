import AuthLayout from './_auth/AuthLayout';
import Login from './_auth/forms/Login';
import Register from './_auth/forms/Register';
import RootLayout from './_root/RootLayout';
import { Home } from './_root/pages';
import './globals.css';
import { Routes, Route } from 'react-router-dom';

const App = () => {
	return (
		<main className="flex h-screen">
			<Routes>
				{/* public Routes */}
				<Route element={<AuthLayout />}>
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
				</Route>

				{/* private Routes */}
				<Route element={<RootLayout />}>
					<Route index element={<Home />} />
				</Route>
			</Routes>
		</main>
	);
};

export default App;
