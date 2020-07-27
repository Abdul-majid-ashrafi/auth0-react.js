import React from 'react';
import { useAuth0 } from '../../contexts/auth0-context';

function HomeComponent() {
    const { user } = useAuth0();

    return (
        <div>
            <h1>Hello {user.nickname}</h1>
        </div>
    );
}
export default HomeComponent;