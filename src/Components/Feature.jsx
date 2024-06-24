import React from 'react';
import FeatureBox from './FeatureBox';
import fimage1 from '../../src/images/1 (1).svg';
import fimage2 from '../../src/images/2 (1).svg';
import fimage3 from '../../src/images/3 (1).svg';
import fimage4 from '../../src/images/4 (1).svg';

function Feature() {
  return (
    <div id='features'>
<h1>FEATURES</h1>
<div className='a-container'>
<FeatureBox image={fimage1} title="Weight Lifting"></FeatureBox>
<FeatureBox image={fimage2} title="Specific Muscle"></FeatureBox>
<FeatureBox image={fimage3} title="Flex Your Muscle"></FeatureBox>
<FeatureBox image={fimage4} title="Cardio Exercise"></FeatureBox>
</div>
    </div>
  );
};

export default Feature;