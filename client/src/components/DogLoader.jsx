import React from 'react'

const DogLoader = ( { size = 64 }) => {
    return (
        <svg
            className="jump"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
            width={size}
            height={size}
        >
            <path
                fill="#fff"
                d="M124,55h-14c0-7.3-6-13.2-13.2-13.1L82.3,42v-5c0-7.7-6.2-13.9-13.9-13.9h-2.2c-12.2,0-22,9.8-22,22h21.9 c5.4,0,9.8,4.4,9.8,9.8v0c-0.6,9.5-8.5,17-18,17H42.5c-8.2,0-16.1,3.3-21.8,9.1l0,0c-3.7,4-9.9,17.3-13.6,25.7 c-1.5,3.4,1,7.2,4.7,7.2h0c1.6,0,3-0.7,4-2c2.2-2.7,4.7-5,7.5-6.9l7.3,15.9c0.8,1.8,2.7,3,4.7,3c3.4,0,5.9-3.2,5-6.5l-4.7-17.8 c2.4-0.5,4.8-0.8,7.3-0.8h3.3h0.6c11.4,0,21.3,6.9,25.5,17c0.3,0.8,0.7,2.4,1.1,3.9c0.5,2.2,2.3,3.9,4.5,4.1c3.3,0.4,6-2.3,5.8-5.4 c-0.2-4.8-0.4-12.2,0.2-19.5h9.1c2.7,0,5.3,0.9,7.5,2.5l0,0c0.7,0.6,1.4,1.2,2,1.9c1.4,1.4,3.6,2,5.7,1.3c3.5-1.2,4.7-5.1,2.7-8.3 c-3.2-5.2-8.9-8.4-15-8.4H85.6c1.4-5.4,3.6-9.7,7.1-11.3c11.8-5.6,31.3,6.6,31.3-16.3c0-0.2,0-0.3,0-0.5C124,57,124,55,124,55z"
            />
            <path
                fill="#444b54"
                d="M10.7,62.3C13.9,70,21.4,75,29.7,75h0c1.2,0,2.4,0.7,2.9,1.9c1,2.3,2.9,4.3,5.4,5.4c1.4,0.6,2.8,0.9,4.3,0.9 c2.9,0,5.6-1.2,7.7-3.4l1.9-2C53.4,76,55.6,75,58,75h0c11.1,0,20.4-8.7,21-19.8c0.1-1.7-1.2-3.1-2.8-3.2c-1.6-0.1-3.1,1.2-3.2,2.8 C72.5,62.8,65.9,69,58,69H29.7c-5.9,0-11.2-3.5-13.5-9L10.8,47c-0.6-1.3-2-2.2-3.4-1.9c-1.9,0.4-2.9,2.4-2.2,4.1L10.7,62.3z"
            />
            <path
                fill="#444b54"
                d="M127,55c0-1.7-1.3-3-3-3h-11.3c0-0.1,0-0.1,0-0.2c0,0,0-0.1,0-0.1c-0.1-0.5-0.2-0.9-0.4-1.4c0,0,0-0.1,0-0.1 c-0.8-2.5-2.1-4.8-4-6.6c-3.1-3-7.2-4.7-11.5-4.7L88.9,39h-1c0,0,0,0-0.1,0l-2.4,0V37c0-9.3-7.6-16.9-16.9-16.9h-2.2 c-13.8,0-25,11.2-25,25c0,1.7,1.3,3,3,3h24c1.7,0,3-1.3,3-3s-1.3-3-3-3H47.6c1.4-9.1,9.3-16,18.8-16h2.2c6,0,10.9,4.9,10.9,10.9v5 c0,0.2,0,0.4,0.1,0.6c0,0.1,0.1,0.3,0.1,0.4c0,0.1,0,0.1,0.1,0.2c0.1,0.1,0.1,0.3,0.2,0.4c0,0,0,0.1,0.1,0.1 c0.1,0.2,0.2,0.3,0.4,0.5c0,0,0,0,0,0c0,0,0,0,0.1,0c0.5,0.5,1.3,0.8,2.1,0.8c0,0,0,0,0,0c0,0,0,0,0,0l2.4,0l-0.4,11.1 c-0.1,1.9,0.4,3.7,1.5,5.3c1.7,2.5,4.5,4.1,7.5,4.1c0,0,0.1,0,0.1,0c3,0,5.8-1.5,7.5-4l1.5-2.2c0.6-0.8,1.5-1.3,2.5-1.3l5.1,0h11 c0,0.6,0,1.2,0,1.9v0.5c0,4.7-0.9,7.9-2.6,9.6c-2.4,2.4-7.1,2.2-12.1,2.1c-5-0.1-10.2-0.3-14.9,1.9c-5.8,2.8-12.5,12.8-10.8,44.7 c0,0.6-0.2,1.2-0.6,1.6c-0.4,0.4-1,0.7-1.6,0.7c-1,0-1.9-0.7-2.1-1.7c-0.7-2.9-1.1-3.9-1.3-4.5C70.3,103.4,59.2,96,46.8,96h-3.9 c-11.5,0-22.3,5.2-29.5,14.2c-0.4,0.5-1,0.8-1.7,0.8c-1,0-1.6-0.7-1.8-1c-0.2-0.3-0.6-1.1-0.2-2C15.7,95,20.4,85.9,22.9,83.1 c1.1-1.2,1-3.1-0.2-4.2c-1.2-1.1-3.1-1-4.2,0.2c-3.8,4.2-9.8,16.7-14.1,26.5c-1.1,2.5-0.9,5.4,0.6,7.7c1.5,2.3,4,3.7,6.8,3.7 c2.5,0,4.8-1.1,6.3-3.1c6-7.6,15.1-11.9,24.8-11.9h3.9c10,0,18.9,5.9,22.7,15.1c0.1,0.3,0.4,1.1,1,3.6c0.9,3.7,4.2,6.3,8,6.3 c2.2,0,4.4-0.9,5.9-2.6c1.5-1.6,2.4-3.8,2.2-6.1C85.5,97,88.4,82,94,79.4c3.3-1.6,7.8-1.4,12.1-1.3c6,0.2,12.2,0.3,16.4-3.8 c3-2.9,4.4-7.5,4.4-13.9v-0.5C127,57,127,55,127,55z"
            />
            <path fill="#fff" d="M97 49A3 3 0 1 0 97 55A3 3 0 1 0 97 49Z" />
            <path
                fill="#444b54"
                d="M112.7 93.5c-3.1-5.2-8.8-8.5-14.8-8.5-1.7 0-3 1.3-3 3s1.3 3 3 3c4 0 7.7 2.1 9.7 5.5l1 1.7c.7 1.1.2 2.1 0 2.5-.2.4-.9 1.3-2.2 1.3-.8 0-1.6-.4-2.1-1.1-.9-1.4-2.8-1.8-4.2-.8-1.4.9-1.8 2.8-.8 4.2 1.6 2.4 4.2 3.8 7.1 3.8 3.1 0 5.9-1.6 7.4-4.3 1.5-2.7 1.5-5.9-.1-8.5L112.7 93.5zM41.8 111.3c-.4-1.6-2-2.6-3.7-2.2-1.6.4-2.6 2-2.2 3.7l1.4 5.5c.2.9-.1 1.6-.4 1.9-.2.3-.8.8-1.7.8-.8 0-1.6-.5-2-1.3l-2.7-5.9c-.7-1.5-2.5-2.2-4-1.5-1.5.7-2.2 2.5-1.5 4l2.7 5.9c1.3 2.9 4.2 4.8 7.4 4.8 2.5 0 4.9-1.2 6.5-3.2 1.6-2 2.1-4.6 1.5-7L41.8 111.3z"
            />
        </svg>
    )
}

export default DogLoader