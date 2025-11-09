import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <nav aria-label="breadcrumb" className="mb-6 overflow-x-auto scrollbar-hide">
      <ol className="flex items-center gap-1.5 md:gap-2 text-xs md:text-sm text-primary-foreground/70 whitespace-nowrap">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          
          return (
            <li key={index} className="flex items-center gap-1.5 md:gap-2 flex-shrink-0">
              {!isLast && item.href ? (
                <Link 
                  to={item.href} 
                  className="hover:text-primary-foreground transition-colors truncate"
                >
                  {item.label}
                </Link>
              ) : (
                <span className={isLast ? "text-primary-foreground font-medium truncate" : "truncate"}>
                  {item.label}
                </span>
              )}
              {!isLast && (
                <ChevronRight className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
