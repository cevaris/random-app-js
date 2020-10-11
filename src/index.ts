import { app } from "./app";

// start the server listening for requests
app.listen(process.env.PORT || 8080,
    () => console.log("Random API is running..."));