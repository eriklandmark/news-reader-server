import * as express from "express"
import * as path from "path";

const app = express();

app.use(express.static('public'))

app.get("/", (request, response) => {
    response.sendFile(path.join(__dirname, "./app.html"))
})

app.listen({port: 5000, host: "0.0.0.0"}, () => {
    console.log(`Server ready at 0.0.0.0:` + 5000);
});