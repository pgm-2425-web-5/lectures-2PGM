import { getPosts } from "@core/modules/posts/api";
import Container from "@design/Container/Container";
import ErrorMessage from "@design/Error/ErrorMessage";
import List from "@design/List/List";
import ListItem from "@design/List/Item/ListItem";
import LoadingIndicator from "@design/Loading/LoadingIndicator";
import Title from "@design/Typography/Title";
import { useQuery } from "@tanstack/react-query";
import Button from "@design/Button/Button";

const Posts = () => {
  const { isLoading, isError, error, data } = useQuery({
    queryFn: getPosts,
    queryKey: ["posts"],
  });

  console.log(data);

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

  const { data: posts } = data;

  return (
    <Container>
      <Title level={1}>Posts</Title>
      <Button to={"/posts/create"}>Create post</Button>
      <List>
        <ListItem>
          <List>
            {posts.map((post) => (
              <ListItem key={post.id}>{post.title}</ListItem>
            ))}
          </List>
        </ListItem>
      </List>
    </Container>
  );
};

export default Posts;
