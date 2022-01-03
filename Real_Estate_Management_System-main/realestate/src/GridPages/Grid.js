import React from "react";
import {Link } from "react-router-dom";
import "./Grid.css"

function Grid() {

     return (
        <React.Fragment>
        <br></br>
        <h1 align = "center">Properties we have.....</h1>
        <br></br>
        <div className="container">
    <div className="row">
      <div className="col"><div class="card">
    <img src="https://media-cdn.tripadvisor.com/media/vr-splice-j/05/f5/b7/76.jpg" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">Rental House</h5>
      <p class="card-text">Beautiful house with all kinds of facilities and maintainance. Located near Nagpur Highway.</p>
      <a href="#" class="btn btn-primary">Read More</a>
    </div>
  </div>
  </div>
      <div className="col"><div class="card">
    <img src="https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/201801240821251655-338de006104311ea99090242ac110003.jpg" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">1 BK</h5>
      <p class="card-text">The room is a part of <b>Royal Society</b> which is located in Pune. 24x7 facilities are available.</p>
      <a href="#" class="btn btn-primary">Read More</a>
    </div>
  </div>
  </div>
      <div className="col"><div class="card">
    <img src="https://4.imimg.com/data4/KU/VN/MY-6480170/maxresdefault-500x500.jpg" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">Bungalow in Mumbai</h5>
      <p class="card-text">Beautiful bunglow with nice ambiance for Mumbaikars as well as Non-Mumbaikars.</p>
      <a href="#" class="btn btn-primary">Read More</a>
    </div>
  </div>
  </div>
    </div>
    <br></br>
    <div className="row">
      <div className="col"><div class="card">
    <img src="https://media.istockphoto.com/photos/land-for-sale-picture-id92266946?k=20&m=92266946&s=612x612&w=0&h=aajgO0NcyGsRzKkMS4EZJVWs8NeOqO46OSbG_4ZGoq4=" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">Land for Sell</h5>
      <p class="card-text">This is located near Colaba. The land is evergreen with good water facilities. It is surrounded by other such lands which are now under renovation of houses. Developed region.</p>
      <a href="#" class="btn btn-primary">Read More</a>
    </div>
  </div>
  </div>
      <div className="col"><div class="card">
    <img src="https://5.imimg.com/data5/SD/RS/MY-66744989/land-for-sale-500x500.jpeg" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">Residential plot</h5>
      <p class="card-text">The plot is situated in Banglore, surrounded by residential houses.</p>
      <a href="#" class="btn btn-primary">Read More</a>
    </div>
  </div>
  </div>
      <div className="col"><div class="card">
    <img src="https://mediacdn.99acres.com/media1/15465/8/309308906M-1627537894488.jpg" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">Agricultural Land</h5>
      <p class="card-text">Farming land in Uttar Pradesh. Supports farming of papaya and jackfruit trees.</p>
      <a href="#" class="btn btn-primary">Read More</a>
    </div>
  </div>
  </div>
  </div>
  <br />
            <button class="btn" type="submit"> <a href="https://spaces.chec.io/35181"> Buy a property</a></button>
  </div>
      </React.Fragment>
     );

 }

 export default Grid;