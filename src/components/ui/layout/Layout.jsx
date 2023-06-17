import React, {Suspense} from 'react';
import Header from "../header/Header.jsx";
import {Outlet} from "react-router-dom";
import {Container} from "./Layout.styled.jsx";
import Preloader from "../preloader/Preloader.jsx";

const Layout = () => {
	return (
		<>
			<Header/>
			<Container>
				<Suspense fallback={<Preloader/>}>
					<Outlet/>
				</Suspense>
			</Container>
		</>
	);
};

export default Layout;