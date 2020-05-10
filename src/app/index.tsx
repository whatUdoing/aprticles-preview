import React, { StrictMode } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import RouterManager from './components/router-manager/';

import 'reset-css';
import 'flexboxgrid';

import './styles/theme.scss';
import './styles/variables.scss';
import './styles/main.scss';

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
