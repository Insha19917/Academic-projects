import React from "react";
import insha from 'C://Users//HP//Documents//Mini project//Real_Estate_Management_System-main//realestate//src//images//insha.jpeg'; 
import divya from 'C://Users//HP//Documents//Mini project//Real_Estate_Management_System-main//realestate//src//images//divya.jpeg';
import harshita from 'C://Users//HP//Documents//Mini project//Real_Estate_Management_System-main//realestate//src//images//harshita.jpeg';
import mrunmayi from 'C://Users//HP//Documents//Mini project//Real_Estate_Management_System-main//realestate//src//images//mrunmayi.jpeg'; 
import "./AboutUs.css"
const AboutUs = () =>{
return(
  <>
  <div class="team-area">
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="section-title text-center">
          <h2>Our Team</h2>
          <p>Meet Our telented Team Members</p>
        </div>
      </div>

      <div class="col-md-3">
        <div class="single-team">
          <div class="team-img">
            <img src={mrunmayi} alt="" class="img-responsive" />
          </div>
          <div class="team-content">
            <div class="team-info">
              <h3>Mrunmayi Patankar</h3>
              <h5>Roll no: 46</h5>
              <h5>Organization: VCET</h5>
            </div>
            <p class="team-text">Currently studying in third year and persuing B.E in Information Technology.</p>
          </div>
        </div>
      </div>

      <div class="col-md-3">
        <div class="single-team">
          <div class="team-img">
          <img src={harshita} alt="" class="img-responsive" />
          </div>
          <div class="team-content">
            <div class="team-info">
              <h3>Harshita Madane</h3>
              <h5>Roll no: 32</h5>
              <h5>Organization: VCET</h5>
            </div>
            <p class="team-text">Currently studying in third year and persuing B.E in Information Technology.</p>
          </div>
        </div>
      </div>

      <div class="col-md-3">
        <div class="single-team">
          <div class="team-img">
          <img src={divya} alt="" class="img-responsive" />
          </div>
          <div class="team-content">
            <div class="team-info">
              <h3>Divya Chaudhari</h3>
              <h5>Roll no: 12</h5>
              <h5>Organization: VCET</h5>
            </div>
            <p class="team-text">Currently studying in third year and persuing B.E in Information Technology.</p>
          </div>
        </div>
      </div>

      <div class="col-md-3">
        <div class="single-team">
          <div class="team-img">
             <img src={insha} alt="" class="img-responsive" />
          </div>
          <div class="team-content">
            <div class="team-info">
              <h3>Insha Mulla</h3>
              <h5>Roll no: 39</h5>
              <h5>Organization: VCET</h5>
            </div>
            <p class="team-text">Currently studying in third year and persuing B.E in Information Technology.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


      
               


  </>
);
}
export default AboutUs;