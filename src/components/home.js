import React, { useState, useEffect, delay } from "react";
import "../CSS/home.css";
import img1 from "../dog1.jpg";
import img2 from "../dog2.jpg";
import img3 from "../dog3.jpg";

const images = [img1, img2, img3];

const Home = () => {
  const [image, setImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setImage(image => (image + 1) % images.length),

      5 * 1000
    );
    return () => clearInterval(interval);

    if (image > 2) {
      image = 0;
    }
  });

  return (
    <div className="frame">
      <img className="tee" src={images[image]} />
      <div className="center">
        <h1>What do we do?</h1>
        <p>
          Chihuahua Rescue Midwest is a non profit 501C organization. We are an
          all volunteer rescue, foster and adoption organization.
        </p>

        <h1>Our goal?</h1>
        <p>
          We believe that irresponsible breeding of animals (especially for
          profit - puppy mills) is unethical and inhumane. We hope that pet
          owners will consider adoption as their first choice for selecting a
          new pet.
        </p>
      </div>
    </div>
  );
};

export default Home;
