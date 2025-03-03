interface HamburgerMenuProps {
  isOpen: boolean;
  onClick: () => void;
}

export const HamburgerMenu = ({ isOpen, onClick }: HamburgerMenuProps) => {
  return (
    <button
      onClick={onClick}
      className="fixed top-6 right-6 z-50 p-3 backdrop-blur-sm bg-zinc-800/80 rounded-full hover:bg-zinc-700/80 transition-colors"
    >
      <div className="relative w-6 h-6 flex items-center justify-center">
        <span
          className={`absolute h-[2px] w-6 bg-white transform transition-all duration-300 ease-in-out 
            ${isOpen ? "rotate-45" : "-translate-y-2"}`}
        />
        <span
          className={`absolute h-[2px] w-6 bg-white transform transition-all duration-300 ease-in-out 
            ${isOpen ? "opacity-0" : "opacity-100"}`}
        />
        <span
          className={`absolute h-[2px] w-6 bg-white transform transition-all duration-300 ease-in-out 
            ${isOpen ? "-rotate-45" : "translate-y-2"}`}
        />
      </div>
    </button>
  );
};
