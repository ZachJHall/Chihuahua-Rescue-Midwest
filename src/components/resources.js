import React from "react";
import "../CSS/resources.css";
import list from "../data/list.json";

const ListTemplate = props => {
  return (
    <div>
      <ul className="SG">
        <li className="sgLi">
          <div className="box">
            <h3>{props.category}</h3>
            <ul className="df">
              <li>
                <a href={props.link}>{props.name}</a>
                {props.descr}
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
};

const Resources = () => {
  return (
    <div>
      {list.map(p => (
        <ListTemplate
          name={p.name}
          key={p.id}
          link={p.link}
          descr={p.descr}
          category={p.category}
        />
      ))}
    </div>
  );
};

const Real = () => {
  return (
    <div>
      <div className="X">
        <ul className="SG">
          <li className="sgLi">
            <div className="box">
              <h3>Pet Accessories</h3>
              <ul className="df">
                <li>
                  <a href="https://www.trendyhounds.com/">Trendy Hounds</a> :
                  Hand made dog collars
                </li>
              </ul>
            </div>
          </li>
        </ul>

        <ul className="SG">
          <li className="sgLi">
            <div className="box">
              <h3>Animal services </h3>
              <ul className="df">
                <li>
                  <a href="https://www.ipawstraining.com/">
                    Infinite Pawsibilities
                  </a>
                  : Dog Training Classes
                </li>
                <li>
                  <a href="https://www.facebook.com/Pawsandrelaxpetspa/">
                    Paws and Relax Pet Spa
                  </a>
                  : Pet grooming
                </li>
              </ul>
            </div>
          </li>
        </ul>

        <ul className="SG">
          <li className="sgLi">
            <div className="box">
              <h3>Pet Nutrition </h3>
              <ul className="df">
                <li>
                  <a href="https://www.treats-unleashed.com/">
                    Treats Unleashed
                  </a>
                </li>
                <li>
                  <a href="https://threedog.com/">Three Dog Bakery</a>
                </li>
              </ul>
            </div>
          </li>
        </ul>

        <ul className="SG">
          <li className="sgLi">
            <div className="box">
              <h3>Medical Services </h3>
              <ul className="df">
                <li>
                  <a href="https://lovefamilyvet.com/">
                    Animal Medical Center of Wentzville
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Resources;
