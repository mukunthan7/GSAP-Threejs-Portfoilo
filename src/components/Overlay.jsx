import { Scroll } from "@react-three/drei"
import gsap from "gsap"
import "./Overlay.css"
import CV from "../assets/CV.pdf"
import { FaGithub, FaDownload, FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa"

export const ScrollPages = ({ children }) => {
    return (
        <div className="page">
            {children}
        </div>
    )
}

export const Overlay = () => {

    window.addEventListener("mousemove", (e) => {
        const x = e.clientX
        const y = e.clientY
        gsap.to(".overlay", { x: (x - window.innerWidth / 2) / 20, y: (y - window.innerHeight / 2) / 20, duration: 1 })
    })

    return (
        <Scroll html>
            <ScrollPages>
                <div className="overlay">
                    <div>
                        <h1 className="hello_me">Hello, I'm an web developer based in India!</h1>
                    </div>
                    <div className="Profile_container">
                        <div className="profile_dev">
                            <h2 className="profile_Name">M.Mukunthan</h2>
                            <span>Web Designer(UI/UX Designer / Developer)</span>
                        </div>
                        <img className="profile" src="https://mk3jswebdeveloper.web.app/static/media/Profile.28a9676806b2dfe87c7f.jpg" alt="profile" />
                    </div>
                </div>
            </ScrollPages>
            <ScrollPages>
                <div className="overlay">
                    <div className="About_container">
                        <h2 className="About_Name">About Me</h2>
                        <p className="About_me">A passionate Full Stack Web Developer and Cyber Security having an experience of building Web applications with JavaScript / Reactjs / Nodejs / MySQL / Docker / Linux / Git and some other technologies.</p>
                    </div>
                    <div className="Button_container">
                        <a href={CV} className="Button"><FaDownload /><span>Download CV</span></a>
                        <a href="https://github.com/mukunthan7" className="Button"><FaGithub /><span>Github</span></a>
                    </div>
                </div>
            </ScrollPages>
            <ScrollPages>
                <div className="overlay">
                    <div className="Skills_container">
                        <h2 className="Skills_Name">Skills</h2>
                        <div className="Skills">
                            <div className="Skill">
                                <h3>Frontend</h3>
                                <ul>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>JavaScript</li>
                                    <li>Reactjs</li>
                                    <li>Redux</li>
                                    <li>Bootstrap</li>
                                    <li>TailwindCSS</li>
                                    <li>GSAP</li>
                                    <li>Three JS</li>
                                    <li>Next JS</li>
                                    <li>SASS</li>
                                </ul>
                            </div>
                            <div className="Skill">
                                <h3>Backend</h3>
                                <ul>
                                    <li>Nodejs</li>
                                    <li>Expressjs</li>
                                    <li>MySQL</li>
                                    <li>MongoDB</li>
                                    <li>PostgreSQL</li>
                                    <li>Firebase</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollPages>
            <ScrollPages>
                <div className="overlay">
                    <div className="Social_container">
                        <h2 className="Social_Name">Social Media</h2>
                        <div className="Social">
                            <div className="Socials">
                                <div>
                                    <ul>
                                        <li><a href="https://www.instagram.com/mr_ravanan__official/"><FaInstagram className="icons" /><span>Instagram</span></a></li>
                                    </ul>
                                </div>
                                <div>
                                    <ul>
                                        <li><a href="https://twitter.com/MUKUNTHANM13"><FaTwitter className="icons" /><span>Twitter</span></a></li>
                                    </ul>
                                </div>
                                <div>
                                    <ul>
                                        <li><a href="https://www.linkedin.com/in/mukunthan7/"><FaLinkedin className="icons" /><span>LinkedIn</span></a></li>
                                    </ul>
                                </div>
                                <div>
                                    <ul>
                                        <li><a href="https://www.github.com/mukunthan7"><FaGithub className="icons" /><span>Github</span></a></li>
                                    </ul>
                                </div>
                                <div>
                                    <ul>
                                        <li><a href="facebook.com/mukunthanvisvakarma"><FaFacebook className="icons" /><span>Facebook</span>
                                        </a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollPages>
        </Scroll>
    )
}