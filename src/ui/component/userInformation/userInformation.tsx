import { SystemProps } from "@material-ui/system";
import {
  AvatarStyled,
  UserDescription,
  UserInformationContainer,
  UserName,
  UserTitle,
} from "./userInformation.styled";

export interface UserInformationProps {
  name: string;
  title: string;
  picture: string;
  description?: string;
  isDoctor?: boolean;
  sx?: SystemProps;
}

const UserInformation: React.FC<UserInformationProps> = ({
  name,
  title,
  picture,
  description,
  isDoctor,
  sx,
  ...props
}) => (
  <UserInformationContainer sx={sx} isDoctor={isDoctor} data-aos="fade-up">
    <AvatarStyled src={picture}>{name[0]}</AvatarStyled>
    <UserName>{name}</UserName>
    <UserTitle>{title}</UserTitle>
    <UserDescription>{description}</UserDescription>
  </UserInformationContainer>
);

export default UserInformation;
