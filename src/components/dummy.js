import React, { Component } from 'react';
import AdSense from 'react-adsense';


export default function dummy() {
    return (
        <div>
            <h1>Dummy Adds</h1>
            <AdSense.Google
                client = 'ca-pub-5624644615408631'
                slot = ''
            />
        </div>
    );
}