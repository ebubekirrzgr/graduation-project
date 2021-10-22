/* eslint-disable react/prop-types */
import './dropdown.scss';

import down from '../../assets/svg/down.svg';

function Dropdown({ options, title }) {
  return (
    <div className="dropdown">
      <div className="dropdown-select">
        <span className="select">{title}</span>
        <img src={down} alt="down" />
      </div>
      <div className="dropdown-list-container">
        <div className="dropdown-list">
          {options?.map((option) => (
            <div className="dropdown-list__item">
              <p>{option.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
