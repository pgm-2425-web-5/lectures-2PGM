import "./PokeDetail.css";
import { getPokemonById } from "@core/modules/pokemon/api";
import Container from "@design/Container/Container";
import DescriptionList from "@design/DescriptionList/DescriptionList";
import DescriptionListItem from "@design/DescriptionList/Item/DescriptionListItem/DescriptionListItem";
import ErrorMessage from "@design/Error/ErrorMessage";
import ListItem from "@design/List/Item/ListItem";
import List from "@design/List/List";
import LoadingIndicator from "@design/Loading/LoadingIndicator";
import Title from "@design/Typography/Title";
import SpritesView from "@functional/Pokemon/SpritesView/SpritesView";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const PokeDetail = () => {
  const { id } = useParams();

  const { isLoading, isError, error, data } = useQuery({
    queryFn: () => getPokemonById(id),
    queryKey: ["pokemon", id],
  });

  if (isLoading) {
    return (
      <Container>
        <LoadingIndicator />
      </Container>
    );
  }

  if (isError) {
    return (
      <Container>
        <ErrorMessage error={error} />
      </Container>
    );
  }

  const { data: pokemon } = data;

  return (
    <Container>
      <Title level={1}>{pokemon.name}</Title>

      <SpritesView sprites={pokemon.sprites} alt={pokemon.name} />

      <DescriptionList>
        <DescriptionListItem label="Height" value={pokemon.height} />
        <DescriptionListItem label="Weight" value={pokemon.weight} />
        <DescriptionListItem label="Base experience" value={pokemon.base_experience} />
      </DescriptionList>

      <List className="audio-list" type="grid">
        {Object.values(pokemon.cries).map((cry, index) => (
          <ListItem key={index}>
            <audio controls>
              <source src={cry} type="audio/ogg" />
            </audio>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default PokeDetail;
