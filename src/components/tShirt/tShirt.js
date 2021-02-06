import React, { useState } from 'react';
import { pics } from '../../utils/imgProvider';
import { useSpring, animated as a  } from 'react-spring';

import Grid from '@material-ui/core/Grid';
import './tShirt.css';

export default function TShirt () {

  const shirts = [pics.cam1, pics.cam2, pics.cam3, pics.cam4, pics.cam5, pics.cam6];

  const [spacing] = React.useState(2);

  const [flipped, set] = useState(false)
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  })

  return (
    <div className="bloque">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid className="grid" container justify="center" spacing={spacing}>
            {shirts.map((value, index) => (
              <Grid key={index} item>
                <img className="tshirt" src={value} alt={index}/>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  )};
