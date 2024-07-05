import React from 'react';
import '../index.css';
import { Wrapper, TitleSmall, StrongText, Paragraph } from '../Style';
import { Button } from 'react95';

const ExperienceItem = ({ title, company, location, period, description, showButton, buttonText, onButtonClick }) => {
  return (
    <div className="experience-item">
      <h2 className="experience-title">{title}</h2>
      <h3 className="experience-company">{company}</h3>
      <p className="experience-location">{location}</p>
      <p className="experience-period">{period}</p>
      <p className="experience-description">{description}</p>
      {showButton && (
        <Button onClick={onButtonClick}>{buttonText}</Button>
      )}
    </div>
  );
};


const Experience = () => {
  return (     
    <Wrapper>

      <TitleSmall>
      <span role='img' aria-label='SPARKLE'>
      ✨
            </span>
        Experience
        <span role='img' aria-label='SPARKLE'>
        ✨
            </span>
        </TitleSmall>
 
          <ExperienceItem
            title="UX UI Designer"
            company="HopSkipDrive"
            location="Los Angeles, CA"
            period="Sep 2021 - Present"
            description="I am the founding designer in an Agile startup starting at 60 employees. I developed an understanding of buisness use cases and how our products function together by working on all our digital products. I collaborate closely with product managers, internal clients, and engineering teams to conduct end-to-end user research, design, and technical planning to support old and new features of mobile applications, web applications, and internal tools."
          />
          <ExperienceItem
            title="Faculty Lecturer"
            company="California State University-Dominguez Hills"
            location="Los Angeles, CA"
            period="Jan 2022 - Present"
            description="Built a curriculum and taught an upper-division university course on UX design, including topics such as: developing user research plans, recruitement, planning, conducting user interview sessions, observational studies, synthesizing results, making informed design recommendations, product design processes, and UI design methods using Figma for 60+ students."
          />
          <ExperienceItem
            title="Jr Project Coordinator"
            company="Diagram, LLC"
            location="New York, NY"
            period="Jun 2021 - Oct 2021"
            description="Coordinated user research projects for a large healthcare company. Collaborated with the project owner, researcher, and external vendor on improving key moments in the user journey."
          />

          <ExperienceItem
            title="Web Designer and Developer"
            company="Santa Monica College - the IxD Program"
            location="New York, NY"
            period="Oct 2020 - Mar 2021"
            description="Web Design and Development: designed and developed web pages using HTML, CSS, and Javascript for SMC IxD program's website ixd.smc.edu including the annual report for 2021."
          />
            


          <ExperienceItem
            title="Graphic Designer"
            company="ESMoA"
            location="El Segundo, CA"
            period="Jun 2019 - Oct 2021"
            description="Created marketing material for museum events, exhibitions, and educational programs that align with the museum's strategic initiatives."
          />

    </Wrapper>
  );
};

export default Experience;