import contacts from "../data/contacts";
import { ArrowUpRight } from "lucide-react";

function Contact() {
  const contactItems = contacts.map((contact) => {
    return (
      <div>
        <a
          key={contact.name}
          href={contact.link}
          target="_blank"
          className="font-semibold link group"
        >
          {contact.name} <ArrowUpRight className="inline w-5 h-5"/>
          <span />
        </a>
      </div>
    );
  });
  return (
    <>
      <div className="text-md font-bold">links</div>
      <div className="flex flex-col gap-3 col-span-3">{contactItems}</div>
    </>
  );
}

export default Contact;
