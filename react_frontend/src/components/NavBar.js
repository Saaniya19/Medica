import React, {useEffect, useState} from 'react';
import { List, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
// import {
//     createBrowserRouter,
//     RouterProvider,
// } from "react-router-dom";

export const Nav = ({}) => {
    return (
        <div style={{position:'fixed'}} className="flex gap-5 justify-between items-stretch self-stretch px-20 py-3.5 w-full border-2 border-solid bg-zinc-100 border-blue-300 border-opacity-0 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
            <Link to='/'>
                <img
                    srcSet={process.env.PUBLIC_URL + 'sampleLogoIC24.png'}
                    className="object-center max-w-[49px]"
                />
            </Link>
            <img
                src={process.env.PUBLIC_URL + '/profile.png'}
                className="object-center max-w-[55px]"
            />
        </div>
    );
};