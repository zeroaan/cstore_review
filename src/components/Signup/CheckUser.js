import React from "react"
import { Text, TouchableOpacity } from "react-native"
import styled from "styled-components"

const TouchableOpacityStyled = styled(TouchableOpacity)`
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.disabled ? "rgb(200,200,200)" : "rgb(0, 175, 175)"};
  padding: 0px 10px;
`
const TextStyled = styled(Text)`
  color: rgb(255, 255, 255);
  font-size: 14px;
`

const MyTextInput = ({ checked, disabled, ...props }) => {
  return (
    <>
      <TouchableOpacityStyled
        activeOpacity={0.7}
        disabled={disabled}
        {...props}>
        <TextStyled>{checked ? "확인완료" : "중복확인"}</TextStyled>
      </TouchableOpacityStyled>
    </>
  )
}

export default MyTextInput
