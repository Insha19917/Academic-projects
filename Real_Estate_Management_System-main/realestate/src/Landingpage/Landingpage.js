import React from "react";
import top from 'C://Users//HP//Documents//Mini project//Real_Estate_Management_System-main//realestate//src//images//top.png';
import './Landingpage.css';
import house from 'C://Users//HP//Documents//Mini project//Real_Estate_Management_System-main//realestate//src//images//hero.png';
import Insha from 'C://Users//HP//Documents//Mini project//Real_Estate_Management_System-main//realestate//src//images//Insha.png';
import divya from 'C://Users//HP//Documents//Mini project//Real_Estate_Management_System-main//realestate//src//images//divya.png';
import harshita from 'C://Users//HP//Documents//Mini project//Real_Estate_Management_System-main///realestate//src//images//harshita.png'; 

const Landingpage = () => {

    return (
        <>
            <img className='tops' id='head' src={top} />
            <div className='Paras'>
                <div className='thoughts'>
                    “Owning a home is a keystone of wealth…<br />both financial affluence and<br /> emotional security.”
                </div>
                <div className='authors'>-Suze Orman</div>
                <div className='Buttons'>
                    <a className='landbuttons' href='contact'><button>Contact US</button></a>
                    <a className='landbuttons' href='Grid'><button>Go on Search</button></a>
                </div>
            </div>
            <div className='works'>
                <h1>HOW IT WORKS</h1>
                <div className='subworks'>
                    <b>Find a property</b>
                    <p>It is a long established  <br />
                        a reader distracted  </p>
                </div>
                <div className='subworks'>
                    <b>Buy a property</b>
                    <p>It is a long established  <br />
                        a reader distracted  </p>
                </div>
                <div className='subworks'>
                    <b>Investing </b>
                    <p>It is a long established  <br />
                        a reader distracted  </p>
                </div>
            </div>
            <img className='houses' src={house} />
            <div className='Paras'>
                <div className='thoughts'>
                    We Are The Best <br />Real Estate Company<br/>
                    <a className='landbuttons' href='Grid'><button>Go on Search</button></a>
                </div>
                </div>
                <div className='works'>
                <h1>TESTIMONALS</h1>
                <div className='subworks'>
                <img className='tops' src={Insha} /> 
                </div>
                <div className='subworks'>
                <img className='tops' src={harshita} /> 
                </div>
                <div className='subworks'>
                <img className='tops' src={divya} />  
                </div>
            </div>
            
            <div className='Paras'>
                <div className='thoughts'>
                    We Are The Best <br />Real Estate Company<br/>
                    <a className='landbuttons' href='Grid'><button>Go on Search</button></a>
                </div>
                </div>
        </>
    );
}

export default Landingpage;