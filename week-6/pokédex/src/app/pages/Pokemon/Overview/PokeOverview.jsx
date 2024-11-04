import { getPokemon } from "@core/modules/pokemon/api";
import { getIdFromUrl } from "@core/modules/pokemon/utils";
import Container from "@design/Container/Container";
import ErrorMessage from "@design/Error/ErrorMessage";
import List from "@design/List/List";
import ListItem from "@design/List/Item/ListItem";
import LoadingIndicator from "@design/Loading/LoadingIndicator";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import Title from "@design/Typography/Title";

const PokeOverview = () => {
  const { isLoading, isError, error, data } = useQuery({
    queryFn: getPokemon,
    queryKey: ["pokemon"],
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
      <Title level={1}>Pokémon</Title>
      <List type="grid">
        {pokemon.results.map((poke) => (
          <ListItem key={poke.url}>
            <Link to={`/pokemon/${getIdFromUrl(poke.url)}`}>{poke.name}</Link>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default PokeOverview;
