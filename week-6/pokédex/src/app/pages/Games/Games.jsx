import { getGames } from "@core/modules/games/api";
import Container from "@design/Container/Container";
import ErrorMessage from "@design/Error/ErrorMessage";
import List from "@design/List/List";
import ListItem from "@design/List/Item/ListItem";
import LoadingIndicator from "@design/Loading/LoadingIndicator";
import Title from "@design/Typography/Title";
import { useQuery } from "@tanstack/react-query";

const Games = () => {
  const { isLoading, isError, error, data } = useQuery({
    queryFn: getGames,
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

  const { data: games } = data;

  return (
    <Container>
      <Title level={1}>Games</Title>
      <List>
        <ListItem>
          <List type="grid">
            {games.results.map((game) => (
              <ListItem key={game.id}>{game.name}</ListItem>
            ))}
          </List>
        </ListItem>
      </List>
    </Container>
  );
};

export default Games;
