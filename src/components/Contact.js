import { React, useState } from "react";
import Reveal from "../common/Reveal";
import { motion, AnimatePresence, easeIn } from "framer-motion";

function Contact() {
  const [isResumesModalOpen, setResumesModalOpen] = useState(false);

  const openResumesModal = () => {
    setResumesModalOpen(true);
  };
  return (
    <div className="w-full min-h-[60vh]">
      <div
        className="page-heading text-black mt-20 dark:text-white "
        id="contact"
      >
        <Reveal>
          {" "}
          Contact<span className="text-red-500">.</span>
        </Reveal>
      </div>
      <div className="m-auto text-center mt-10">
        <p className="w-15">Let's get in touch!</p>
      </div>
      <motion.div
        className="flex flex-row justify-center align-middle p-10 "
        initial={{
          y: 75,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: { duration: 0.5, delay: 0.5 },
        }}
      >
        <a
          href="https://www.linkedin.com/in/atharva-kitkaru/"
          target="_blank"
          rel="noreferrer"
        >
          <motion.svg
            className="w-10 h-10 mx-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            whileHover={{
              cursor: "pointer",
              scale: 1.2,
            }}
          >
            <path
              d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
              fill="#828385"
            />
          </motion.svg>
        </a>
        <a
          href="https://github.com/AtharvaKitkaru"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="w-10 h-10 mx-2"
            fill="#828385"
            whileHover={{
              cursor: "pointer",
              scale: 1.2,
            }}
          >
            <path d="M448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM265.8 407.7c0-1.8 0-6 .1-11.6c.1-11.4 .1-28.8 .1-43.7c0-15.6-5.2-25.5-11.3-30.7c37-4.1 76-9.2 76-73.1c0-18.2-6.5-27.3-17.1-39c1.7-4.3 7.4-22-1.7-45c-13.9-4.3-45.7 17.9-45.7 17.9c-13.2-3.7-27.5-5.6-41.6-5.6s-28.4 1.9-41.6 5.6c0 0-31.8-22.2-45.7-17.9c-9.1 22.9-3.5 40.6-1.7 45c-10.6 11.7-15.6 20.8-15.6 39c0 63.6 37.3 69 74.3 73.1c-4.8 4.3-9.1 11.7-10.6 22.3c-9.5 4.3-33.8 11.7-48.3-13.9c-9.1-15.8-25.5-17.1-25.5-17.1c-16.2-.2-1.1 10.2-1.1 10.2c10.8 5 18.4 24.2 18.4 24.2c9.7 29.7 56.1 19.7 56.1 19.7c0 9 .1 21.7 .1 30.6c0 4.8 .1 8.6 .1 10c0 4.3-3 9.5-11.5 8C106 393.6 59.8 330.8 59.8 257.4c0-91.8 70.2-161.5 162-161.5s166.2 69.7 166.2 161.5c.1 73.4-44.7 136.3-110.7 158.3c-8.4 1.5-11.5-3.7-11.5-8zm-90.5-54.8c-.2-1.5 1.1-2.8 3-3.2c1.9-.2 3.7 .6 3.9 1.9c.3 1.3-1 2.6-3 3c-1.9 .4-3.7-.4-3.9-1.7zm-9.1 3.2c-2.2 .2-3.7-.9-3.7-2.4c0-1.3 1.5-2.4 3.5-2.4c1.9-.2 3.7 .9 3.7 2.4c0 1.3-1.5 2.4-3.5 2.4zm-14.3-2.2c-1.9-.4-3.2-1.9-2.8-3.2s2.4-1.9 4.1-1.5c2 .6 3.3 2.1 2.8 3.4c-.4 1.3-2.4 1.9-4.1 1.3zm-12.5-7.3c-1.5-1.3-1.9-3.2-.9-4.1c.9-1.1 2.8-.9 4.3 .6c1.3 1.3 1.8 3.3 .9 4.1c-.9 1.1-2.8 .9-4.3-.6zm-8.5-10c-1.1-1.5-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3c1.1 1.5 1.1 3.3 0 4.1c-.9 .6-2.6 0-3.7-1.5zm-6.3-8.8c-1.1-1.3-1.3-2.8-.4-3.5c.9-.9 2.4-.4 3.5 .6c1.1 1.3 1.3 2.8 .4 3.5c-.9 .9-2.4 .4-3.5-.6zm-6-6.4c-1.3-.6-1.9-1.7-1.5-2.6c.4-.6 1.5-.9 2.8-.4c1.3 .7 1.9 1.8 1.5 2.6c-.4 .9-1.7 1.1-2.8 .4z" />
          </motion.svg>
        </a>
        <a
          href="mailto:atharvakitkaru01@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="w-10 h-10 mx-2"
            fill="#828385"
            whileHover={{
              cursor: "pointer",
              scale: 1.2,
            }}
          >
            <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
          </motion.svg>
        </a>
      </motion.div>
      <motion.div
        initial={{
          y: 75,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: { duration: 0.5, delay: 0.5 },
        }}
        className="text-center"
      >
        <div className="cursor-pointer" onClick={() => openResumesModal()}>
          My Resume
        </div>
      </motion.div>
      <AnimatePresence>
        {isResumesModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setResumesModalOpen(false)}
            className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0, rotate: "12.5deg" }}
              animate={{ scale: 1, rotate: "0deg" }}
              exit={{ scale: 0, rotate: "0deg" }}
              transition={{ duration: 0.5, ease: easeIn }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gradient-to-br from-copy to-copy-light text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative"
            >
              <div className="relative z-10">
                <div className="bg-white w-16 h-16 mb-2 rounded-full text-3xl text-primary grid place-items-center mx-auto"></div>

                <h3 className="text-2xl font-bold text-center mb-2">
                  My Resume
                </h3>

                <iframe
                  src="https://drive.google.com/file/d/1uari0LC9Vagj11MRc1aoy3dY3qu6VoF_/preview"
                  title="My Resume"
                  className="w-full min-h-[50vh] rounded-md py-1"
                ></iframe>

                <div className="flex gap-2 mt-2">
                  <button
                    onClick={() => setResumesModalOpen(false)}
                    className="bg-white hover:opacity-90 transition-opacity text-primary font-semibold w-full py-2 rounded-xl"
                  >
                    Ok!
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Contact;
