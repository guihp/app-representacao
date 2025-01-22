import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #f5f5f5;
`;

export const Container2 = styled.View`
  flex: 1;
  background-color: #f5f5f5;
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 30px;
  padding-bottom: 20px;
`;
export const Header = styled.View`
  width: 100%;
  height: 125px;
  background-color: #ff7e5f;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  padding-top: 40px;
`;

export const HeaderTitle = styled.Text`
  font-size: 20px;
  color: white;
  font-weight: bold;
`;

export const BackButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;

export const FormContainer = styled.View`
  margin-bottom: 20px;
`;

export const Input = styled.TextInput`
  background-color: white;
  padding: 10px;
  margin-vertical: 5px;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

export const ActionButton = styled.TouchableOpacity<{ color?: string }>`
  background-color: ${(props) => props.color || '#0056d2'};
  padding: 15px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`;

export const ActionButtonText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
`;

export const IndustryCard = styled.View`
  background-color: white;
  margin-bottom: 15px;
  padding: 15px;
  border-radius: 10px;
  border: 1px solid #ddd;
`;

export const IndustryName = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const ProgressContainer = styled.View`
  margin-top: 10px;
`;
export const ProgressText = styled.Text`
  font-size: 14px;
  margin-bottom: 5px;
`;
