"use client"; //for interactivity for the Input element
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { useState, useEffect } from "react";

// Define the properties expected by the LocalSearch component
interface SearchProps {
  route: string;
  imgSrc: string;
  placeholder: string;
  otherClasses?: string;
}

// LocalSearch component for handling search input and updating the URL query
const LocalSearch = ({
  route,
  imgSrc,
  placeholder,
  otherClasses,
}: SearchProps) => {
  // Get the current search parameters from the URL
  const searchParams = useSearchParams();
  // Extract the 'query' value from URL parameters, defaulting to an empty string
  const query = searchParams.get("query") || "";
  // Get the current URL path
  const pathname = usePathname();
  // Access the router's replace function to update the URL without adding to history
  const { replace } = useRouter();
  // Maintain a local state for the search input to ensure it is controlled and responsive. Avoiding to reset itself and letting me to type more than 1 letter
  const [searchQuery, setSearchQuery] = useState(query);

  // Debounced callback to update the URL with the search term after 300ms of inactivity
  const handleSearch = useDebouncedCallback((term: string) => {
    // Utility for manipulating the URL query parameters
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`, { scroll: false });
  }, 300);

  useEffect(() => {
    setSearchQuery(query);
  }, [query]);

  return (
    <div className="background-light800_darkgradient flex min-h-11.5 grow items-center gap-4 rounded-[10px] px-4">
      <Image
        src={imgSrc}
        alt="Search"
        width={24}
        height={24}
        className="cursor-pointer"
      />
      <Input
        className={`paragraph-regular no-focus placeholder text-dark400_light700 border-none shadow-none outline-none ${otherClasses}`}
        placeholder={placeholder}
        type="text"
        value={searchQuery}
        onChange={(event) => {
          setSearchQuery(event.target.value);
          handleSearch(event.target.value);
        }}
      />
    </div>
  );
};
export default LocalSearch;
