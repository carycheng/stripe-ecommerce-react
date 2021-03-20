import React from 'react';
import './hero.styles.scss';

const Hero = () => {
    return (
        <section class="hero is-large is-info hero-image">
            <div class="hero-body">
                <h1 class="hero-title">
                    Bags reimaged for modern life.
                </h1>
                <div className='shop-now-btn'>
                    <button className='button is-black' id='shop-now'>
                        SHOP NOW
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Hero