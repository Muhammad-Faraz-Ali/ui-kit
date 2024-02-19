import "./App.css";
import Button from "./components/ui/Button";
import Typography from "./components/ui/Typography";

function App() {
  const onClickHandler = () => {
    console.log("Hello I'm here");
  };
  return (
    <>
      <div>Hello -UI-Kit</div>
      {/* <Button
        text="Click me"
        onClick={onClickHandler}
        isDisabled
        style={{ width: "100%", backgroundColor: "red" }}
      /> */}
      <Typography variant="h1" color="red">
        Im typography-v-h1
      </Typography>
      <Typography variant="h2" color="pink">
        Im typography-v-h2
      </Typography>
      <Typography variant="h3" color="green">
        Im typography-v-h3
      </Typography>
      <Typography variant="h4">Im typography-v-h4</Typography>
      <Typography variant="h5">Im typography-v-h5</Typography>
      <Typography variant="h6">Im typography-v-h6</Typography>
      <Typography variant="body1">Im typography-v-body1</Typography>
      <Typography variant="body1" uppercase={true}>
        Im typography-v-body2
      </Typography>
    </>
  );
}

export default App;
