"use client";
const {
  createContext,
  useContext,
  useState,
  useRef,
  useEffect,
} = require("react");

const NavigationContext = createContext();

export const NavigationContextProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const searchModalRef = useRef();
  const cartModalRef = useRef();

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = (event) => {
    setIsSidebarOpen(false);
  };

  const openSearchModal = () => {
    searchModalRef.current.showModal();
  };

  const closeSearchModal = () => {
    searchModalRef.current.close();
  };

  const openCartModal = () => {
    cartModalRef.current.showModal();
  };

  const closeCartModal = () => {
    cartModalRef.current.close();
  };

  return (
    <NavigationContext.Provider
      value={{
        isSidebarOpen,
        closeSidebar,
        openSidebar,
        searchModalRef,
        cartModalRef,
        openSearchModal,
        closeSearchModal,
        openCartModal,
        closeCartModal,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavGlobalContext = () => {
  return useContext(NavigationContext);
};
