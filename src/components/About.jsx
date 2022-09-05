import {styles} from "../styles/about"

export default function About() {
    return (
        <div style={styles.About}>
            <div style={styles.container}>
                <div style={styles.title}>
                    <p style={styles.name}><span className="highlight--green">Mark Kevin</span> A.</p>
                    <p style={styles.name}>Ong Yiu</p>
                </div>
                
                <div style={styles.subtitle}>
                    <p>I'm a 4th year undergraduate student at Ateneo de Manila University, majoring in Applied Mathematics - Data Science, minoring in Enterprise Systems. I'm a competitive programmer, and I love math and machine learning.</p>

                    <p>Below, you'll find some of the projects I've worked on. Hopefully, you'll find some of them interesting!</p>
                </div>
            </div>
        </div>
    )
}