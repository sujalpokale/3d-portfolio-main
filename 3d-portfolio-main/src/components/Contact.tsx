import { useState } from "react";
import { MdArrowOutward, MdCopyright, MdSend } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill out all fields.");
      return;
    }
    setStatus("Sending...");
    // Simulate sending message
    setTimeout(() => {
      setStatus("Message sent successfully! Thank you.");
      setFormData({ name: "", email: "", message: "" });
    }, 1200);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="https://www.linkedin.com/in/sujal-pokale-779074277/"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LinkedIn — sujal-pokale-779074277
              </a>
            </p>
            <h4>Education</h4>
            <p style={{ maxWidth: "320px" }}>
              B.Tech in Data Science, G H Raisoni College of Engineering and Management — 2022–Present
            </p>
            <p style={{ maxWidth: "320px" }}>
              HSC (12th Grade), Saraswati Uchcha Madhyamik Vidyalaya Junior College — 2020–2022
            </p>
          </div>

          <div className="contact-box contact-form-box">
            <h4>Direct Message</h4>
            <form onSubmit={handleSubmit} className="contact-form">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
              />
              <button type="submit" className="contact-submit-btn">
                Send Message <MdSend />
              </button>
              {status && <p className="form-status-msg">{status}</p>}
            </form>
          </div>

          <div className="contact-box contact-social-box">
            <h4>Social</h4>
            <a
              href="https://github.com/sujalpokale"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/sujal-pokale-779074277/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            <div className="contact-credits">
              <h2>
                Designed and Developed <br /> by <span>Sujal Pokale</span>
              </h2>
              <h5>
                <MdCopyright /> 2026
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
