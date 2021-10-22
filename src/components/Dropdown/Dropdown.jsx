/* eslint-disable react/prop-types */
import './dropdown.scss';

import down from '../../assets/svg/down.svg';

function Dropdown({ options, title, value, setDropdown }) {
  const selectOption = (item) => {
    setDropdown(item);
  };
  return (
    <div className="dropdown">
      <div className="dropdown-select">
        <span className="select">
          {value.title.length > 0 ? value.title : title}
        </span>
        <img src={down} alt="down" />
      </div>
      <div className="dropdown-list-container">
        <div className="dropdown-list">
          {options?.map((option) => (
            <div
              aria-hidden="true"
              onClick={() => {
                selectOption(option);
              }}
              key={option.title}
              className="dropdown-list__item"
            >
              <p>{option.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
