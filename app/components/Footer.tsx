import { Facebook, Github, Instagram, Link, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="mx-auto my-4 w-full max-w-7xl px-8 py-4 text-center text-[0.8rem] text-text-secondary dark:text-d-text-secondary">
      <span>
        &copy; {new Date().getFullYear()} Copyrigth RantoKoplak{" "}
        
        .
        <div className=" pt-10 space-x-5 text-white flex justify-center">
        <a href="https://www.linkedin.com/in/ranto-6266101a3/" target="_blank">
          <Linkedin className="duration-500 hover:-translate-y-1" />
        </a>

        <a href="https://www.facebook.com/ranto.koplak.121519/" target="_blank">
          <Facebook className="duration-500 hover:-translate-y-1" />
        </a>

        <a href="https://github.com/Ranto12" target="_blank">
          <Github className="duration-500 hover:-translate-y-1" />
        </a>

        <a href="https://www.instagram.com/ranto.21/" target="_blank">
          <Instagram className="duration-500 hover:-translate-y-1" />
        </a>
      </div>
      </span>
      
    </footer>
  );
};

export default Footer;
