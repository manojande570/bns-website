'use client';

import Navbar from '@/components/Navbar';
import styles from '@/styles/SolutionsPage.module.css';

export default function SolutionsPage() {
    return (
        <>
            <Navbar />
            <div className={styles.pageWrapper}>
                <div className={styles.solutionsPage}>
                    <div className={styles.content}>
                        <div className={styles.header}>
                            <p className={styles.subtitle}>What We Deliver</p>
                            <h1 className={styles.title}>Our Solutions</h1>
                            <p className={styles.intro}>
                                Globalization, increased competition, uncertain markets and tenuous world politics -- all of it has made the business of doing business less predictable, and more volatile, than ever before.
                            </p>
                        </div>

                        {/* Architecture */}
                        <div className={styles.solutionSection}>
                            <h2>Architecture</h2>
                            <p>
                                BNS International Inc has spent the last few years compiling a list of modern, classic, and bibliographic definitions of software architecture.
                            </p>
                            <p>
                                Modern definitions are definitions from Software Architecture in Practice and from ANSI/IEEE Std 1471-2000, Recommended Practice for Architectural Description of Software-Intensive Systems.
                            </p>
                            <p>
                                Classic definitions lists definitions from some of the more important or influential books and papers on architecture. Bibliographic definitions are taken from papers and articles in our software architecture bibliography.
                            </p>
                            <p className={styles.highlight}>
                                Our software architecture and design process has very specific components. These are in place to enhance the functionality of the software we build for you. And extend its lifetime. The combination of our process-driven economies and design expertise give you more robust solutions.
                            </p>

                            <h3>Our Architecture Design Concepts:</h3>
                            <div className={styles.conceptsGrid}>
                                <div className={styles.conceptCard}>
                                    <h4>High Level Requirements</h4>
                                    <p>
                                        Getting the big picture helps us design in the appropriate details. We identify the core business processes, user community, inputs and outputs, security and all aspects of the required scalability and functionality. This panoramic approach enables BNS Solutions architects to design the appropriate systems—whether we're building a unique platform from the ground up or extending your existing resources systems.
                                    </p>
                                </div>
                                <div className={styles.conceptCard}>
                                    <h4>Industry Research</h4>
                                    <p>
                                        Next we identify relevant industry standards such as data formats, transfer and transmission protocols and tool-sets. We conduct an availability analysis to discover what tools are available to build your application. And check competitive applications for insights that will speed the development process.
                                    </p>
                                </div>
                                <div className={styles.conceptCard}>
                                    <h4>Modular Design</h4>
                                    <p>
                                        We won't re-invent the wheel—unless we have to. We review how similar applications function. This allows us to use existing modules and gain understanding from extant applications—saving the expense of designing new ones.
                                    </p>
                                </div>
                                <div className={styles.conceptCard}>
                                    <h4>Implementation Strategy</h4>
                                    <p>
                                        We can merge software components developed interdependently or from different multi-user environments, and we will repackage software to fit into architectures with different interface requirements. Then we create a system that will meet your needs. Whether we are extending an existing system or building from the ground up.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Vendor Selection */}
                        <div className={styles.solutionSection}>
                            <h2>Vendor Selection</h2>
                            <p>
                                BNS International Inc will work with our client to organize and facilitate the selection and hiring process for potential contract security service providers. The involvement of our security consultants can be as detailed and thorough as the client dictates. As part of the final selection process, all service proposals received will be initially reviewed for potential problems or service issues. At the direction of our client, our security consultants will make recommendations for the client's further review and consent.
                            </p>
                            <p>
                                An integral part of vendor selection is the evaluation of any vendor presentations made during the selection process. Using our contract security management and consulting experience and expertise we will assist the client by pointing out the differences between fact and fiction. Our role is to facilitate selecting the right security vendor as your security services provider.
                            </p>
                            <p className={styles.highlight}>
                                At the option of the client, BNS will provide assistance in negotiating any legal issues, contract pricing and supervise the contract start-up to ensure that all service delivery requirements are in place and functional.
                            </p>
                        </div>

                        {/* Documentation */}
                        <div className={styles.solutionSection}>
                            <h2>Documentation</h2>
                            <p>
                                The stages of our documentation process are planning, designing, writing, reviewing, and editing. We deliver the following types of documentation:
                            </p>
                            <div className={styles.docTypes}>
                                <div className={styles.docType}>
                                    <h4>Instructional and Reference Documentation</h4>
                                    <p>Online or offline help, usage and installation instructions, cheat sheets, manuals, glossaries, and troubleshooting texts</p>
                                </div>
                                <div className={styles.docType}>
                                    <h4>Interface Texts</h4>
                                    <p>Labels, menus, buttons, in-built instructions, and messages</p>
                                </div>
                                <div className={styles.docType}>
                                    <h4>Tutorials and Training Materials</h4>
                                    <p>Guides and tutorials for self study or materials for in-class training complete with instructional texts, tips, exercises, and exams</p>
                                </div>
                                <div className={styles.docType}>
                                    <h4>Demos and Presentations</h4>
                                    <p>Films demonstrating the product interface and usage flow or static presentations with product feature lists and screenshots</p>
                                </div>
                            </div>
                        </div>

                        {/* Application Development */}
                        <div className={styles.solutionSection}>
                            <h2>Application Development</h2>
                            <p>
                                We use state-of-the-art technologies in Applications Development to translate your IT vision into reality and create powerful solutions that are focused on enhancing customer relations, increasing revenue opportunities and the creation of new competitive advantage for you.
                            </p>
                            <h3>Our suite of Application Development Service offerings include:</h3>
                            <div className={styles.serviceList}>
                                <div className={styles.serviceItem}>Product Development</div>
                                <div className={styles.serviceItem}>Customized Development</div>
                                <div className={styles.serviceItem}>New Application Development</div>
                                <div className={styles.serviceItem}>Rapid Application Development</div>
                                <div className={styles.serviceItem}>Testing</div>
                                <div className={styles.serviceItem}>Porting</div>
                                <div className={styles.serviceItem}>Base Technology Enhancement</div>
                                <div className={styles.serviceItem}>Code Perfection</div>
                                <div className={styles.serviceItem}>Product Sustenance</div>
                                <div className={styles.serviceItem}>Product Help Desk or Support</div>
                                <div className={styles.serviceItem}>Rich Internet Application Development</div>
                            </div>
                        </div>

                        {/* Analysis */}
                        <div className={styles.solutionSection}>
                            <h2>Analysis</h2>
                            <p>
                                Our Company Profile is a more thorough study of a company that provides detailed account on the industry in which the company is operating. Apart from the aspects covered in company analysis, we identify business strategies being used by the company to give a competitive insight to the client. Our analysis is based on both primary and secondary research, as well as years of professional industry expertise. In addition to analyzing current and historical trends, our analysts predict where the market is headed over the next 5-10 years.
                            </p>
                            <h3>Our experts give you:</h3>
                            <ul className={styles.expertiseList}>
                                <li>Critical analysis derived from years of experience in the field</li>
                                <li>Research from one-time end users of this market research, they're asking the questions you're asking</li>
                                <li>Quality data of the kind available only to industry insiders</li>
                                <li>Primary research based on interviews with industry insiders</li>
                                <li>Data built from the ground up, not taken from published databases</li>
                                <li>Unique segmentations and data analytics</li>
                                <li>Analysis by experienced, objective analysts</li>
                                <li>A coherent opinion from an independent point of view</li>
                            </ul>
                        </div>

                        {/* ERP Solution */}
                        <div className={styles.solutionSection}>
                            <h2>ERP Solution</h2>
                            <p>
                                Enterprise solutions provide a centralized framework for all data and processes of an organization. It integrates all aspects of a business from planning to inventory control, manufacturing, sales, marketing, finance, customer service and human resources. A significant part of our services portfolio is our customized ERP solutions. At BNS, we provide cost effective enterprise solutions that are developed and customized keeping in mind the individual requirements of clients and their areas of operation. Our process experts will evaluate every detail and thoroughly assess each option that they draw for your organization. Web Based ERP Solution, automates the tasks essentially to perform a business process such as order full-filment, which involves taking an order from a customer, shipping it and billing for it.
                            </p>
                            <h3>Benefits</h3>
                            <p>The enterprise solutions implemented by us offer several advantages to organizations. Some of them include:</p>
                            <div className={styles.benefitsGrid}>
                                <div className={styles.benefit}>Increased operational efficiency</div>
                                <div className={styles.benefit}>Improved customer satisfaction</div>
                                <div className={styles.benefit}>Enables better decision making and forecasting</div>
                                <div className={styles.benefit}>Provides support for business growth</div>
                                <div className={styles.benefit}>Scalable and flexible solutions providing for future changes</div>
                                <div className={styles.benefit}>Better tracking of inventory</div>
                                <div className={styles.benefit}>Provides a centralized framework for all business processes</div>
                            </div>
                        </div>

                        {/* IT Consulting */}
                        <div className={styles.solutionSection}>
                            <h2>IT Consulting</h2>
                            <p>
                                We provide IT consulting services to assist our clients with their continually-changing IT environments. Our goal is to help them to continually improve the effectiveness and efficiency of their IT application environments by adopting and evolving towards re-useable software platforms. We help clients analyze business and/or technology problems and identify and design platform-based solutions. We also assist our clients in planning their IT initiatives and transition plans.
                            </p>
                            <p>
                                During our consulting engagements, we often leverage proprietary frameworks and tools to differentiate our services and to accelerate delivery. Examples of these frameworks and tools include our Strategic Enterprise Information Roadmap framework and our Business Process Visualization tools. We believe that our consulting services are also differentiated in that we are typically able to leverage our global delivery model for our engagements.
                            </p>
                            <p>
                                Our offshore teams work seamlessly with our onsite teams to design and expand the conceptual solution, research alternatives, perform detailed analyses, develop prototypes and proofs-of-concept and produce detailed reports. We believe that this approach reduces cost, allows us to explore more alternatives in the same amount of time and improves the quality of our deliverables.
                            </p>
                            <h3>Our IT Consulting Services:</h3>
                            <div className={styles.consultingServices}>
                                <div className={styles.consultingItem}>Application Portfolio Rationalization</div>
                                <div className={styles.consultingItem}>Service Oriented Architecture</div>
                                <div className={styles.consultingItem}>Business Process Management</div>
                                <div className={styles.consultingItem}>Compliance</div>
                                <div className={styles.consultingItem}>Enterprise Architecture</div>
                                <div className={styles.consultingItem}>Offshore Advisory Services</div>
                                <div className={styles.consultingItem}>Technology Advisory and Adoption Services</div>
                            </div>
                        </div>

                        {/* Call to Action */}
                        <div className={styles.ctaSection}>
                            <h2>Ready to Transform Your Business?</h2>
                            <p>Let us help you implement the right solutions for your organization</p>
                            <a href="/#contact">
                                <button className={styles.ctaButton}>Get In Touch</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
