import contacts from "../data/contacts";
import { ArrowUpRight } from "lucide-react";

function ContactHeader() {
  const contactItems = contacts.map((contact) => {
    return (
      <a
        key={contact.name}
        href={contact.link}
        target="_blank"
        className="font-medium link group"
      >
        {contact.name} <ArrowUpRight className="inline w-5 h-5"/>
        <span />
      </a>
    );
  });
  return (
    <div className="flex flex-col justify-start items-end h-[168px]">{contactItems}</div>
  );
}

export default ContactHeader;
