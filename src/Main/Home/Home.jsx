import React from 'react';

const Home = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                {/* <img src="/src/assets/IMG_20210821_194310.jpg" className="max-w-sm rounded-lg shadow-2xl" /> */}
                <a href='https://postimg.cc/t1gFfy6h' target='_blank'><img src='https://i.postimg.cc/bvxLZwNF/IMG-20210821-194310.jpg' border='0' alt='IMG-20210821-194310'/></a>
                <div>
                    <h1 className="text-5xl font-bold">Hey Iam KB!</h1>
                    <p className="py-6">You will find travel related videos on my channel.  You can join my YouTube channel, click on <span className='text-red-600'>"Get Started"</span> button to join my channel.  And yes don't forget to subscribe my channel.</p>
                    <button className="btn btn-primary" ><a href="https://www.youtube.com/c/NewFutureBD">Get Started</a></button>
                </div>
            </div>
        </div>
    );
};

export default Home;