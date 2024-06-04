import { useNavigate } from "react-router-dom";

import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

import { useAuth } from "../../hooks/auth";

import { Container, Profile, Logout } from "./style";

import { api } from "../../services/api";

export function Header() {
  const { signOut, user } = useAuth();
  const navigation = useNavigate();

  function handleSignOut() {
    navigation("/");
    signOut();
  }

  const avatarURL = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  return (
    <Container>
      <Profile to="/profile">
        <div>
          <strong>{user.name}</strong>
          <Logout onClick={handleSignOut}>
            <span>sair</span>
          </Logout>
        </div>

        <img src={avatarURL} alt="{user.name}" />
      </Profile>
    </Container>
  );
}
