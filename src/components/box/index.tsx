import React, { FC } from 'react';

import { EnumLiteralsOf } from '../../types/general';
import './main.scss';

type PropertyToClassMapType =
    | 'primary'
    | 'spacing'
    | 'spacingHorizontal'
    | 'shadow';
const PropertyToClassMap: Record<PropertyToClassMapType, string> = {
    primary: 'box_primary',
    spacing: 'box_spacing',
    spacingHorizontal: 'box_spacing-horizontal',
    shadow: 'box_shadow'
};

const getBoxClasses = (cssClasses: Record<PropertyToClassMapType, boolean>) => {
    return Object.keys(cssClasses)
        .reduce<Array<string>>((prev, curr) => {
            if (cssClasses[curr as PropertyToClassMapType]) {
                prev.push(PropertyToClassMap[curr as PropertyToClassMapType]);
            }

            return prev;
        }, [])
        .join(' ');
};

type Props = {
    cssClasses?: Record<EnumLiteralsOf<typeof PropertyToClassMap>, boolean>;
    [x: string]: any;
};
const Box: FC<Props> = ({ children, cssClasses = {}, ...rest }) => {
    return (
        <div className={`box ${getBoxClasses(cssClasses)}`} {...rest}>
            {children}
        </div>
    );
};

export default Box;
