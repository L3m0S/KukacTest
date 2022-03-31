import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { PalindromesPage } from "./pages/PalindromesPage";

export function AppRoutes() {
    return(
        <Router>
            <Routes>
                <Route path="/home" element={<HomePage/>}/>

                <Route path="/palindromes" element={<PalindromesPage/>}/>
            </Routes>
        </Router>
    )
}