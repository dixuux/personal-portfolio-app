import React from 'react';
import { Wrapper, TitleSmall, StrongText, Paragraph } from '../Style';

const Education = () => {
    return (
      <Wrapper>
        <TitleSmall>
        <span role='img' aria-label='LEAF'>
        📚
        </span>
        Education
        <span role='img' aria-label='LEAF'>
        📚
        </span>
        </TitleSmall>
          <StrongText>Santa Monica College</StrongText> 
          <Paragraph>Bachelor of Science (B.S.) Interaction Design, Magna Cum Laude
          2019 - 2021</Paragraph>

          <StrongText>Amsterdam University of Applied Sciences</StrongText> 
          <Paragraph> Bachelor of Science (B.S.) Physiotherapy, Certified Personal Trainer
          2015 - 2019</Paragraph>
      </Wrapper>
    );
  };
  
  export default Education;