import React from "react";

const ContactUsPage = () => {
  return (
    <>
      <div className="center p-[20px] sm:p-[40px]">
        <div className=" text-center contact-links">
          <p>
            CUSTOMER SERVICE <br />
            <a href="mailto:">dekreatorsidea@gmail.com</a>
          </p>
          <p>
            INSTAGRAM <br />{" "}
            <a href="http://" target="_blank" rel="noopener noreferrer">
              @dekreatorsidea
            </a>
          </p>
          <p>
            BUSINESS INQUIRES <br />
            <a href="mailto:">dekreatorsidea@gmail.com</a>
          </p>
          <p>
            CUSTOM SHIRT <br />
            <a href="mailto:">dekreatorsidea@gmail.com</a>
          </p>
        </div>
        <div className=" py-20">
          <form>
            <div className=" max-w-[800px] mx-auto">
              <div className=" sm:flex items-center justify-between gap-10">
                <div className=" grow">
                  <label htmlFor="">Name</label>
                  <br />
                  <input
                    type="text"
                    className="block border border-[#21212180] w-full my-2 p-2 mb-5"
                  />
                </div>
                <div className="grow">
                  <label htmlFor="">Email</label>
                  <br />
                  <input
                    type="text"
                    className="block border border-[#21212180] w-full my-2 p-2 mb-5"
                  />
                </div>
              </div>
              <label htmlFor="">Message</label>
              <br />
              <textarea
                name=""
                id=""
                cols={30}
                rows={10}
                className="block border border-[#21212180] w-full my-2 p-1"
              ></textarea>
              <button
                className=" bg-[#212121] hover:bg-black text-white  w-full p-2 my-5"
                type="submit"
              >
                SEND
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactUsPage;
