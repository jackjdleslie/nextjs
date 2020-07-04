import SocialMedia from "../components/socialmediacomponent";
import NavBar from "../components/navbar";
import React from "react";
import styles from "../components/layout.module.css";
import utilStyles from "../styles/utils.module.css";

export default function Skills({}) {


    return (
        <div>
            <row>
            <NavBar/>

            <h1 className="titlepages">Skills & Interests</h1>


            <div className={"technical"}>
                <col xs/>
                <h2> Techical Skills</h2>
            <div className={"langs"}>
                <h3>Languages & Frameworks</h3>
                <ul>
                    <li>Java</li>
                    <li>Spring Boot</li>
                    <li>TypeScript (Angular)</li>
                    <li>JavaScript</li>
                    <li>Next.js</li>
                    <li>C</li>
                    <li>Python</li>
                    <li>SQL</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JDBC</li>
                    <li>Java RMI</li>
                    <li>Promela</li>
                    <li>JUnit</li>
                </ul>
            </div>

            <div className={"applications"}>
                <h3>Applications, IDEs & Version Control</h3>
                <ul>
                   <li>Android Studio</li>
                    <li>WebStorm</li>
                    <li>IntelliJ</li>
                    <li>Visual Studio Code</li>
                    <li>Atom</li>
                    <li>JIRA</li>
                    <li>Trello</li>
                    <li>Tableau</li>
                    <li>BitBucket</li>
                    <li>Git & GitHub</li>

                </ul>
            </div>
            <div className={"concepts"}>
                <h3>Concepts</h3>
                <ul>
                    <li>SCRUM & Agile Development</li>
                <li>Socket Programming & Networks</li>
                    <li>Distributed Systems & Fault Tolerance via Replication</li>
                    <li>Object Oriented Programming</li>
                    <li>Writing APIs (in Spring Boot) </li>
                    <li>Android App Development (in Android Studio)</li>
                    <li>Building and Querying Relational Databases</li>
                    <li>Data Ethics & Privacy</li>
                    <li>Computational Complexity</li>
                    <li>Logic & System Verification</li>
                    <li>Information Visualisation</li>
                    <li>Unit Testing</li>
                </ul>
            </div>
            <div className={"interpersonal"}>
                <h3>Interpersonal Skills</h3>
                <ul>
                    <li>Group Work</li>
                    <li>Pair & Mob Programming</li>
                    <li>Mentorship</li>
                    <li>Leadership</li>
                    <li>Communication & Teaching</li>
                    <li>Team Working Through Agile Methodologies</li>


                </ul>
            </div>

            <div className={"interpersonal"}>
                <h3>Past Projects</h3>
                <ul>
                    <li>This web app :) - Next.js</li>
                    <li>Medication Checker Application for Multimorbidities - Angular</li>
                    <li>Implementation of Turing Machine - Java </li>
                    <li>Employee Mental Health tracking web application (Hackathon) - ReactJS (Frontend)</li>
                    <li>Othello game with GUI & AI - Java</li>
                    <li>Distributed Centralised Algorithm - Java RMI</li>
                    <li>Visualisation of the Deaths & Imprionments of Journalists - Tableau</li>
                    <li>Client/Server Tron Game - Java</li>
                    <li>Big Data Comet Analysis & Visualisation - Python</li>



                </ul>
            </div>
            </div>

            <div className={"hobbies"}>
                <col xs/>
                <h2>Hobbies & Interests</h2>
                <h4> Embroidery </h4>
                <img
                    src="/images/106386407_702206317012367_3158336333883841338_n.jpg"
                    className={"hobbiesImages"}

                />
                <img
                    src="/images/105679472_207586480457175_1864023214332094401_n.jpg"
                    className={"hobbiesImages"}

                />
                <h4> Etsy </h4>
                <img
                    src="/images/106463460_283196949553244_1679927028168933178_n.jpg"
                    className={"hobbiesImages"}

                />
                <h4> Being an absolute music connoisseur ;)</h4>
                <p align="center"> Listen to some of my favs here </p>
                <p align="center"><iframe src="https://open.spotify.com/embed/playlist/5oQtU59CB1irSYMQnIHYlx" width="50%" max-width="300" height="380"
                                          frameBorder="0" allowTransparency="true" allow="encrypted-media"></iframe></p>
            </div>

            <SocialMedia/>
            </row>
        </div>



    )
}
