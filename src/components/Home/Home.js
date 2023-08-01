import React, { useState, useEffect } from 'react'

import { Content, Container } from './Home.styled'
import { Typography } from '@mui/material'
import AnimatedTextCharacter from './AnimatedTextCharacter/AnimatedTextCharacter'

export default function Home() {
  const wordsConst =[ " Developer", " Photographer"]
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % wordsConst.length);
    }, 3000);  // change the interval as needed
    return () => clearInterval(timer);
  }, []);
  return (
    <Container>
      <Content>
        <div>
          <Typography variant="h2" fontWeight={600} sx={{ color: '#2D5461' }}>
            Sebastian Tostado
          </Typography>
          <Typography variant="subtitle1" sx={{ color: '#B9B8C6', display:'inline-flex', alignItems:"center"}}>
            I'm a <AnimatedTextCharacter text={wordsConst[index]} />
          </Typography>
        </div>
      </Content>
    </Container>
  )
}
