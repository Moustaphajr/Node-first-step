const nodeMailer = require("nodemailer");
const html = `
<h1>Hello world</h1>
<p>Isn't NodeMaler useful</p>
`;
async function main() {
  nodeMailer.createTransport({
    host: "mail.openjavascript.info",
    port: 465,
    secure: true,
    auth: {
      user: "mouhamedjr2010@gmail.com",
      password: "passer",
    },
  });

  const info = await transporter.sendMail({
    from: "moustapha ",
    to: "mouhamedjr2012@gmail.com",
    subject: "Hello World ✔",
    html: html,
  });
}
console.log("message sent" + info.messageId);

main().catch((e) => console.log(e));
