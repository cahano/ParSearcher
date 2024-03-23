//
// ParSearch Team page
//

import './static/teamPage-styles.css';
import Footer from './../../components/footer'
import NavBar from './../../components/header'
import { Parts } from './../../components/particles'


const TeamPage: React.FC = () => {

    return (

        <div>

            <NavBar />

            <div className='about_frame'>

                {/* Landing page of 'Team' */}
                <div className="header_text">
                    <h1 id="top_title">ParSearch</h1>
                    <h1 id="scnd_title">is its people.</h1>
                    <h1 id="top_subtitle">Frustrated by persistent outdated data handing in the advancing age of AI;</h1>
                    <h1 id="scnd_subtitle">Devoted to creating modernization, business-by-business.</h1>
                </div>

                {/* Each Founders' profile */}
                <div id="profile_sect">

                    <div className='content_card'>

                        <div className="mmb_title">
                            <h1>
                            Owen Cahan <span className='j_title'>Cofounder & CEO | <a href="https://www.linkedin.com/in/owen-cahan/">LinkedIn</a>
                                        </span>
                            </h1>
                        </div>

                        <div className='mmb_header'>

                            <div className='mmb_pic'>
                            <img src="../occ_hs.jpg" alt='occ_hs' className='mmb_pic'/>
                            </div>
                            <div className='mmb_sum'>

                            <ul>
                                <li><b>Rensselaer Polytechnic Institute</b> <span className='s_date'>(2021)</span></li>
                                <ul>
                                <li>Mathematics</li>
                                <li>Business & Finance</li>
                                </ul>

                                <br />

                                <li><b>J.P. Morgan</b> <span className='s_date'>(2021 - 2024)</span></li>
                                <ul>
                                <li>Investment Banking - CIB CRE Special Situations</li>
                                <li>Quantitative Research - CIB Structured Products Group</li>
                                </ul>
                            </ul>

                            </div>

                        </div>

                        <div className='mmb_body'>
                            <h3>
                            Owen began his career with the Commercial Real Estate (CRE) Special Situations group at
                            J.P. Morgan where he contributed to advisory on highly structured large-size
                            development loans as well as restructuring and turnarounds.
                            Captivated by the widespread oppurtunity for tech-based efficiency gain at an
                            industry-leading institution, Owen moved to JPM's Quantitative Research
                            division to develop full-stack applications for the banking and trading arms of CRE.
                            Looking for a way to more quickly solve larger industry-wide problems, Owen left JPM
                            to launch ParSearch with a trusted team of developers. 
                            </h3>
                            <h3>
                            Away from work, Owen spends time consuming news from all over the world,
                            tinkering with code, playing squash, fly fishing, and finding other things to do
                            outdoors throughout the year.
                            </h3>
                        </div>
                    </div>

                    <div className='content_card'>

                        <div className="mmb_title">
                            <h1>Brandon Huang <span className='j_title'>Cofounder & CSO</span></h1>
                        </div>

                        <div className='mmb_header'>

                            <div className='mmb_pic'>
                                <img src="../bfh_hs.jpg" alt='bfh_hs' className='mmb_pic'/>
                            </div>
                            <div className='mmb_sum'>

                                <ul>
                                    <li><b>Rensselaer Polytechnic Institute</b> <span className='s_date'>(2021)</span></li>
                                    <ul>
                                    <li>Computer Science</li>
                                    </ul>

                                    <br />

                                    <li><b>P.N.C.</b> <span className='s_date'>(2022 - 2024)</span></li>
                                    <ul>
                                    <li>Managing Software Engineering</li>
                                    </ul>
                                </ul>

                            </div>

                        </div>

                        <div className='mmb_body'>
                            <h3>
                            During Brandon’s tenure in software engineering at P.N.C., he developed
                            applications pivotal to enhancing the investment bank's lending technology. 
                            Upon moving into management, Brandon continued to contribute technically, 
                            while leading a team of engineers through a historically complex time in 
                            regional banking. Following this exciting chapter at P.N.C. and inspired by 
                            the potential opportunities he saw in the intersection between technology 
                            and finance, Brandon made the decision to leave the firm 
                            and co-found Caliburn.
                            </h3>
                            <h3>
                            Brandon's interests include home cooking, musical composition and
                            performance, and astronomy.
                            </h3>
                        </div>
                    </div>


                    <div className='content_card'>

                        <div className="mmb_title">
                            <h1>Mo Hayat <span className='j_title'>Cofounder & CTO</span></h1>
                        </div>

                        <div className='mmb_header'>

                            <div className='mmb_pic'>
                            <img src="../mh_hs.jpg" alt='bfh_hs' className='mmb_pic'/>
                            </div>
                            <div className='mmb_sum'>
                                <ul>
                                    <li><b>Rensselaer Polytechnic Institute</b> <span className='s_date'>(2020)</span></li>
                                    <ul>
                                    <li>Computer Engineering</li>
                                    </ul>

                                    <br />

                                    <li><b>Amazon</b> <span className='s_date'>(2022 - 2024)</span></li>
                                    <ul>
                                    <li>Cybersecurity - Software Engineering</li>
                                    </ul>
                                    <li><b>Bank of America</b> <span className='s_date'>(2020 - 2022)</span></li>
                                    <ul>
                                    <li>Software Engineering Associate</li>
                                    </ul>
                                </ul>
                            </div>

                        </div>

                        <div className='mmb_body'>
                            <h3>
                            MORE DETAILED STUFF!!!!!
                            </h3>
                            <h3>
                            FUN STUFF!!!!
                            </h3>
                        </div>

                        <br/>
                        <br/>

                    </div>
            </div>

            {/* Importing navbar */}
            <Footer />

                
            {/* Adding tsparticles background */}
            <div id="parts">
                <Parts />
            </div>

        </div>

    </div>

    );
}


export default TeamPage;

