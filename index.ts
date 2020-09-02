import * as express from "express"
import * as path from "path";

const app = express();

app.get("/", (request, response) => {
    response.sendFile(path.join(__dirname, "./app.html"))
})

app.get("/test", (request, response) => {
    response.send("Hello World")
})

app.listen({port: 5000, host: "0.0.0.0"}, () => {
    console.log(`Server ready at 0.0.0.0:` + 5000);
});