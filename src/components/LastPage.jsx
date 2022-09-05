import {styles} from "../styles/lastpage"

export default function LastPage() {
    return (
        <div style={styles.LastPage}>
            <p style={styles.title}><span className="highlight--green">You've reached</span> the end.</p>
            <p style={styles.subtitle}>You can find the rest of my (undocumented) projects in my <a href="https://github.com/ongyiumark" target="_blank">github</a>.</p>
        </div>
    )
}