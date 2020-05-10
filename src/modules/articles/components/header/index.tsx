import React from 'react';

import Box from '../../../../components/box';
import SortArticleByDate from '../../../../features/articles/components/sorting/';

const headerBoxModifiers = {
    primary: true,
    spacing: true
};

const Header = () => {
    return (
        <Box cssClasses={headerBoxModifiers}>
            <div className="row end-sm">
                <div className="col_auto">
                    <SortArticleByDate />
                </div>
            </div>
        </Box>
    );
};

export default Header;
