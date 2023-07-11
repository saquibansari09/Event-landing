import React from "react";

const Footer = () => {
  return (
    <footer className="w-[100%] h-full sm:h-[70vh] bg-black pt-20 px-10  ">
      <hr />
      <div className="grid lg:grid-cols-5 md:grid-cols-2 pt-5  ">
        <div>
          <h1 className="text-white">RESOURCES</h1>
          <div className="text-white pt-5 ">
            <li className="list-none">
              <a className="hover:underline" href="/">
                Application
              </a>
            </li>
            <li className="list-none">
              <a href="/">Documention</a>
            </li>
            <li className="list-none">
              <a href="/">Systems</a>
            </li>
            <li className="list-none">
              <a href="/">FAQ</a>
            </li>
          </div>
        </div>
        <div>
          <h1 className="text-white">PRICING</h1>
          <div className="text-white pt-5">
            <li className="list-none">
              <a href="/">Overview</a>
            </li>
            <li className="list-none">
              <a href="/">Premium Plans</a>
            </li>
            <li className="list-none">
              <a href="/">Affiliate Program</a>
            </li>
            <li className="list-none">
              <a href="/">Promotions</a>
            </li>
          </div>
        </div>
        <div>
          <h1 className="text-white">COMPANY</h1>
          <div className="text-white pt-5">
            <li className="list-none">
              <a href="/">About Us</a>
            </li>
            <li className="list-none">
              <a href="/">Blogs</a>
            </li>
            <li className="list-none">
              <a href="/">Partnership</a>
            </li>
            <li className="list-none">
              <a href="/">Careers</a>
            </li>
            <li className="list-none">
              <a href="/">Press</a>
            </li>
          </div>
        </div>
        <div>
          <h1 className="text-white">SOCIAL</h1>
          <div className="text-white pt-5">
            <li className="list-none">
              <a className="hover:underline" href="/">
                Facebook
              </a>
            </li>
            <li className="list-none">
              <a className="hover:underline" href="/">
                Twitter
              </a>
            </li>
            <li className="list-none">
              <a className="hover:underline" href="/">
                Instagram
              </a>
            </li>
            <li className="list-none">
              <a className="hover:underline" href="/">
                Linkedin
              </a>
            </li>
          </div>
        </div>
        <div>
          <h1 className="text-white">PRIVACY & SECURITY</h1>
          <div className="text-white pt-5">
            <li className="list-none">
              <a href="/">Pledge to Donors</a>
            </li>
            <li className="list-none">
              <a href="/">Privacy Policy</a>
            </li>
            <li className="list-none">
              <a href="/">Social Media Policy</a>
            </li>
            <li className="list-none">
              <a href="/">Copyright Notice</a>
            </li>
          </div>
        </div>
      </div>
      <p className="text-center text-gray-400 text-base pt-5 pb-5">
        So take the time to really think about the content you include in your
        footer. Consider what would be most helpful for your goals and your
        visitors’ experience. After all, a well-crafted, cohesive website footer
        can make a great impact on engagement.
      </p>
      <hr />
    </footer>
  );
};

export default Footer;
