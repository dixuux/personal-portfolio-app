import React from 'react';
import styled from 'styled-components';
import { Avatar } from 'react95';
import { Wrapper, Title, StrongText, Paragraph } from '../Style';
import profilePic from '../assets/ProfilePic.png'; 


const PersonalInfo = () => {
  return (
    <Wrapper>
      <Title>Di Xu</Title>
      <div style={{ display: 'inline-flex' }}>
      <Avatar noBorder={false} size={50} src={profilePic} alt="Profile" />
    
     </div> 

      <div>
        <Paragraph>
          <StrongText>Product Design / User Research / UX UI Design</StrongText>
        </Paragraph>
      </div>
      <div>
        <Paragraph>
          <StrongText>Email: dixuux@gmail.com </StrongText>
        </Paragraph>
      </div>
      <div>
        <Paragraph>
          As a seasoned UX UI Designer/Researcher with background in healthcare, education, and transportation, I am passionate about creating user-centric designs that enhance the user experience and drive product success in utilitarian products that improve the quality of life for tens of thousands of people who use my designs in their daily lives. My expertise lies in developing compelling UI designs, conducting thorough UX research, and collaborating effectively with cross-functional teams to deliver exceptional B2C and B2B applications. I am a strong advocate for user-centered design principles and have a proven track record of delivering high-quality designs that meet the needs of the business, the stakeholders, and end-users.
        </Paragraph>
      </div>


    </Wrapper>
  );
};

export default PersonalInfo;
