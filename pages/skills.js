import SocialMedia from "../components/socialmediacomponent";
import NavBar from "../components/navbar";
import React from "react";

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
                    <li>*</li>



                </ul>
            </div>
            </div>

            <div className={"hobbies"}>
                <col xs/>
                <h2>Hobbies & Interests</h2>
            </div>

            <SocialMedia/>
            </row>
        </div>




    )
}
