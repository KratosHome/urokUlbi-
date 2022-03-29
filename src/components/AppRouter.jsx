import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import Notfound from './pages/NotFound';
import { privateRouter, publicRoute } from './router/touter';
import Login from './pages/LogIn';
import { AuthContext } from './context';

const Approuter = () => {
    const {isAuth} = useContext(AuthContext)

    return (
        <>
            {isAuth
                ?
                <Routes>
                    {privateRouter.map(rote =>
                        <Route
                            key={Date.now}
                            path={rote.path}
                            element={rote.component}
                            exact={rote.exact}
                        />
                    )}
                    <Route path="*" element={<Notfound />} />
                </Routes>
                :
                <Routes>
                    {publicRoute.map(rote =>
                        <Route
                            key={Date.now}
                            path={rote.path}
                            element={rote.component}
                            exact={rote.exact}
                        />
                    )}
                    <Route path="*" element={<Login />} />
                </Routes>

            }

        </>
    );
}

export default Approuter;
