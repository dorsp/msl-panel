import { CircularProgress } from "@mui/material";

const Loading = () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        alignItems: "center",
        justifyContent: "center",
        display: "flex"
      }}
    >
      <CircularProgress />
    </div>
  );
};

export default Loading;
