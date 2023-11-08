import React from "react";
import locationModule from "./location.module.css";
function Location() {
  return (
    <div className={locationModule.location}>
      <iframe
        className={locationModule.frame}
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=lebanon,%20tripoli+(HotelXpress)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      >
        <a href="https://www.maps.ie/population/">Population mapping</a>
      </iframe>
      <div className={locationModule.contactUs}>
        <div className={locationModule.left}>
          <h1 className={locationModule.header}>Location Of Our Company</h1>
          <p className={locationModule.text}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's{" "}
          </p>
        </div>
        <div className={locationModule.right}>
          <input
            className={locationModule.input}
            placeholder="Enter your email"
          />
          <button className={locationModule.btn}>
            <a
              className={locationModule.wp}
              href="https://api.whatsapp.com/send?phone=0096176153425"
              target="_blank"
            >
              Contact
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Location;
