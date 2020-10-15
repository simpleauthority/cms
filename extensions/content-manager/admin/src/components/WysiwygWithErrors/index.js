/**
 *
 * WysiwygWithErrors
 * modified for EditorJS
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Editor from '../EditorJS'

// eslint-disable-next-line react/prefer-stateless-function
class WysiwygWithErrors extends React.Component {
  render() {
    const {
      autoFocus,
      className,
      deactivateErrorHighlight,
      disabled,
      error: inputError,
      inputClassName,
      inputDescription,
      inputStyle,
      label,
      name,
      onBlur: handleBlur,
      onChange,
      placeholder,
      resetProps,
      style,
      tabIndex,
      validations,
      value,
      ...rest
    } = this.props;

    return (
        <Editor name={name} value={value} onChange={onChange} />
    );
  }
}

WysiwygWithErrors.defaultProps = {
  autoFocus: false,
  className: '',
  deactivateErrorHighlight: false,
  didCheckErrors: false,
  disabled: false,
  error: null,
  inputClassName: '',
  inputDescription: '',
  inputStyle: {},
  label: '',
  onBlur: false,
  placeholder: '',
  resetProps: false,
  style: {},
  tabIndex: '0',
  validations: {},
  value: null,
};

WysiwygWithErrors.propTypes = {
  autoFocus: PropTypes.bool,
  className: PropTypes.string,
  deactivateErrorHighlight: PropTypes.bool,
  didCheckErrors: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  inputClassName: PropTypes.string,
  inputDescription: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.shape({
      id: PropTypes.string,
      params: PropTypes.object,
    }),
  ]),
  inputStyle: PropTypes.object,
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.shape({
      id: PropTypes.string,
      params: PropTypes.object,
    }),
  ]),
  name: PropTypes.string.isRequired,
  onBlur: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  resetProps: PropTypes.bool,
  style: PropTypes.object,
  tabIndex: PropTypes.string,
  validations: PropTypes.object,
  value: PropTypes.string,
};

export default WysiwygWithErrors;