import React from 'react';
// import { Link } from "react-router-dom";



export default function Footer() {
    return (
        <div className="row">
            <div className="col-md-4 text-center">
                <span> <a style={{
                    color: 'white',
                    textDecoration: 'none'
                }} href="https://www.npmjs.com/package/react-jsx-forms">NPM</a></span><br />

            </div>
            <div className="col-md-4 text-center">
                <span><a style={{
                    color: 'white',
                    textDecoration: 'none'
                }} href="https://github.com/hardy12994/react-jsx-forms">GIT</a></span><br />
            </div>
            <div className="col-md-4 text-center">
                <span ><a style={{
                    color: 'white', textDecoration: 'none'
                }} href="https://stackoverflow.com/search?q=react-jsx-forms+npm">Stack overflow</a></span>

            </div>
        </div>
    );
}


