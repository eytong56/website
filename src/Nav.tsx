interface Section {
  title: string,
  href: string,
}

const sections : Section[] = [
  {
    title: "about",
    href: "#about",
  },
  {
    title: "projects",
    href: "#projects",
  },
  {
    title: "creative",
    href: "#creative",
  },
  {
    title: "contact",
    href: "#contact",
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
    <div className="hidden relative md:block w-60 min-w-30">
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
