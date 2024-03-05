import { useEffect, useRef, useState } from "react"
import arrow from '../assets/arrowRight.svg'
import cls from './Select.module.css'

const menuItems = ["Account", "Wallet", "Bonuses", "Bets", "History",];

const Select = () => {
  const [selected, setSelected] = useState(menuItems[0]);
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef();

  const handleClick = (item) => {
    setSelected(item);
    setIsOpen(false);
  };

  const handleOutsideClick = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [dropdownRef]);

  return (
    <div className={cls.dropdown} ref={dropdownRef}>
      <button
        className={cls.dropdownButton}
        onClick={() => setIsOpen(!isOpen)}
      >
        {selected}
      </button>
      {isOpen && (
        <ul className={cls.dropdownMenu}>
          {menuItems?.map((item, key) => (
            <li key={item+key} onClick={() => handleClick(item)}>
              {item}
              <img src={arrow} alt='arrow'/>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Select;
