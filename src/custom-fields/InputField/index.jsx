// libs
import { Input, Form } from "antd";
import PropTypes from "prop-types";
import React from "react";
// others
import "./styles.scss";

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
  const {
    field,
    disabled,
    form,
    placeholder,
    type,
    icon,
    submitCount,
    hasFeedBack,
  } = props;

  const { errors, touched } = form;
  const { name } = field;

  const submitted = submitCount > 0;
  const hasError = errors[name];
  const touchedErr = touched[name];
  const submittedError = hasError && submitted;
  const touchedError = hasError && touchedErr;

  //const showError = errors[name] && touched[name];
  return (
    <div className="block-input">
      {/* <Input
        id={name}
        {...field}
        type={type}
        disabled={disabled}
        placeholder={placeholder}
        prefix={icon}
      /> */}
      <Form.Item
        hasFeedback={
          (hasFeedBack && submitted) || (hasFeedBack && touched) ? true : false
        }
        help={submittedError || touchedError ? hasError : false}
        validateStatus={submittedError || touchedError ? "error" : "success"}
      >
        <Input
          id={name}
          {...field}
          type={type}
          disabled={disabled}
          placeholder={placeholder}
          prefix={icon}
        />
      </Form.Item>
    </div>
  );
}

export default InputField;
