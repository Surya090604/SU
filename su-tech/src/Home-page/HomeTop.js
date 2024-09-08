import React from 'react'
import video1 from '../images/video.mp4'
import './homeTop.css'
export default function HomeTop() {
  return (
    <div>
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
        <div className='center-force'>
          
        </div>
        </div>
      </div>

    </div>
  )
}
