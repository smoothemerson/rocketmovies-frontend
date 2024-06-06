import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { Textarea } from "../../components/Textarea";
import { NoteItem } from "../../components/NoteItem";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

import { Container, Form } from "./styles";

import { IoMdArrowBack } from "react-icons/io";

import { api } from "../../services/api";

export function New() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [rating, setRating] = useState([]);

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  function handleAddTag() {
    setTags((prevState) => [...prevState, newTag]);
    setNewTag("");
  }

  function handleRemoveTag(deleted) {
    setTags((prevState) => prevState.filter((tag) => tag !== deleted));
  }

  async function handleNewNote() {
    if (!title) {
      return alert("Digite o título do filme");
    }

    if (!rating) {
      return alert(
        "Digite uma nota para o filme."
      );
    }

    if(newTag.length < 1 && tags.length < 1){
      return alert(
        "Digite uma tag."
      );
    }

    if (newTag) {
      return alert(
        "Você deixou uma tag no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio."
      );
    }

    await api.post("/movie_notes", {
      title,
      description,
      tags,
      rating,
    });

    alert("Nota de filme criado com sucesso!");
    navigate(-1);
  }

  async function handleRemove() {
    const confirm = window.confirm("Deseja realmente remover a nota?");

    if (confirm) {
      await api.delete(`/movie_notes/${params.id}`);
      navigate(-1);
    }
  }

  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <IoMdArrowBack onClick={handleBack} />
            <ButtonText title="voltar" onClick={handleBack} />
          </header>

          <h1>Novo filme</h1>

          <div id="movies">
            <Input
              placeholder="Título"
              onChange={(e) => setTitle(e.target.value)}
            />

            <Input
              placeholder="Sua nota (de 0 a 5)"
              onChange={(e) => setRating(e.target.value)}
            />
          </div>

          <Textarea
            placeholder="Observações"
            onChange={(e) => setDescription(e.target.value)}
          />

          <Section title="Marcadores" showNewNote={false}>
            <div className="tags">
              {tags.map((tag, index) => (
                <NoteItem
                  key={String(index)}
                  value={tag}
                  onClick={() => handleRemoveTag(tag)}
                />
              ))}
              <NoteItem
                $isNew
                placeholder="Nova tag"
                onChange={(e) => setNewTag(e.target.value)}
                value={newTag}
                onClick={handleAddTag}
              />
            </div>
          </Section>

          <div className="buttons">
            <Button exclude title="Excluir filme" onClick={handleRemove} />
            <Button title="Salvar" onClick={handleNewNote} />
          </div>
        </Form>
      </main>
    </Container>
  );
}
