import './App.css'
import {Route, Routes} from "react-router-dom";
import {home} from "./shared/constants/routes.js";
import Layout from "./components/ui/layout/Layout.jsx";

const App = () => {
  return (
    <Routes>
      <Route path={home} element={<Layout/>}>

      </Route>
    </Routes>
  )
}

export default App
