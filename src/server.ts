import { app } from "./app";

app.listen(process.env.server_port, () => {
  console.log(`Server is running on port ${process.env.server_port}`);
});
