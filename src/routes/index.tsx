import { Navigate, Route, Routes } from "react-router-dom"
import Home from "../pages/home"

export const AppRoutes = () => {

    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/2" element={<p>Página 2</p>} />
            <Route path="/3" element={<p>Página 3</p>} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    )

}