import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
const port = 3000;
const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  try {
    const response = await axios.get("https://v2.jokeapi.dev/joke/Any");
    const setup = response.data.setup;
    const delivery = response.data.delivery;
    console.log("setup: ",setup,"delivery: ", delivery);

    res.render("index.ejs", {
      question: setup,
      answer: delivery,
    });

  } catch (error) {
    console.error(error.message);
  }
});

app.listen(port, () => {
  console.log(`server is live at ${port}`);
});
