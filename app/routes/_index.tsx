import { motion } from "framer-motion";
import {
  textVariants,
  containerVariants,
  imageLoadAnimationProps,
} from "~/data/animationConfig";

export default function Index() {
  return (
    <div className="mx-0 my-[2em] flex min-h-[400px] flex-[1] items-center justify-center max-w-md:flex-col">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-md:flex-[0 flex-[1] px-[1em] py-0 max-w-md:pb-[2em] max-w-md:text-center"
      >
        <motion.h1
          variants={textVariants}
          className="mb-[0.5em] text-2xl font-bold leading-[1.3] md:text-4xl"
        >
          Welcome to My Portofolio
        </motion.h1>
        <motion.p variants={textVariants} className="text-lg md:text-xl">
          <p className="text-base">My Name Is <span className="font-bold text-lg">Ranto{" "}</span></p>
          <a
            href="https://github.com/Ranto12"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>{" "}
           to check my Project.
        </motion.p>
      </motion.div>

      <div className="mx-[1em] my-0 text-center">
        <motion.div {...imageLoadAnimationProps}>
          <picture className="block min-h-[250px]">
            <source
              srcSet="/assets/images/ckckc-removebg-preview.png"
              media="(min-width: 600px)"
            />
            <img
              className="mb-[1em] w-full max-w-[550px] max-w-lg:max-w-[400px]"
              alt="Illustration of person reading a book"
              src="/assets/images/ckckc-removebg-preview.png"
              width="550"
              height="466"
            />
          </picture>
        </motion.div>

        <p className="text-left text-[0.8em] italic">
          Download {" "}
          <a
            href="Ranto-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download={'Ranto-resume.pdf'}
          >
            {" "}
            cv{" "}
          </a>{" "}
          Or Contact{" "}
          <a
            href="mailto:rantoirwanda08@gmail.com"
            target="_blank"
          >
            e-mail
          </a>
        </p>
      </div>
    </div>
  );
}
