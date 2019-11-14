import React, { useState, useEffect } from "react";
import "../CSS/home.css";
import img1 from "../chi1.jpg";
import img2 from "../chi2.jpeg";
import img3 from "../chi3.jpeg";

const images = [img1, img2, img3];

const Home = () => {
  const [image, setImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setImage(image => (image + 1) % images.length),

      5 * 1000
    );
    return () => clearInterval(interval);
  });

  return (
    <div>
      <div className="center">
        <div className="contain">
          <img className="img" alt="" src={images[image]} />
          <div className="text-block">
            <h1>Chihuahua Rescue Midwest</h1>
          </div>
        </div>
        <div>
          <div>
            <h1>What do we do?</h1>
            <p>
              Chihuahua Rescue Midwest is a non profit 501C organization. We are
              an all volunteer rescue, foster and adoption organization.
            </p>

            <h1>Our goal?</h1>
            <p>
              We believe that irresponsible breeding of animals (especially for
              profit - puppy mills) is unethical and inhumane. We hope that pet
              owners will consider adoption as their first choice for selecting
              a new pet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
