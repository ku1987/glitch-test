const { email } = require("../const");
const store = require("../store");
const { listWish } = require("../models/wish");
const { emailSender } = require("../utils/email");

const generateEmailHtml = (wishlist) => {
  if (wishlist.length === 0) {
    return "<p>There is no request to send a gift.</p>";
  }

  const htmlContent = `
  <p>Here is a list of items:</p>
  <ul>
  ${wishlist
    .map(
      (item) =>
        `<li>
        <ul>
          <li>${item.username}</li>
          <li>${item.address}</li>
          <li>${item.wishText}</li>
        </ul>
      </li>`
    )
    .join("")}
  </ul>
`;
  return htmlContent;
};

const sendEmail = async () => {
  const wishlist = await listWish(store);
  const wishToBeSent = Array.from(wishlist).filter(
    (wish) => !wish.is_processed
  );
  const mailOptions = {
    from: email.from,
    to: email.to,
    subject: "sub",
    html: generateEmailHtml(wishToBeSent),
  };

  const result = await emailSender(mailOptions);
  return result.messageId;
};

module.exports = {
  sendEmail,
};
