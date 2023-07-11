import React from "react";

const About = () => {
  return (
    <section>
      <div className="grid lg:grid-cols-2 w-[100%] h-[80vh] bg-slate-300 px-10 pt-10">
        <div>
          <img
            className="hover:shadow-2xl rounded-lg"
            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
        <div>
          <h1 className="text-3xl border-t-4 border-red-500  w-[130px] pt-2">
            About Us
          </h1>
          <p className="text-base pt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            finibus leo et diam fermentum ullamcorper. Nulla venenatis nibh
            sollicitudin tincidunt gravida. Nam convallis justo et ligula luctus
            suscipit. Etiam eu nisi turpis. Donec sollicitudin accumsan quam,
            rhoncus sagittis metus semper quis. Praesent convallis mauris sed
            ipsum lobortis facilisis. Nulla cursus sem non nunc sagittis, a
            volutpat mauris lobortis. Nulla ut feugiat tellus. Nam dictum nisi
            nec scelerisque auctor
          </p>
        </div>
      </div>
      <section>
        <div className=" w-[100%] h-[100vh] md:pb-40 bg-gray-200 ">
          <div className="grid lg:grid-cols-2 gap-10 px-10 pt-12 ">
            <div>
              <h1 className="text-2xl sm:text-3xl border-t-4 border-red-500 w-[150px]  text-black ">
                We are Professionals
              </h1>
              <div className="">
                <p className="text-lg flex-col text-justify text-black">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                  eiusmod tempor incididunt ut labore.
                </p>
              </div>
              <div className="mt-5">
                <h1 className="text-3xl text-black">Ideas & Plans</h1>
                <p className="text-lg text-black">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                  eiusmod tempor incididunt ut labore.
                </p>
              </div>
              <div className="mt-5">
                <h1 className="text-3xl text-black ">Prompt Strategies</h1>
                <p className="text-lg text-black">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                  eiusmod tempor incididunt ut labore.
                </p>
              </div>
            </div>
            <div>
              <img
                className="hover:shadow-2xl  rounded-lg w-[600px] h-[500px]"
                src="https://mobirise.com/extensions/solutionm4/marketingsolution/assets/images/02.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default About;
