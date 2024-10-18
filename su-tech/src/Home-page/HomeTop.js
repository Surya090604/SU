import React,{useState} from 'react'
import video1 from '../images/video.mp4'
import './homeTop.css'
export default function HomeTop() {

  const [hoveredIndex, setHoveredIndex] = useState(null);
  

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // This function toggles the sidebar state
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); // Toggling the state
    console.log('Sidebar state:', isSidebarOpen); // Checking if the state changes
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };
  const images = [
    "https://via.placeholder.com/300/FF0000/FFFFFF?text=Image1",
    "https://via.placeholder.com/300/00FF00/FFFFFF?text=Image2",
    "https://via.placeholder.com/300/0000FF/FFFFFF?text=Image3",
    "https://via.placeholder.com/300/FFFF00/FFFFFF?text=Image4"
  ];


  return (
    <div>
    <div>
      {/* Button to toggle the sidebar */}
      <div className="top-right-button">
        <button onClick={toggleSidebar}>Click Me</button>
      </div>

      {/* Sidebar with conditional class based on isSidebarOpen */}
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <h2>Sidebar Content</h2>
        <p>Some content in the sidebar...</p>
      </div>
    </div>
      <div className='video-container '>
      <video className='video' aria-describedby="hero-video-description" autoplay="autoplay" loop="loop" preload="auto" poster="https://www.jhu.edu/assets/uploads/2024/06/2024-07_homepage_loop_106-Original-960x540.jpg" muted="muted">

      <source src={video1} type="video/mp4" />



</video>
      </div>
      <div className='main-content '>
        <div className='change1'></div>
        <div className='block1 brand1 '>
         <div className='content'>
          <h2>
          <span className="line-one">When ambition</span>
          
          <span className="line-two">
            meets opportunity
            <span class="comma">, </span>
            </span>
          
          <strong>
            <span class="line-three">anything</span> 
            <span class="line-four">
              is possible
            <span class="period">.</span></span>
          </strong>
          </h2>
          <p className='text1'>At Johns Hopkins, you can explore ideas that interest you,
             find people who inspire and challenge you, and make discoveries
              that change your life—and the world.

          </p>

         </div>
        </div>
        <div className='block2 brand2'>
        <div class="marker-stroke" aria-hidden="true"></div>
        <div className="explore-section">
      {/* Centered Heading */}
      <h2 className="explore-heading">Explore</h2>

      {/* Single Row of Boxes */}
      <div className="explore-row">
        <div className="explore-box">Box 1</div>
        <div className="explore-box">Box 2</div>
        <div className="explore-box">Box 3</div>
        <div className="explore-box">Box 4</div>
        <div className="explore-box">Box 5</div>
        <div className="explore-box">Box 6</div>
      </div>
    </div>
        <div class="marker-stroke-white" aria-hidden="true"></div>
        </div>
        <div className='brand3'>
          <div className='text-paper'>
            <div className='container-1'>
              
            </div>
            <div className="small-div">
      {/* Main Heading */}
      <h1 className="main-heading">Main Heading</h1>

      {/* Secondary Heading */}
      <h2 className="secondary-heading">Secondary Heading</h2>

      {/* Text with Box Shadow */}
      <p className="text-with-shadow">
        This is some text with a box shadow. Customize it as needed.
      </p>
    </div>
    <div className="three-container-section">
      <div className="container">
        <div className="image-section1" ></div>
        <div className="content-section">
          <div className="inner-content">
            <h1>Main Heading 1</h1>
            <p>This is some content in the first container.</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="image-section2" ></div>
        <div className="content-section">
          <div className="inner-content">
            <h1>Main Heading 2</h1>
            <p>This is some content in the second container.</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="image-section3" ></div>
        <div className="content-section">
          <div className="inner-content">
            <h1>Main Heading 3</h1>
            <p>This is some content in the third container.</p>
          </div>
        </div>
      </div>
    </div>

          </div>
          
        </div>
        <div className="parent-container">
      {images.map((image, index) => (
        <div
          key={index}
          className="box"
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
          style={{ backgroundImage: `url(${image})`, backgroundSize: "cover" }}
        >
          <div className={`hover-container ${hoveredIndex === index ? "show" : ""}`}>
            <p>Text {index + 1}</p>
            <button>Button {index + 1}</button>
          </div>
        </div>
      ))}
    </div>
    <div className="social-container">
        <div className="social-icons">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
      <div className='brand4'>

      </div>
      <div className='marker-stroke-white'></div>

      </div>
      <div className="footer">
      {/* Left part: Logo */}
      <div className="footer-logo">
        <img
          src="https://via.placeholder.com/100" // Replace with your logo URL
          alt="Logo"
        />
      </div>

      {/* Center part: Address */}
      <div className="footer-address">
        <p>1234 Street Name,</p>
        <p>City, State, ZIP</p>
        <p>Email: contact@example.com</p>
        <p>Phone: (123) 456-7890</p>
      </div>

      {/* Right part: Subheadings with horizontal lines */}
      <div className="footer-subheadings">
        <div className="subheading">
          <h4>Heading 1</h4>
          <hr />
        </div>
        <div className="subheading">
          <h4>Heading 2</h4>
          <hr />
        </div>
        <div className="subheading">
          <h4>Heading 3</h4>
          <hr />
        </div>
      </div>
    </div>

    </div>
  )
}
