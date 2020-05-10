import React from 'react';

import Box from '../../../../components/box';
import ArticleSources from '../../../../features/articles/components/source/';

const asideBoxModifiers = {
    primary: true,
    spacing: true
};

const Aside = () => {
    return (
        <Box cssClasses={asideBoxModifiers}>
            <ArticleSources />
        </Box>
    );
};

export default Aside;
