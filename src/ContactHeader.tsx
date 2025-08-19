import contacts from "./data/contacts";

function ContactHeader() {
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
    <div className="flex flex-col justify-start items-end h-[168px]">{contactItems}</div>
  );
}

export default ContactHeader;
