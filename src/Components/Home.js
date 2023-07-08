import React from "react";
import images from "../images/photo-1.jpg";

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
          <div className="mt-10 flex-col justify-center">
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

        <div className="grid lg:grid-cols-3 gap-12 justify-center items-center mt-10">
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
        <form className="  bg-purple-400 w-[100%] h-[80vh] pt-14">
          <h1 className="text-5xl font-bold text-center text-white pt-10">
            Organize an Event
          </h1>
          <div className="md:flex justify-center">
            <div class="relative z-0 w-full mb-6 group px-10 mt-5">
              <lable for="first" className="font-bold mr-10 text-white">
                Your Name
              </lable>
              <input
                className="px-8 py-3 border-none mt-5 "
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
                className="px-8 py-3 border-none mt-5"
                type="text"
                id="first"
                name="myfirst"
                placeholder="Enter Email"
              />
            </div>

            <div class="relative z-0 w-full mb-6 group px-10 mt-5">
              <lable for="first" className="font-bold mr-10 text-white">
                Password
              </lable>
              <input
                className="px-8 py-3 border-none mt-5"
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
                className="px-8 py-3 border-none mt-5"
                type="text"
                id="first"
                name="myfirst"
                placeholder="Enter your message"
              />
            </div>
          </div>
        </form>
      </section>
    </section>
  );
};

export default Home;
