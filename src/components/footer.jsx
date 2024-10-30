import { FaInstagram } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";

const Footer = () => {
  return (
    <footer className="footer bg-white text-grey-700 p-10">
      <aside>
        <img src="hehe.png" alt="" className="w-10 h-10" />
        <p>
          MZAR.
          <br />
          Software enggineer
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Contacts</h6>
        <div className="grid grid-flow-col gap-4">
          <a
            className="link link-hover"
            href="https://www.instagram.com/mzar.id/"
          >
            <FaInstagram className="w-5 h-5" />
          </a>
          <a
            className="link link-hover"
            href="https://mail.google.com/mail/u/0/?tf=cm&fs=1&to=Rejamardiansyah11@gmail.com"
          >
            <CiMail className="w-5 h-5" />
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
