import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav
      className="text-sm text-gray-500 mb-6"
      aria-label="パンくずリスト"
    >
      <ol
        className="flex flex-wrap items-center gap-1"
        itemScope
        itemType="https://schema.org/BreadcrumbList"
      >
        <li
          itemScope
          itemType="https://schema.org/ListItem"
          itemProp="itemListElement"
        >
          <Link
            href="/"
            className="hover:text-[#1E40AF] transition-colors"
            itemProp="item"
          >
            <span itemProp="name">TOP</span>
          </Link>
          <meta itemProp="position" content="1" />
        </li>
        {items.map((item, index) => (
          <li
            key={index}
            className="flex items-center gap-1"
            itemScope
            itemType="https://schema.org/ListItem"
            itemProp="itemListElement"
          >
            <span className="text-gray-400">›</span>
            {item.href ? (
              <Link
                href={item.href}
                className="hover:text-[#1E40AF] transition-colors"
                itemProp="item"
              >
                <span itemProp="name">{item.label}</span>
              </Link>
            ) : (
              <span className="text-gray-700 font-medium" itemProp="name">
                {item.label}
              </span>
            )}
            <meta itemProp="position" content={String(index + 2)} />
          </li>
        ))}
      </ol>
    </nav>
  );
}
