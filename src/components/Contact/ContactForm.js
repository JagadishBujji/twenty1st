import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const validateEmail = (inputmail) => {
    return inputmail.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  function validatePhone(phone) {
    var regx = /^[5-9]\d{9}$/;
    if (regx.test(phone)) return true;
    else return false;
  }

  const sendSubscribeMail = (event) => {
    event.preventDefault();
    console.log("sendSubscrpmail");
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phonenumber");
    const services = document.getElementById("services");
    const message = document.getElementById("message");
    // const  = document.getElementById("service");
    //
    // if(email.value.length <= 0 || subject.value.length <= 0 || body.value.length <= 0) {
    if (
      name.value.length <= 0 ||
      email.value.length <= 0 ||
      phone.value.length <= 0 ||
      message.value.length <= 0
    ) {
      alert("Enter Valid Details!!!");
    } else if (!validateEmail(email.value)) {
      alert("InValid Email...");
    } else if (!validatePhone(phone.value)) {
      alert("InValid Phone Number...");
    } else {
      console.log("sendSubscrpmail");
      var templateParams = {
        name: name.value,
        to_name: "twentyones't",
        email: email.value,
        mobile: phone.value,
        service: services.value,
        comments: message.value,
      };
      emailjs
        .send(
          "contact_service",
          "contact_template",
          templateParams,
          "VXdrY4FZjeHjCftxp"
        )
        .then(
          function (response) {
            console.log("SUCCESS!", response.status, response.text);
            alert("Thank you, we will contact you asap!!!");
            name.value = "";
            email.value = "";
            phone.value = "";
            message.value = "";
            services.value = "";
          },
          function (error) {
            console.log("FAILED...", error);
            alert(error);
          }
        );
    }
  };

  return (
    <>
      <div className="row  m-auto container">
        <div className="col-md-12">
          <form className="d-flex flex-wrap m-auto w-75 text-left">
            <label htmlFor="name" className="label">
              Name<span className="star">&lowast;</span>
            </label>

            <input
              type="text"
              id="name"
              name="name"
              //   placeholder="Your name.."
            />
            <label className="label" htmlFor="email">
              E-mail<span className="star">&lowast;</span>
            </label>
            <input
              type="text"
              id="email"
              name="email"
              //   placeholder="Your last name.."
            />
            <label className="label" htmlFor="phonenumber">
              Mobile Number<span className="star">&lowast;</span>
            </label>
            <input
              type="tel"
              id="phonenumber"
              name="phonenumber"
              //   placeholder="Your last name.."
            />
            <label className="label" htmlFor="services">
              Looking For<span className="star">&lowast;</span>
            </label>
            <select id="services" name="services">
              <option value="Design">Design</option>
              <option value="Digital & Social">Digital & Social</option>
              <option value="Advesting">Advesting</option>
              <option value="Filims & Production">Filims & Production</option>
            </select>
            <label className="label" htmlFor="message">
              Comments
            </label>
            <textarea id="message" name="message" rows="4" cols="50"></textarea>
            <br />
            <input className="m-auto" type="submit" value="Submit" onClick={sendSubscribeMail} />
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
