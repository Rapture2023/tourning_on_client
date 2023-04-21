import React from "react";

import NavBar from "../components/NavBar";
import NewNavbar from "../components/NewNavbar/NewNavbar";
import Footer from "../components/Footer";
const PrivacyPolicy = () => {
  return (
    <div>
      {/* <NavBar></NavBar> */}
      <NewNavbar />
      <div
        className="text-info post text-center "
        style={{ marginTop: "7rem" }}
      >
        <h1>Privacy Policy</h1>
      </div>

      <div>
        <p className="text-secondary my-margin40">
          We respect your privacy and recognize the need to protect the
          personally identifiable information (any information by which you can
          be identified, such as name, address, and telephone number) you share
          with us. We would like to assure you that we follow appropriate
          standards when it comes to protecting your privacy on our website.
        </p>
        <p className="text-secondary my-margin40">
          Some of our web pages use "cookies'' so that we can better serve you
          with customized information when you return to our site. Cookies are
          identifiers which websites send to the browser on your computer to
          facilitate your next visit to our site. You can set your browser to
          notify you when you are sent a cookie, giving you the option to decide
          whether or not to accept it. The information we collect and analyze is
          used to improve our service to you.
        </p>
        <p className="text-secondary my-margin40">
          With specific reference to third party advertising, we use third-party
          service providers to serve ads on our behalf across the Internet and
          sometimes on this site. They may collect anonymous information about
          your visits to our website, and your interaction with our products and
          services. They may also use information about your visits to this and
          other websites to target advertisements for goods and services. This
          anonymous information is collected through the use of a 'pixel tag',
          which is industry standard technology used by most major websites.
        </p>
        <p className="text-danger my-margin40">
          No personally identifiable information is collected or used in this
          process. Such third parties do not know your name, phone number,
          address, email address, or any personally identifying information.
        </p>
        <p className="text-secondary my-margin40">
          like more information about this practice and to know your choices
          about not having this anonymous information used by our third-party
          service provider, with specific reference to booking/e-commerce
          transactions, tourning on collects the following personal sensitive
          information from you while transacting through tourning on , this
          includes your Name and Sex, Phone Number, Billing Address, Credit Card
          details and Date of birth in case of a child.
        </p>
        <p className="text-secondary my-margin40">
          tourning on does not sell or trade upon any of the above foregoing
          information without the consent of the user or customer.
        </p>
        <p className="text-secondary my-margin40">
          The foregoing information collected from the users/customers/travelers
          is put to the following use:
        </p>
        <p className="text-secondary my-margin40">
          Customer name, address, phone number, traveller's name and age are
          shared with applicable service providers like the airlines, hotels,
          etc., for the purpose of reservation and booking the services for the
          customer/traveller. Information like Credit Card Details and Net
          Banking Details are usually collected directly by the payment gateways
          and banks and not by tourning on, but if ever stored or retained by
          us, the data will be stored internally, secured and is never shared,
          except that they may be shared with third party private/government
          security agencies to screen for fraudulent activities. These details
          are also shared with certain third parties only for the purpose of
          processing 'Cash Back & Discounts'. Information like Phone number,
          E-mail address and billing address may be used for promotional
          purposes, unless the customer/user has unsubscribed from such
          services. If you choose not to share this information, you can still
          visit the tourning on website, but you may be unable to access certain
          options, offers and services.
        </p>

        <p className="text-secondary my-margin40">
          tourning on takes appropriate steps to protect the information you
          share with us. We have implemented technology and security features
          and strict policy guidelines to safeguard the privacy of your
          personally identifiable information from unauthorized access and
          improper use or disclosure. Please contact us on mail@tourningon.com
          to obtain names and addresses of the specific entities that shall have
          access to your personal information in a given transaction.
        </p>
        <p className="text-secondary my-margin40">
          Tourning on LLC will continue to enhance its security procedures as
          new technology becomes available, and ensures that its security
          procedures are compliant with current applicable regulations. If our
          privacy policy changes in the future, it will be posted here and a new
          effective date will be shown. You should access our privacy policy
          regularly to ensure you understand our current policies.
        </p>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};
export default PrivacyPolicy;
