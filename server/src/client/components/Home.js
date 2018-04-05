import React from 'react';

const Home = () => {
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

export default Home;