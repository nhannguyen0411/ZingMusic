// libs
import { Form, Input, Popover, Progress } from "antd";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { CloseCircleOutlined, CheckCircleOutlined } from "@ant-design/icons";
// others
import "./style.scss";

PasswordField.prototype = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
};

PasswordField.defaultProps = {
  type: "text",
  label: "",
  placeholder: "",
  disabled: false,
};

function PasswordField(props) {
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

  const [percent, setPercent] = useState(0);
  const { errors, touched } = form;
  const { name, value } = field;

  const submitted = submitCount > 0;
  const hasError = errors[name];
  const touchedErr = touched[name];
  const submittedError = hasError && submitted;
  const touchedError = hasError && touchedErr;

  const regexTest = (pattern, letters) => {
    if (pattern.test(letters)) {
      //percent < 75 && setPercent(percent + 25);
      return <CheckCircleOutlined style={{ color: "green" }} />;
    } else {
      //percent > 0 && setPercent(percent - 25);
      return <CloseCircleOutlined style={{ color: "red" }} />;
    }
  };

  const handleStrengthPassword = (
    <div className="strength-password-wrapper">
      <p>Your password must have:</p>
      <ul className="rules">
        <li>
          {regexTest(/(?=[A-Z])/, value)}
          At least a Uppercase letter
        </li>
        <li>{regexTest(/[a-z0-9]{8,}/, value)}8 or more characters</li>
        <li>
          {regexTest(/[a-z][0-9]/, value)}
          Contain both letters and numbers
        </li>
        <li>
          {regexTest(/^[a-zA-Z0-9]*\S$/, value)}
          Do not contain whitespace
        </li>
      </ul>
      <p>
        <Progress percent={0} size="small" showInfo={false} />
      </p>
    </div>
  );
  console.log(percent);
  return (
    <div className="block-input">
      <Form.Item
        hasFeedback={
          (hasFeedBack && submitted) || (hasFeedBack && touched) ? true : false
        }
        help={submittedError || touchedError ? hasError : false}
        validateStatus={submittedError || touchedError ? "error" : "success"}
      >
        <Popover
          placement="rightBottom"
          content={handleStrengthPassword}
          trigger="focus"
        >
          <Input
            id={name}
            {...field}
            type={type}
            disabled={disabled}
            placeholder={placeholder}
            prefix={icon}
          />
        </Popover>
      </Form.Item>
    </div>
  );
}

export default PasswordField;
