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
import { format, parseISO } from "date-fns";
import { AnimatePresence, motion } from "framer-motion";

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

  const timestamp = "2024-02-07T09:30:00Z";

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: "1rem" }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
        exit={{ opacity: 0 }}
      >
        <Container>
          <p>Timestamp test: {format(parseISO(timestamp, new Date()), "dd/MM/yyyy 'in kwartaal ' Q")}</p>
          <Title level={1}>Pokémon</Title>
          <List type="grid">
            {pokemon.results.map((poke) => (
              <ListItem key={poke.url}>
                <Link to={`/pokemon/${getIdFromUrl(poke.url)}`}>{poke.name}</Link>
              </ListItem>
            ))}
          </List>
        </Container>
      </motion.div>
    </AnimatePresence>
  );
};

export default PokeOverview;
