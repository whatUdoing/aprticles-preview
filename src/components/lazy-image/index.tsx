import React, { useRef, ReactNode, useState } from 'react';
import useLazyLoading from './use-lazy-image';

import './style.scss';

type Props = {
    src: string;
    alt?: string;
    title?: string;
    children?: ReactNode | string;
};

// change support for srcset, add real image placeholder handle somehow image error
const LazyImage = ({ src, alt, title, children }: Props) => {
    const $imgEl = useRef(null);
    const [isLoaded, setLoading] = useState(false);
    let isVisible = useLazyLoading($imgEl);

    return (
        <figure
            ref={$imgEl}
            className={`lazy-image ${!isLoaded ? 'lazy-image_loading' : ''}`}
        >
            <img
                className={isVisible && isLoaded ? '' : 'hidden'}
                src={isVisible ? src : undefined}
                title={title}
                alt={alt}
                onLoad={() => setLoading(true)}
                onError={() => console.log('error')}
            />

            {!isLoaded && <>{children ?? ''}</>}
        </figure>
    );
};

export default LazyImage;
