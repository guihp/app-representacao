import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
`;

export const Header = styled.View`
  flex-direction: column-reverse;
  margin: 50px;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderText = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-top: 25px;
`;

export const SubTitle = styled.Text`
  margin-top: 15px;
  font-size: 16px;
  color: #313131;
  opacity: 0.75;
  text-align: center;
`;

export const LogoContainer = styled.View`
  width: 80px;
  height: 80px;
  margin-bottom: 50px;
  margin-right: 16px;
`;

export const ContainerInputs = styled.View`
  margin-top: -28px;
  width: 90%;
`;

export const InputContainer = styled.View`
  margin-bottom: 15px;
`;

export const Input = styled.TextInput`
  font-size: 16px;
  background-color: #ffffff;
  border: 1px solid #79747e;
  border-radius: 8px;
  padding: 12px;
`;

export const LabelFloat = styled.Text`
  position: absolute;
  top: -8px;
  left: 12px;
  background-color: #ffffff;
  padding: 0 4px;
  font-size: 14px;
  color: #1c1b1f;
  z-index: 10;
`;

export const InputWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  border: 1px solid #79747e;
  border-radius: 8px;
  padding-left: 12px;
  padding-right: 12px;
  background-color: #fff;
`;


export const LoginButton = styled.TouchableOpacity`
  background-color: #FE8460;
  padding: 15px;
  border-radius: 8px;
  align-items: center;
  width: 90%;
  margin-top: 20px;
`;

export const LoginButtonText = styled.Text`
  color: white;
  font-size: 18px;
  font-weight: bold;
`;

export const SocialContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  width: 80%;
  margin-top: 15px;
`;

export const SocialButton = styled.TouchableOpacity`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

export const WordOfTheDayTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #FE8460;
  margin-top: 100px;
`;

export const BibleMessageContainer = styled.View`
  padding: 15px;
  border-radius: 8px;
  width: 90%;
  align-items: center;
`;

export const BibleMessageText = styled.Text`
  color: #000;
  font-size: 16px;
  text-align: center;
`;


export const CheckboxContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-top: -5px;
`;

export const CheckboxText = styled.Text`
  font-size: 16px;
  font-family: 'PoppinsRegular';
  margin-left: 8px;
  color: #000;
`;
