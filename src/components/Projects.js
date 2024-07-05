
import React from 'react';
import styled from 'styled-components';
import { Table, TableDataCell, TableHead, TableRow, TableHeadCell, TableBody, Button } from 'react95';
import { Wrapper, TitleSmall, StrongText} from '../Style';

const Projects = () => {

    return (
      <Wrapper>
        <TitleSmall>
            <span role='img' aria-label='LEAF'>
            🌿
            </span>
            Projects
            <span role='img' aria-label='LEAF'>
            🌿
            </span>
            </TitleSmall>
            <div className="highlighted-info">
                Please reach out over email at dixuux@gmail.com to request case study, or even better, schedule a time to chat about my projects!
                <div>
                <a href='https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0fxXfiF1hscLa3ijPk30lXoHsKh_-DUD6MdHrtlDaO_42NqIyEm87rsYz2sPijwn7e4pYwLFkJ' target='_blank'><Button>Let's Chat!</Button></a>
                </div>



            </div>

        <div>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableHeadCell>Projects</TableHeadCell>
                        <TableHeadCell>Role</TableHeadCell>
                        <TableHeadCell>Outcome</TableHeadCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableDataCell style={{ textAlign: 'left'}}>
                        <Wrapper>
                            <StrongText>Design System for B2C and B2B Products</StrongText> <br />

                            Proposed, gained alignement on, and led the implementation of a design system at HopSkipDrive across digital products, including apps for drivers, consumers, and school districts - A two sided marketplace providing safe transportation for kids to school.
                            
                            </Wrapper>

                        </TableDataCell>
                        <TableDataCell>Leadership, UI Design</TableDataCell>
                        <TableDataCell>
                          • 📈 developer designer relationship<br />
                          • 📈 design efficiency
                        </TableDataCell>
                    </TableRow>
                    
                    <TableRow>
                        <TableDataCell style={{ textAlign: 'Left'}}>
                            <Wrapper>
                            <StrongText>Driver Experience Mobile App Redesign</StrongText> <br />

                            Redesigned the in-ride experience- from pickup to dropoff - for the Driver App <br />

                            <a href="https://www.hopskipdrive.com/blog/enhancing-the-in-ride-experience-with-safety-timeliness-and-clarity" target="_blank" rel="noopener noreferrer">
                                <Button> See Official Blog Post</Button>
                            </a>

                            </Wrapper>

                        </TableDataCell>
                        <TableDataCell>User Research, UX UI Designer, </TableDataCell>
                        <TableDataCell>                          
                        • 📈 Driver process adherence<br />
                        • 📈 Ride data accuracy<br />
                        • 📉 Incident rate per ride</TableDataCell>
                    </TableRow>

                    <TableRow>
                        <TableDataCell style={{ textAlign: 'Left'}}>
                           
                            <Wrapper>
                            <StrongText>Internal React Application Redesign for Support Staff</StrongText> <br />

                            Redesigned the legacy internal application for the support to check on the status of rides and resolve issues. Transitioning from semanticUI to a modern design system based on React components. 
                            
                            </Wrapper>
                        </TableDataCell>
                        <TableDataCell>User Research, UX UI Design, Stakeholder Alignment </TableDataCell>
                        <TableDataCell>                          
                        • 📈 Internal staff efficiency and satisfaction <br />
                        • 📈 Safty Metrics</TableDataCell>
                    </TableRow>

                </TableBody>
            </Table>
        </div>
    </Wrapper> 
    );
};

export default Projects;