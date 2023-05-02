const { email } = require("../const");
const { listWish } = require("../models/wish");
const store = require("../store");
const { emailSender } = require("../utils/email");

const generateEmailHtml = (wishlist) => {
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

  if (wishToBeSent.length === 0) {
    console.info("No wish to be sent.");
    return;
  }

  const mailOptions = {
    from: email.from,
    to: email.to,
    subject: "sub",
    html: generateEmailHtml(wishToBeSent),
  };

  await emailSender(mailOptions);
};

module.exports = {
  sendEmail,
};
