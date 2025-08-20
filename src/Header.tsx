import contacts from "./data/contacts";
import sections from "./data/nav";
import { ArrowUpRight } from "lucide-react";

function Header() {
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
  const navItems = sections.map((section) => {
    return (
      <a key={section.title} href={section.href} className="text-lg link group">
        {section.title}
        <span />
      </a>
    );
  });
  return (
    <>
    <div className="flex-col justify-start items-end h-[168px] hidden md:flex">{contactItems}</div>
    <div className="flex flex-row justify-between md:hidden">
      <h1 className="text-3xl font-bold text-emerald-700 tracking-tight mb-24">
          <a href="#">
            emma
            <br /> tong
          </a>
        </h1>
        <div className="flex flex-col items-end">
          {navItems}
        </div>
    </div>
    </>
  );
}

export default Header;
