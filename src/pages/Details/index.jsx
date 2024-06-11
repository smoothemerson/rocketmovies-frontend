import { useState, useEffect } from "react";
import { Container, Content } from "./styles";
import { useParams, useNavigate } from "react-router-dom";

import { api } from "../../services/api";

import { useAuth } from "../../hooks/auth";

import { Tags } from "../../components/Tags";
import { Header } from "../../components/Header";

import { FaClock } from "react-icons/fa";
import { FiArrowLeft } from "react-icons/fi";
import StarImg from "../../assets/star.svg";
import StarImgDisable from "../../assets/stardisable.svg";
import avatar_placeholder from "../../assets/avatar_placeholder.svg";

export function Details() {
  const { user } = useAuth();

  const [data, setData] = useState(null);

  const params = useParams();
  const navigate = useNavigate();

  const avatarURL = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatar_placeholder;

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <img
          key={i}
          src={i <= data.rating ? StarImg : StarImgDisable}
          alt="Avaliação do filme"
        />
      );
    }
    return stars;
  };

  function handleBack() {
    navigate(-1);
  }

  async function handleRemove() {
    const confirm = window.confirm("Deseja realmente remover a nota?");

    if (confirm) {
      await api.delete(`/movie_notes/${params.id}`);
      navigate(-1);
    }
  }

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/movie_notes/${params.id}`);
      setData(response.data);
    }

    fetchNote();
  }, []);

  return (
    <Container>
      <Header />

      {data && (
        <main>
          <Content>
            <header>
              <FiArrowLeft />
              <button onClick={handleBack}>Voltar</button>
            </header>

            <div className="title">
              <h1>{data.title}</h1>
              <div>{renderStars(data.rating)}</div>
              <button className="button" onClick={handleRemove}>Excluir filme</button>
            </div>

            <div className="author">
              <img src={avatarURL} alt="{data.name}" />

              <p>Por {user.name}</p>

              <FaClock />

              <p>{user.updated_at}</p>
            </div>

            {data.tags && <Tags data={data.tags} />}

            <p id="p">{data.description}</p>
          </Content>
        </main>
      )}
    </Container>
  );
}
