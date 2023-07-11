import React from "react";
import images from "../images/photo-1.jpg";
// import Iframe from "google-map-react";

const List = [
  {
    images: "/",
    title: "Paid",
    heading: "Loachella, NYC",
    Description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },

  {
    images: "../images/photo-1.jpg",
    title: "Paid",
    heading: "Loachella, NYC",
    Description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },

  {
    images: "/",
    title: "Paid",
    heading: "Loachella, NYC",
    Description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    images: "/",
    title: "Paid",
    heading: "Loachella, NYC",
    Description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

const Data = [
  {
    img: "../images/photo-1.jpg",
    title: "Event Tips",
    desc: "Finding Amazing Events Near You - Fast, Cheap & Free",
  },
  {
    img: "../images/photo-1.jpg",
    title: "Event Tips",
    desc: "Finding Amazing Events Near You - Fast, Cheap & Free",
  },
  {
    img: "../images/photo-1.jpg",
    title: "Event Tips",
    desc: "Finding Amazing Events Near You - Fast, Cheap & Free",
  },
];

const Home = () => {
  return (
    <section>
      <section>
        <div className="w-[100%] h-[90vh] bg-black">
          <h1 className="font-bold text-white text-center pt-24 text-7xl px-4">
            Book Music & Comedy Events anywhere in New York
          </h1>
          <div className=" flex justify-center mt-14">
            <button className=" font-bold bg-purple-700 rounded-full px-10 py-4 text-white hover:bg-purple-500">
              Search Events Near Me
            </button>
          </div>
        </div>
      </section>

      <section className="px-10">
        <div className="text-center pb-10">
          <div>
            <h1 className="font-bold text-black text-6xl mt-16">
              Popular Events
            </h1>
          </div>
          <div className="mt-5 mb-5 flex-col justify-center">
            <p className="text-2xl text-gray ">
              Here are some of the most popular events in New York City curated
              by professionals.
            </p>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 justify-center items-center">
          {List.map((item) => {
            return (
              <div>
                <div>
                  <img
                    className="w-[700px] h-[400px] rounded-2xl"
                    src={images}
                    class="img-fluid rounded-top"
                    alt=""
                  />
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-gray-500">
                    {item.title}
                  </h1>
                  <h1 className=" font-bold text-5xl">{item.heading}</h1>
                  <p className="text-gray-600 mt-5">{item.Description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-12 justify-center items-center mt-10 ">
          {Data.map((item) => {
            return (
              <div>
                <div>
                  <img
                    className="w-[600px] h-[300px] rounded-xl "
                    src={images}
                    class="img-fluid rounded-top rounded-lg"
                    alt=""
                  />
                </div>
                <div>
                  <h1 className="text-3xl font-bold ">{item.title}</h1>
                  <p className="text-gray-600 ">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section className="mt-10">
        <form className="bg-purple-400 w-[100%] h-[70vh] pt-5 sm:pb-10">
          <h1 className="text-4xl sm:text-2xl  pl-10 font-bold p text-white pt-10">
            Organize an Event
          </h1>
          <div className=" md:flex justify-center">
            <div class="relative z-0 w-full mb-6 group px-10 mt-5">
              <lable for="first" className="font-bold mr-10 text-white">
                Your Name
              </lable>
              <input
                className="px-10 py-2 rounded-lg outline-none"
                type="text"
                id="first"
                name="myfirst"
                placeholder="Enter Name"
              />
            </div>

            <div class="relative z-0 w-full mb-6 group px-10 mt-5">
              <lable for="first" className="font-bold mr-10 text-white">
                Your Email Address
              </lable>
              <input
                className="px-10 py-2 border-none  rounded-lg outline-none"
                type="text"
                id="first"
                name="myfirst"
                placeholder="Enter Email"
              />
            </div>

            <div class="relative z-0 w-full mb-6 group px-10 mt-5">
              <lable for="first" className="font-bold mr-10 text-white ">
                Password
              </lable>
              <input
                className="px-10 py-2 border-none  rounded-lg outline-none"
                type="text"
                id="first"
                name="myfirst"
                placeholder="Enter Password"
              />
            </div>

            <div class="relative z-0 w-full mb-6 group px-10 mt-5">
              <lable for="first" className="font-bold mr-10 text-white ">
                Your Message
              </lable>
              <input
                className="px-10 py-2 border-none rounded-lg outline-none hover:border-2"
                type="text"
                id="first"
                name="myfirst"
                placeholder="Enter your message"
              />
            </div>
          </div>
          <div className=" flex justify-center mt-10 mr-14">
            <button className=" font-bold bg-purple-700 rounded-lg px-10 py-4 text-white hover:bg-purple-500">
              Search Events Near Me
            </button>
          </div>
        </form>
      </section>
      {/* <Iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3867187.666169696!2d76.76983739999999!3d18.81817715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1689061690215!5m2!1sen!2sin"
        width="600"
        height="450"
        style={{ border: "0" }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></Iframe> */}
    </section>
  );
};

export default Home;
