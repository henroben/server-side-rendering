import React from 'react';

const HomePage = () => {
    return(
        <div>
            <div>
                Home Component Update!
                <button onClick={() => {
                    console.log('pressed');
                }}>Press Me!</button>
            </div>
        </div>
    );
};

export default {
    component: HomePage
};