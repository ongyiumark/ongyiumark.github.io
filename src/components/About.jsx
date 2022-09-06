import {styles} from "../styles/about"
import profilePic from "../assets/ongyiumark-fb.jpg"

export default function About() {
    return (
        <div style={styles.About} className="page">
            <div style={styles.aboutContainer}>
                <div style={styles.profile}>
                    <img src={profilePic} alt="Mark Kevin A. Ong Yiu" style={styles.profileImg} />
                    <div style={styles.title}>
                        <p style={styles.profileName}><span className="highlight--green">Mark Kevin</span> A.</p>
                        <p style={styles.profileName}>Ong Yiu</p>
                    </div>
                </div>
                
                <div style={styles.subtitle}>
                    <p>I'm a 4th year undergraduate student at Ateneo de Manila University, majoring in Applied Mathematics - Data Science, minoring in Enterprise Systems. I'm a competitive programmer, and I love math and machine learning.</p>

                    <p>Below, you'll find some of the projects I've worked on. Hopefully, you'll find them interesting!</p>
                </div>
            </div>
        </div>
    )
}