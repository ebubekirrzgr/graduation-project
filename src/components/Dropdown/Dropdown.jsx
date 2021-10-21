import './dropdown.scss';

import down from '../../assets/svg/down.svg';

function Dropdown() {
  return (
    <div className="dropdown">
      <div className="dropdown-select">
        <span className="select">Marka</span>
        <img src={down} alt="down" />
      </div>
      <div className="dropdown-list-container">
        <div className="dropdown-list">
          <div className="dropdown-list__item">
            <p>Apple</p>
          </div>
          <div className="dropdown-list__item">
            <p>Samsung</p>
          </div>
          <div className="dropdown-list__item">
            <p>Huawei</p>
          </div>
          <div className="dropdown-list__item">
            <p>Xiaomi</p>
          </div>
          <div className="dropdown-list__item">
            <p>Redmi</p>
          </div>
          <div className="dropdown-list__item">
            <p>LG</p>
          </div>
          <div className="dropdown-list__item">
            <p>Nokia</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
