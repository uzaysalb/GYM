import React from 'react';
import aboutimage from '../../src/images/about.png';
function About() {
  return (
    <div id='about'>
<div className='about-image'>
<img  src={aboutimage} alt=''/>
</div>
<div className='about-text'>
<h1>LEARN MORE ABOUT US</h1>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta atque natus ea ipsam, sit molestiae earum aut, distinctio doloribus rerum ad nemo nihil officiis vel. Sequi placeat aperiam excepturi minima?</p>
<button>READ MORE</button>
</div>

    </div>
  );
};

export default About;