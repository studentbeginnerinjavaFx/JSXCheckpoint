import './style.css';
import img1 from './image/imageInSrc.jpg';
function App() {
  return (
    <div>
        <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
          <h1 className="title red">Your name here</h1>    
          <img src={img1} alt="imageInSrc" /> 
          <img src="./image/imageInPublic.jpg" alt="imageInPublic" />
        </div>
        <video width={320} height={240} controls>
          <source src="myVideo.mp4" type="video/mp4" />
        </video>
      </div>
  );
}

export default App;
