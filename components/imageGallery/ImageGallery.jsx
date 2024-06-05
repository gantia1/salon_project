import React from 'react';
import {Image as AntImage} from 'antd';

export default function ImageGallery({images}) {
    return (
        <AntImage.PreviewGroup>
            {images.map((src, index) => (
                <AntImage key={index} src={src} width={70} height={70}/>
            ))}
        </AntImage.PreviewGroup>
    );
};

