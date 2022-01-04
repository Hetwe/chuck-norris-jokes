import  { Suspense } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom';
import React from 'react';


const MainRouter = () => {
    const Main = React.lazy(() => import('../modules/Main/pages/mainTemplate'));
    return (
        <HashRouter>
            <Suspense
                fallback={'Loading......'}
            >
                <Routes>
                    <Route
                        path={'/'}
                        element={<Main/>}
                    />
                    {/* <Route
                        path={'/home'}
                        element={<NewMain/>}
                    /> */}
                </Routes>
            </Suspense>
        </HashRouter>
    );
}

export default MainRouter;
