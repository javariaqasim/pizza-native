import React from 'react';
import {TextInput} from 'react-native';
import styles from '../styling';

function SMTextField(props) {
  const {label, onChangeText, value, disabled, keyboardType} = props;
  return (
    <>
      <TextInput
        style={[styles.input, styles.border1]}
        keyboardType={keyboardType}
        editable={!disabled}
        value={value}
        placeholderTextColor={styles._dark}
        placeholder={label}
        onChangeText={onChangeText}
      />
    </>
  );
}
export default SMTextField;
