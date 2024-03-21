import "./skills.css";
import img from './imgs/newreactpic.png'
import img2 from './imgs/csspic.png'
import img3 from './imgs/htmpic.png'
import img4 from './imgs/javascriptpic.png'
import img5 from './imgs/mongodbpic.png'
import img6 from './imgs/mysqlpic.png'
import img7 from './imgs/nodejspic.png'
function Skills() {
  return (
    <>
      <div className="wave-header">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#00cba9" fillOpacity="1" d="M0,256L26.7,245.3C53.3,235,107,213,160,176C213.3,139,267,85,320,53.3C373.3,21,427,11,480,48C533.3,85,587,171,640,218.7C693.3,267,747,277,800,250.7C853.3,224,907,160,960,144C1013.3,128,1067,160,1120,197.3C1173.3,235,1227,277,1280,256C1333.3,235,1387,149,1413,106.7L1440,64L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path>
        </svg>
      </div>
      <div className="wave-footer">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#00cba9" fillOpacity="1" d="M0,256L34.3,213.3C68.6,171,137,85,206,69.3C274.3,53,343,107,411,144C480,181,549,203,617,186.7C685.7,171,754,117,823,122.7C891.4,128,960,192,1029,218.7C1097.1,245,1166,235,1234,197.3C1302.9,160,1371,96,1406,64L1440,32L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path>
        </svg>
        <div className="header2">
          <h1>My Skills:</h1>
        </div>
      </div>
      <div className="picscontainer">
        <p className="tag">o</p>
      <div className="picss">
        <img className= "pictures"src={img} ></img>
      </div>
      <div className="pics2">
        <img className= "pictures"src={img2}></img>
      </div>
      <div className="pics3">
        <img className= "pictures"src={img3} ></img>
      </div>
      <div className="pics4">
        <img className= "pictures"src={img4} ></img>
      </div>
      <div className="pics5">
      <img className= "pictures"src={img5} ></img>
      </div>
      <div className="pics6">
        <img className= "pictures"src={img6}></img>
      </div>
      <div className="pics7">
        <img className= "pictures"src={img7}></img>
      </div>
      </div>
    </>
  );
}

export default Skills;
