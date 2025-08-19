interface Section {
  title: string,
  href: string,
}

const sections : Section[] = [
  {
    title: "about",
    href: "#",
  },
  {
    title: "projects",
    href: "#",
  },
  {
    title: "contact",
    href: "#",
  },
];

function Nav() {
  const navItems = sections.map((section) => {
    return (
      <a
        key={section.title}
        href={section.href}
        className="text-xl link group"
      >
        {section.title}
        <span />
      </a>
    );
  });
  return (
    <div className="relative w-60 min-w-30">
      <div className="sticky top-12">
        <h1 className="text-3xl font-bold text-emerald-700 tracking-tight mb-24">
          <a href="#">
            emma
            <br /> tong
          </a>
        </h1>
        <div className="flex flex-col gap-4 items-end">{navItems}</div>
      </div>
    </div>
  );
}

export default Nav;
