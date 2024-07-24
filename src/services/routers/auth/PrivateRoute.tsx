import React from 'react';
import useAuth from '../../../hooks/useAuth';

interface PrivateRouteProps {
    children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
    const { isAuthenticated } = useAuth();

    return isAuthenticated ? (
        <>{children}</>
    ) : (
        <div>
            SEM PERMISSAO
        </div>
    );
};

export default PrivateRoute;
