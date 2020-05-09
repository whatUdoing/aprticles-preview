import React, { StrictMode } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RouterManager from './components/router-manager/';

import './variables.scss';
import './style.scss';

const App = () => {
    return (
        <StrictMode>
            <Router>
                <RouterManager />
            </Router>
        </StrictMode>
    );
};

export default App;
