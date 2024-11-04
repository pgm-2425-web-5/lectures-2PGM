import Button from "@design/Button/Button";
import Input from "@design/Form/Input/Input";
import Label from "@design/Form/Label/Label";

const PostForm = () => {
  return (
    <form onSubmit={() => console.log("todo")}>
      <Label htmlFor="title">Title</Label>
      <Input name="title" id="title" />
      <Label htmlFor="title">Body</Label>
      <Input name="body" id="body" multipleLines={true} />
      <Button type="submit">Create</Button>
    </form>
  );
};

export default PostForm;
