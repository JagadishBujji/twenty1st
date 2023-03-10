const ContactForm = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    window.Email.send({
      SecureToken: "C973D7AD-F097-4B95-91F4-40ABC5567812",
      To: "ksanjay00197@gmail.com",
      From: "ksanjay00197@gmail.com",
      Subject: "This is the subject test",
      Body: "And this is the body test",
      Attachments: [
        {
          name: "smtpjs.png",
          path: "https://networkprogramming.files.wordpress.com/2017/11/smtpjs.png",
        },
      ],
    }).then((message) => alert(message));
  };

  return (
    <>
      <div className="row  m-auto container">
        <div className="col-md-12">
          <form>
            <label for="name" className="label">
              Name<span className="star">&lowast;</span>
            </label>

            <input
              type="text"
              id="name"
              name="name"
              //   placeholder="Your name.."
            />
            <label className="label" for="email">
              E-mail<span className="star">&lowast;</span>
            </label>
            <input
              type="text"
              id="email"
              name="email"
              //   placeholder="Your last name.."
            />
            <label className="label" for="phonenumber">
              Mobile Number<span className="star">&lowast;</span>
            </label>
            <input
              type="tel"
              id="phonenumber"
              name="phonenumber"
              //   placeholder="Your last name.."
            />
            <label className="label" for="country">
              Looking For<span className="star">&lowast;</span>
            </label>
            <select id="country" name="country">
              <option value="Design">Design</option>
              <option value="Digital & Social">Digital & Social</option>
              <option value="Advesting">Advesting</option>
              <option value="Filims & Production">Filims & Production</option>
            </select>
            <p>
              <label className="label" for="w3review">
                Comments
              </label>
            </p>
            <textarea
              id="w3review"
              name="w3review"
              rows="4"
              cols="50"
            ></textarea>
            <br />
            <input type="submit" value="Submit" onClick={sendEmail} />
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
