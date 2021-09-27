import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';

import colors from '../../screens/OTPVerification/colors';
import {GenericStyles} from '../../screens/OTPVerification/GenericStyles';

const CustomTextInput = function (props) {
  const {
    containerStyle,
    style,
    LeftComponent,
    RightComponent,
    refCallback,
    ...remainingProps
  } = props;

  return (
    <View style={[styles.containerStyle, containerStyle]}>
      {LeftComponent}
      <TextInput
        {...remainingProps}
        style={[styles.textInputStyle, GenericStyles.fill, style]}
        ref={refCallback}
      />
      {RightComponent}
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: 'row',
    borderColor: colors.WHITE_GREY,
    borderWidth: 1,
    borderRadius: 4,
    padding: 8,
  },
  textInputStyle: {
    padding: 0,
  },
});

CustomTextInput.defaultProps = {
  LeftComponent: <></>,
  RightComponent: <></>,
};

export default CustomTextInput;
