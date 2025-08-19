import contacts from "./data/contacts";

function Contact() {
  const contactItems = contacts.map((contact) => {
    return (
      <a
        key={contact.name}
        href={contact.link}
        target="_blank"
        className="font-medium text-gray-800 hover:text-gray-500 transition-colors underline underline-offset-1"
      >
        {contact.name}
      </a>
    );
  });
  return (
    <>
      <div className="text-md font-bold">links</div>
      <div className="flex flex-col gap-3">{contactItems}</div>
    </>
  );
}

export default Contact;
