import Link from "next/link";
import { navigation } from "../../config";

interface NavItem {
  title: string;
  link?: string;
  children?: NavItem[];
}

export const Navigation = () => {
  return (
    <div className="flex flex-col w-64 h-screen px-4 py-8 bg-white border-r border-black/10">
      {navigation.map((item) => (
        <NavItemComponent key={item.title} item={item} />
      ))}
    </div>
  );
};

const NavItemComponent = ({ item }: { item: NavItem }) => {
  const isExternalLink = item.link?.startsWith("http");

  return (
    <div>
      {item.link ? (
        isExternalLink ? (
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer flex items-center px-4 py-2 rounded-md text-black/60 hover:bg-primary-light/10 hover:text-primary"
          >
            {item.title}
          </a>
        ) : (
          <Link
            href={item.link}
            className="cursor-pointer flex items-center px-4 py-2 rounded-md text-black/60 hover:bg-primary-light/10 hover:text-primary"
          >
            {item.title}
          </Link>
        )
      ) : (
        <h2 className="px-4 py-2 mt-3 font-bold">{item.title}</h2>
      )}
      {item.children && item.children.length > 0 && (
        <div className="pl-4">
          {item.children.map((child) => (
            <NavItemComponent key={child.title} item={child} />
          ))}
        </div>
      )}
    </div>
  );
};
