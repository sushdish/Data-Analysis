import React from 'react'
import Menu from "./Menu" 
// import './CustomStyles.css'; // Import custom CSS

const Base = ({
    title="My Title",
    description="My description",
    className = "text-white p-4",
    children 
}) => (


  <div>
        <Menu />
        <div className="containe-fluid  text-white text-center">
            <div className="jumbotron text-center text-white">
                <h4 className="display-6 py-1">{title}</h4>
                <h5 className="lead">{description}</h5>
            </div>
            <div className={className}>{children}</div>
        </div>
        <footer className="footer bd-dark mt-auto py-3">
         <div className="cointainer-fluid bg-success text-white text-center py-3">
       <h4>If you have questions, feel free to contact us</h4>
      <button className="btn btn-warning btn-lg">Contact Us</button>
        </div>
         <div className="cointainer">
        <span className="text-muted">An amazing <span className="text-white">MERN</span> Bootcamp</span>
         </div>
       </footer>
       </div>
)

 
  //   <div>
  //     <Menu />
  //     <div className="container-fluid">
  //       <div className="jumbotron  text-white text-center">
  //           <h2 className="display-4">{title}</h2>
  //           <p className="lead">{description}</p>
  //       </div>
  //      <div>
  //       <div className={className}>{childern}</div>
  //      </div>
  //     </div>
  //     <footer className="footer bd-dark mt-auto py-3">
  //       <div className="cointainer-fluid bg-success text-white text-center py-3">
  //       <h4>If you have questions, feel free to contact us</h4>
  //       <button className="btn btn-warning btn-lg">Contact Us</button>
  //       </div>
  //       <div className="cointainer">
  //       <span className="text-muted">An amazing <span className="text-white">MERN</span> Bootcamp</span>
  //       </div>
  //     </footer>
  //   </div>




export default Base;