import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';

const StarShipDetail: React.FC = () => {
    const { isAuthenticated, logout } = useAuth();
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    if (!isAuthenticated) {
        return <div>ACESSO NEGADO</div>;
    }

    return (
        <div>
            <h2>Nave do ID: {id}</h2>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default StarShipDetail;
