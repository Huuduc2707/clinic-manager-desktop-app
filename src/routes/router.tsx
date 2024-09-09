import {Routes, Route} from "react-router-dom"
import * as Pages from "@pages"

export const Router = () => {
    return (
        <Routes>
            <Route index path="/patient" element={<Pages.Patient/>} />
            <Route path="/storage" element={<Pages.Storage/>} />
            <Route path="/finance" element={<Pages.Finace/>} />
        </Routes>
    );
}