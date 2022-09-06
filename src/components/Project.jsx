import {styles} from "../styles/project"
import thumbnail from "../assets/handpose-photo.png"

export default function Project() {
    return (
        <div style={styles.Project} className="page">
            <div style={styles.title}>
                <p><span className="highlight--green">Hand Pose</span> Collector</p>
            </div>
            <div style={styles.details}>
                <img src={thumbnail} alt="" style={styles.thumbnail} />
                <div style={styles.description}>
                    <p>I was working on a sign language classifier, but I didn't have enough data, so I created this to aid with data collection. <br /> <br /> It uses the tensorflow.js <a href="https://github.com/tensorflow/tfjs-models/tree/master/hand-pose-detection" target="_blank">hand pose detection model</a> to detect the key points in your hand, which you can then use as training data for different machine learning tasks. You can take pictues, label your poses, and download the training data.</p> 
                    <p>Click <a href="https://ongyiumark.github.io/handpose-trainer" target="_blank">here</a> to view project.</p>
                </div>
            </div>
        </div>
    )
}