import React, { useState, useEffect } from 'react'
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader"; // Import PacmanLoader
import Navbar from '../src/components/Nav/Navbar'
import Hero from './components/Hero/Hero';
import Vpro from './components/Vpro/Vpro';
import Appletechs from './components/Apptechs/Appletechs';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';


const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  // Define color and override variables
  const color = "white"; // Set your desired color value here
  const loaderContainerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh", // This will make sure the container takes up the whole viewport height
  };
  
  return (

<>
      {loading ? (
        <div style={loaderContainerStyle}>
          <ClimbingBoxLoader
            color={color}
            loading={loading}
            size={50} // Adjust the size according to your preference
            aria-label="Loading Spinner"
            data-testid="loader"
/></div>
      ) : (

      <>
      <Navbar />
      <Hero />
      <Vpro />
            <Appletechs />
            <Contact />      
            <Footer/>
          </>
           )}
           </>
         );
       };
  


export default App