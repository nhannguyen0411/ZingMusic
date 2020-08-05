import { Input } from "antd";
import PropTypes from "prop-types";
import React from "react";

InputField.prototype = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
};

InputField.defaultProps = {
  type: "text",
  label: "",
  placeholder: "",
  disabled: false,
};

function InputField(props) {
  const { field, label, disabled, form, placeholder, type, icon } = props;
  const { errors, touched } = form;
  const { name } = field;
  const showError = errors[name] && touched[name];
  return (
    <div>
      <Input
        id={name}
        {...field}
        type={type}
        disabled={disabled}
        placeholder={placeholder}
        prefix={icon}
        invalid="true"
      />

      {showError && <p className="error-input">{errors[name]}</p>}
    </div>
  );
}

export default InputField;
