import React from "react";
import Banner from "../Components/Home/Banner";
import Service from "../Components/Home/Service";
import NewsAndMedia from "../Components/Home/NewsAndMedia";
import Founders from "../Components/Home/Founders";

const Home = () => {
  return (
    <>
      <Banner />
      <div className="about-section py-16 bg-white text-center">
        <h2 className="text-4xl font-bold text-black mb-4">About Us</h2>
        <p className="text-xl text-black mb-12">
          Find Whatever you need to know about Afghan Invest
        </p>
        <div class="container">
          <div class="row">
            <div class="grid col-span-1">
              <div class="featuredPropBox grid col-span-1">
                <ul>
                  <li>
                    {" "}
                    <a href="#">
                      <div class="fplogo">Who We Are?</div>
                      <div class="fptext">
                        <p className="card-button">Read More</p>
                      </div>
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#">
                      <div class="fplogo">Our Goals!</div>
                      <div class="fptext">
                        <p className="card-button">Read More</p>
                      </div>
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#">
                      <div class="fplogo">Our Vision!</div>
                      <div class="fptext">
                        <p className="card-button">Read More</p>
                      </div>
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#">
                      <div class="fplogo">Our Mission!</div>
                      <div class="fptext">
                        <p className="card-button">Read More</p>
                      </div>
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#">
                      <div class="fplogo">AIC by F&F!</div>
                      <div class="fptext">
                        <p className="card-button">Read More</p>
                      </div>
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#">
                      <div class="fplogo">AIC Inauguration!</div>
                      <div class="fptext">
                        <p className="card-button">Read More</p>
                      </div>
                    </a>{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Service />
      <NewsAndMedia />
      <Founders />
    </>
  );
};

export default Home;
