import './App.css'
import {Route, Routes} from "react-router-dom";
import {all, branches, branchesCard, home} from "./shared/constants/routes.js";
import Layout from "./components/ui/layout/Layout.jsx";
import {lazy} from "react";
import ProductCard from "./components/screens/Branches/ProductCard/ProductCard.jsx";

const BranchesPage = lazy(() => import('./components/screens/Branches/Branches.jsx'));
const NotFoundPage = lazy(() => import('./components/screens/not-found/NotFound.jsx'));

const App = () => {

	return (
		<Routes>
			<Route path={home} element={<Layout/>}>
				<Route path={branches} element={<BranchesPage/>}/>
				<Route path={branchesCard} element={<ProductCard/>}/>
				<Route path={all} element={<NotFoundPage/>}/>
			</Route>
		</Routes>
	)
}

export default App
