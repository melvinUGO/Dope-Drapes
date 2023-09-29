import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

type searchInputProp = {
  outline?: Boolean;
  searchedItem?: string;
  closeSidebar?: () => void;
  closeSearchModal?: () => void;
};

const SearchInput = ({
  outline = false,
  searchedItem,
  closeSidebar,
  closeSearchModal,
}: searchInputProp) => {
  const [searchItem, setSearchItem] = useState(
    searchedItem ? searchedItem : ""
  );
  const router = useRouter();

  const searchProduct = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (location.href.includes("search")) {
      router.push("/search/" + searchItem);
      return;
    }
    if (closeSidebar) {
      closeSidebar();
    }
    if (closeSearchModal) {
      closeSearchModal();
    }
    router.push("/search/" + searchItem);
  };
  return (
    <form
      onSubmit={searchProduct}
      className={` ${
        outline ? "border border-black dark:border-[#666666] p-3" : ""
      } flex items-center max-w-[600px] mx-auto`}
    >
      <input
        type="text"
        className="border-0 grow outline-none dark:bg-transparent"
        placeholder="Search our store..."
        value={searchItem}
        onChange={(e) => setSearchItem(e.target.value)}
      />
      <button type="submit">
        <FiSearch className="dark:text-[#FFFFFF]" />
      </button>
    </form>
  );
};

export default SearchInput;
