import {Route, Routes} from "react-router-dom";
import {about, all, branches, branchesCard, contacts, favorites, home, impressum} from "./shared/constants/routes.js";
import Layout from "./components/ui/layout/Layout.jsx";
import {lazy} from "react";
import ProductCard from "./components/screens/Branches/product-card/ProductCard.jsx";


const HomePage = lazy(() => import('./components/screens/home/Home.jsx'));
const BranchesPage = lazy(() => import('./components/screens/Branches/branches.jsx'));
const AboutPage = lazy(() => import('./components/screens/about/About.jsx'));
const ImpressumPage = lazy(() => import('./components/screens/impressum/Impressum.jsx'));
const ContactsPage = lazy(() => import('./components/screens/contacts/Contacts.jsx'));
const FavoritesPage = lazy(() => import('./components/screens/favorites/Favorites.jsx'));


const NotFoundPage = lazy(() => import('./components/screens/not-found/NotFound.jsx'));

const App = () => {

	return (
		<Routes>
			<Route path={home} element={<Layout/>}>
				<Route path={home} element={<HomePage/>}/>
				<Route path={branches} element={<BranchesPage/>}/>
				<Route path={about} element={<AboutPage/>}/>
				<Route path={impressum} element={<ImpressumPage/>}/>
				<Route path={contacts} element={<ContactsPage/>}/>
				<Route path={branchesCard} element={<ProductCard/>}/>
				<Route path={favorites} element={<FavoritesPage/>}/>
				<Route path={all} element={<NotFoundPage/>}/>
			</Route>
		</Routes>
	)
}

export default App
