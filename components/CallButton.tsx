'use client';

import React from 'react';

const CallButton = () => {
    return (
        <a
            href="tel:1300 564 150"
            className="inline-flex items-center gap-2 bg-[#0D83C7] hover:bg-[#103052] text-white font-semibold px-6 py-3 rounded shadow"
            role="button"
            aria-label="Call 1800 841 323"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 fill-white"
                viewBox="0 0 512 512"
            >
                <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z" />
            </svg>
            1300 564 150
        </a>
    );
};

export default CallButton;
