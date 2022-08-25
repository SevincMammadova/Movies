import React from 'react';

export const LogoIcon: React.FC = () => (
    <svg width='60' height='57' viewBox='0 0 60 57' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <g filter='url(#filter0_d_8_16)'>
            <path d='M5 0.5H4.5V1V41V41.5H5H55H55.5V41V1V0.5H55H5Z' stroke='#7026B9' />
            <line x1='5' y1='46.5' x2='40' y2='46.5' stroke='#7026B9' />
            <path
                d='M43.967 20.9981L23.5356 34.0509L23.1538 8.65074L43.967 20.9981Z'
                fill='#DF0E62'
            />
            <circle cx='44' cy='47' r='2' fill='#DF0E62' />
            <line x1='47' y1='46.5' x2='55' y2='46.5' stroke='#7026B9' />
        </g>
        <defs>
            <filter
                id='filter0_d_8_16'
                x='0'
                y='0'
                width='60'
                height='57'
                filterUnits='userSpaceOnUse'
                colorInterpolationFilters='sRGB'
            >
                <feFlood floodOpacity='0' result='BackgroundImageFix' />
                <feColorMatrix
                    in='SourceAlpha'
                    type='matrix'
                    values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                    result='hardAlpha'
                />
                <feOffset dy='4' />
                <feGaussianBlur stdDeviation='2' />
                <feComposite in2='hardAlpha' operator='out' />
                <feColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0' />
                <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_8_16' />
                <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='effect1_dropShadow_8_16'
                    result='shape'
                />
            </filter>
        </defs>
    </svg>
);
