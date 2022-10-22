import { Navigate, Route, Routes } from "react-router-dom"

export const AppRoutes = () => {

    return(
        <Routes>
            <Route path="/" element={<p>Página Inicial</p>} />
            <Route path="/2" element={<p>Página 2</p>} />
            <Route path="/3" element={<p>Página 3</p>} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    )

}