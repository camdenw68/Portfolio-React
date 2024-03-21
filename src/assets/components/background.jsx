import './background.css';
import img from './imgs/me.jpeg'

function Background() {
    return (
        <><div className="content">
            <><div className="header">Hi! Im Camden Wierengo, A Full<span className='developer'>Stack Developer!</span></div></>
            <><p className='description'> I am a recent bootcamp grad, I have experience with MongoDB, Express, React, and Node.js
               </p></>
        </div><div className="box">
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <div>
                <img className= "image"src={img}></img>
                </div>
            </div></>
    );
}

export default Background;



