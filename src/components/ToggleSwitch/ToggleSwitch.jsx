/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import './toggleSwitch.scss';

import React from 'react';

function ToggleSwitch({ values, setValues, handleChange }) {
  return (
    <div className="toggle-switch">
      <input
        type="checkbox"
        className="toggle-switch-checkbox"
        name="toggleSwitch"
        id="toggleSwitch"
        onChange={() => {
          setValues({ ...values, isOfferable: !values.isOfferable });
          handleChange();
        }}
      />
      <label className="toggle-switch-label" htmlFor="toggleSwitch">
        <span className="toggle-switch-inner" />
        <span className="toggle-switch-switch" />
      </label>
    </div>
  );
}

export default ToggleSwitch;
