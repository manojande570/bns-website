'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import styles from '@/styles/CareersPage.module.css';

export default function CareersPage() {
    const [selectedJob, setSelectedJob] = useState<number | null>(null);

    const jobs = [
        {
            title: 'Software Developer (.NET)',
            salary: '$149,781.00/year',
            positions: 5,
            location: '4461 ALMA ROAD, SUITE #100, MCKINNEY, TX 75070',
            description: 'Develop, create and modify general computer applications software or specialized utility programs using C#, .NET and related frameworks using those programming languages. Utilize SQL server or Oracle server database servers along with front-end programming languages based on C# and .NET frameworks. Analyze user needs and develop software solutions. Design software or customize software for client use with the aim of optimizing operational efficiency. Work under supervision. Travel and/or relocation to unanticipated client sites throughout USA is required.',
            education: "Master's degree in Computer Science/Information Technology/ Business/ Math/ Science/ Engineering (Any) or closely related field with Six (6) months of experience in the job offered or as an IT Consultant or Analyst or Programmer or Developer or very closely related area. Employer also accepts Bachelor's degree in Computer Science/Information Technology/Business/ Math/ Science/ Engineering (Any) or closely related field plus five years of progressive work experience in related field.",
            experience: '6 (Six) Months of Experience Using Programming with C# and .Net is required. Travel and/or relocation is required to unanticipated client sites within USA. International travel is not required. The frequency and nature of travel is currently not known as it depends on the client and project requirement that cannot be currently anticipated. Employer provides Information technology services to various clients in USA and hence implementing projects will require such travel and/or relocation based on client requirement.'
        },
        {
            title: 'Software Developer (JAVA)',
            salary: '$149,781.00/year',
            positions: 5,
            location: '4461 ALMA ROAD, SUITE #100, MCKINNEY, TX 75070',
            description: 'Develop, create and modify general computer applications software or specialized utility programs using Java and related frameworks using those programming languages. Utilize advanced technologies such as HTML5, AngularJS, JavaScript, JSON, jQuery and similar technologies to develop and build Java based software applications. Analyze user needs and develop software solutions. Design software or customize software for client use with the aim of optimizing operational efficiency. Work under supervision. Travel and/or relocation to various unanticipated client sites throughout USA is required.',
            education: "Master's degree in Computer Science/Information Technology/ Business /Science /Engineering(Any) or closely related field with Six (6) months of experience in the job offered or as an IT Consultant or Analyst or Programmer or Developer or very closely related area. Employer also accepts Bachelor's degree in Computer Science/Information Technology/Business /Science /Engineering (Any) or closely related field plus five years of progressive work experience in related field.",
            experience: 'Experience Should include at least Six (6) Months Working on Java. Travel and/or relocation is required to unanticipated client sites within USA. International travel is not required. The frequency of travel is currently not known as it depends on the client and project requirement that cannot be currently anticipated. Employer provides Information technology services to various clients in USA and hence implementing projects will require such travel.'
        },
        {
            title: 'AEM Developer',
            salary: '$149,781.00/year',
            positions: 3,
            location: '4461 ALMA ROAD, SUITE #100, MCKINNEY, TX 75070',
            description: 'Develop, Create and Modify computer applications, Develop Software Solutions, design and customize software applications, analyze and design databases for use for applications. Develop code using Java, AEM, Java Script, JSON. Work under supervision. Travel and/or relocation to unanticipated client sites throughout USA is required.',
            education: "Master's degree in Computer Science/ IT/ Engineering(Any)/ Business/ Science or closely related field with Six (6) months of experience in the job offered or as an IT Consultant or Analyst or Programmer or Developer or Software Engineer closely related area. Employer also accepts Bachelor's degree in Computer Science/ IT/ Engineering(Any)/ Business/ Science or closely related field plus five years of progressive work experience in related field.",
            experience: 'Experience of Six (6) Months with AEM is required. Travel and/or relocation is required to unanticipated client sites within USA. International travel is not required. The frequency of travel is currently not known exactly but it could reach as high as 100% as it depends on the client and project requirement that cannot be currently anticipated. Employer provides Information technology services to various clients in USA and hence implementing projects will require such travel which could be as high as 100%.'
        },
        {
            title: 'DevOps Engineer',
            salary: '$149,781.00/year',
            positions: 5,
            location: '4461 ALMA ROAD, SUITE #100, MCKINNEY, TX 75070',
            description: 'Design, Develop, Implement and Support Continuous Integration/Continuous Delivery application build and deployment pipelines with GIT, Jenkins, BitBucket and SVN. Design and Develop the test automation to validate the builds in the CI/CD pipeline. Designing, building and, managing large scale infrastructure in AWS and Azure, including, leveraging one or more coding languages for deploying infrastructure as code to improve the availability, scalability, and efficiency of platforms. Troubleshoot configuration issues, applying patches, kernel upgrades, package management, diagnosing resource utilization and file system issues and work with configuration management tools such as Ansible, Chef and Puppet. Work under supervision. Travel and/or relocation to unanticipated client sites is required.',
            education: "Master's degree in Computer Science/Information Technology/ Business/ Math/ Science/ Engineering (Any) or closely related field with Six (6) months of experience in the job offered or as an IT Consultant or Analyst or Programmer or Developer or very closely related area. Employer also accepts Bachelor's degree in Computer Science/ Information Technology/ Business/ Math/ Science/ Engineering (Any) or closely related field plus five years of progressive work experience in related field.",
            experience: 'Experience Should include 6(Six) Months of Working with Devops Tools. Travel and/or relocation is required to unanticipated client sites within USA. International travel is not required. The frequency of travel is currently not known exactly but it could reach as high as 100% as it depends on the client and project requirement that cannot be currently anticipated. Employer provides Information technology services to various clients in USA and hence implementing projects will require such travel which could be as high as 100%.'
        },
        {
            title: 'QA Analyst',
            salary: '$126,131.00/year',
            positions: 3,
            location: '4461 ALMA ROAD, SUITE #100, MCKINNEY, TX 75070',
            description: 'Analyze and define system problems. Define testing standards and solutions by evaluating procedures and processes. Utilize advance Test Cases, create Test Plan, Test Scenarios based on Business Requirements. Analyze user requirements, procedures and test Stand- Alone, Client-Server, Web-based and Web Service (SOA) Applications. Test, Maintain and Monitor Computer programs and Computer Systems, Document testing procedures and testing standards and help improve computer systems. Work under supervision. Travel and/or relocation to unanticipated client sites throughout USA is required.',
            education: "Master's degree in Computer Science/Information Technology/ Business /Science/Engineering(Any) or closely related field with Six (6) months of experience in the job offered or as an IT Consultant or Analyst or Programmer or Developer or very closely related area. Employer also accepts Bachelor's degree in Computer Science/Information Technology/Business /Science/Engineering (Any) or closely related field plus five years of progressive work experience in related field.",
            experience: 'Experience Should include 6 (Six) Months of Working with Software Quality Testing. Travel and/or relocation is required to unanticipated client sites within USA. International travel is not required. The frequency of travel is currently not known as it depends on the client and project requirement that cannot be currently anticipated. Employer provides Information technology services to various clients in USA and hence implementing projects will require such travel.'
        },
        {
            title: 'Software Developer',
            salary: '$149,781.00/year',
            positions: 5,
            location: '4461 ALMA ROAD, SUITE #100, MCKINNEY, TX 75070',
            description: 'Design, develop, and operate web applications focusing on user experience, security and scalability. Applying modern software development practices and best practices for the full software development life cycle, including coding standards, code reviews, source control management, build processes, testing, and support operations. Design, create, implement, modify software applications and utility programs using programming languages and tools such as Java, Spring Boot, SQL etc. Design and develop web applications using HTML, CSS, Javascript etc. Perform bug fixes, diagnose problems, and to ensure that all functionalities are working as expected and requirements are met. Participate in a tight-knit engineering team employing agile software development practices. Work under supervision. Travel and/or relocation to various unanticipated client sites throughout USA is required.',
            education: "Master's degree in Computer Science/ Information Technology/ Engineering (Any) or closely related field.",
            experience: 'Travel and/or relocation to unanticipated client sites throughout USA is required.'
        },
        {
            title: 'Java Developer',
            salary: '$127,878.00/year',
            positions: 5,
            location: '4461 ALMA ROAD, SUITE #100, MCKINNEY, TX 75070',
            description: 'Work with other engineers, architects, managers, and Product Management, Quality Assurance, and Operations teams to design and develop innovative processes and create software solutions that meet business requirements using Java. Implement AWS functions to run scripts in response to events in Amazon Dynamo DB table, S3 buckets, HTTP requests using Amazon API Gateway. Lambda. Design, develop and deploy complex, multi-tier distributed software applications; document and test systems, and modify them as appropriate. Build and implement robust testing scripts/systems to break and eventually fix APIs. Participate in release management and on-call duties, review recommendations for project or production issues, and diagnostics. Work under supervision. Travel and/or relocation to unanticipated client sites throughout USA is required.',
            education: "Bachelor's degree in Computer Science/ Information Technology/ Information Systems/ Engineering (Any) or closely related field with Twelve (12) months of experience in the job offered or as an IT Consultant or Analyst or Programmer or Developer or very closely related area.",
            experience: 'Experience of Twelve (12) months working with JAVA is required. Travel and/or relocation is required to unanticipated client sites within USA. International travel is not required. The frequency and nature of travel is currently not known as it depends on the client and project requirement that cannot be currently anticipated. Employer provides Information technology services to various clients in USA and hence implementing projects will require such travel and/or relocation based on client requirement.'
        },
        {
            title: 'Automation Engineer',
            salary: '$125,590.00/year',
            positions: 1,
            location: '4461 ALMA ROAD, SUITE #100, MCKINNEY, TX 75070',
            description: 'Assess and identify the need for changes in process automated systems and equipment. Assist with the development of system requirements and specifications to ensure requirements are testable and meet 21 Code Federal Regulations (CFR) Part 11 compliance. Assist in developing and executing CSV plans, test protocols, traceability matrices, release reports, and documents and deliverables within the scope of Automation Change Management. Develop collaborative partnerships with multiple site functions, including Manufacturing, Technical Operations, Engineering, and Quality to deliver site goals and objectives. Author, review and approve the SOP\'s (Standard Operating Procedure) design specification documents and ensure changes comply with regulatory compliance (FDA 21 CFR Part 11) in document management system. Perform internal testing of software and hardware changes to ensure test results are per project scope using Rockwell Automation Factory Talk Software Technologies. Work under supervision. Travel and/or relocation to unanticipated client sites throughout USA is required.',
            education: "Master's degree in Mechanical Engineering/Industrial Engineering or closely related field with Six (6) months of experience in the job offered or as a Production Engineer or QA Engineer or Engineer or related field.",
            experience: 'Experience of Six (6) Months working as a Production Engineer or QA Engineer or Engineer or related field is required. Travel And/or Relocation to unanticipated client sites throughout USA is required.'
        }
    ];

    return (
        <>
            <Navbar />
            <div className={styles.pageWrapper}>
                <div className={styles.careersPage}>
                    <div className={styles.content}>
                        <div className={styles.header}>
                            <p className={styles.subtitle}>Join Our Team</p>
                            <h1 className={styles.title}>Careers</h1>
                            <p className={styles.intro}>
                                Explore exciting career opportunities at BNS International Inc. We're looking for talented individuals to join our growing team.
                            </p>
                        </div>

                        <div className={styles.jobsContainer}>
                            <div className={styles.jobsList}>
                                {jobs.map((job, index) => (
                                    <div
                                        key={index}
                                        className={`${styles.jobCard} ${selectedJob === index ? styles.active : ''}`}
                                        onClick={() => setSelectedJob(index)}
                                    >
                                        <h3>{job.title}</h3>
                                        <div className={styles.jobMeta}>
                                            <span className={styles.salary}>{job.salary}</span>
                                            <span className={styles.positions}>{job.positions} Position{job.positions > 1 ? 's' : ''}</span>
                                        </div>
                                        <div className={styles.arrow}>→</div>
                                    </div>
                                ))}
                            </div>

                            <div className={styles.jobDetails}>
                                {selectedJob !== null ? (
                                    <div className={styles.detailsContent}>
                                        <h2>{jobs[selectedJob].title}</h2>
                                        <div className={styles.detailsMeta}>
                                            <div className={styles.metaItem}>
                                                <strong>Salary:</strong> {jobs[selectedJob].salary}
                                            </div>
                                            <div className={styles.metaItem}>
                                                <strong>Positions:</strong> {jobs[selectedJob].positions}
                                            </div>
                                            <div className={styles.metaItem}>
                                                <strong>Duration:</strong> Fulltime job, 40 hours per week
                                            </div>
                                            <div className={styles.metaItem}>
                                                <strong>Posting Date:</strong> 06/17/2025
                                            </div>
                                        </div>

                                        <div className={styles.section}>
                                            <h3>Location</h3>
                                            <p>BNS INTERNATIONAL INC<br />{jobs[selectedJob].location}</p>
                                        </div>

                                        <div className={styles.section}>
                                            <h3>Job Description</h3>
                                            <p>{jobs[selectedJob].description}</p>
                                        </div>

                                        <div className={styles.section}>
                                            <h3>Education Required</h3>
                                            <p>{jobs[selectedJob].education}</p>
                                        </div>

                                        <div className={styles.section}>
                                            <h3>Experience Required</h3>
                                            <p>{jobs[selectedJob].experience}</p>
                                        </div>

                                        <div className={styles.applySection}>
                                            <a href="mailto:contact@bnsinc.us">
                                                <button className={styles.applyButton}>Apply Now</button>
                                            </a>
                                        </div>
                                    </div>
                                ) : (
                                    <div className={styles.placeholder}>
                                        <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
                                            <circle cx="100" cy="100" r="80" fill="url(#placeholderGrad)" opacity="0.2" />
                                            <path d="M100 60 L120 80 L100 100 L80 80 Z M100 100 L120 120 L100 140 L80 120 Z" fill="url(#placeholderGrad)" />
                                            <defs>
                                                <linearGradient id="placeholderGrad" x1="0" y1="0" x2="200" y2="200">
                                                    <stop offset="0%" stopColor="#667eea" />
                                                    <stop offset="100%" stopColor="#764ba2" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                        <h3>Select a job to view details</h3>
                                        <p>Click on any job listing to see the full description and requirements</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
