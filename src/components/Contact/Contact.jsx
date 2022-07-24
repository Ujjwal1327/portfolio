import { useState } from "react";
import "./Contact.scss";
export default function Contact() {
  const [email, setemail] = useState("");
  const [reply, setReply] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const submitForm = () => {
    if (email.trim().length === 0 || message.trim().length === 0) {
      setReply(
        <p className="warning">
          <sup>*</sup> Enter the details carefully
        </p>
      );
    } else {
      setReply(<p className="success">I will reply ASAP</p>);
    }
  };
  const remove = () => {
    setReply("");
  };
  return (
    <div className="contact" id="Contact">
      <div className="left">
        <img
          src="https://raw.githubusercontent.com/safak/youtube/da700015c8a88050fad7b961e99a7039638ab3b2/public/assets/shake.svg"
          alt=""
        />
      </div>
      <div className="right">
        <h2>Contact</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onFocus={remove}
            placeholder="Enter Your Email"
            value={email}
            onChange={(event) => {
              setemail(event.target.value);
            }}
          />
          <textarea
            placeholder="message"
            onFocus={remove}
            value={message}
            onChange={(event) => {
              setMessage(event.target.value);
            }}
          ></textarea>
          <button type="submit" onClick={submitForm}>
            Send
          </button>
        </form>
        {reply}
      </div>
    </div>
  );
}
