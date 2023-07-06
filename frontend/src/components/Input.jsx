import {InputField} from "govuk-react";
import PropTypes from "prop-types";

Input.propTypes = {
  hint: PropTypes.string,
  text: PropTypes.string,
  type: PropTypes.string,
  group: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string
}

function Input({hint, text, type, group, onChange, value}) {
  return (
    <>
      <InputField
        value={value}
        onChange={onChange}
        hint={<>{hint}</>}
        input={{
          name: group,
          type: type
        }}
      >
        {text}
      </InputField>
    </>
  );
}

export default Input;