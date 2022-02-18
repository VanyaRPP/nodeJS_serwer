import express from "express";
import { GetDATAOne, GetDATATwo } from "./api.js";

const PORT = process.env.PORT || 3000;
const app = express();

const error = [{title: "Eror", description: 'не дождались новостей', ptime: new Date()}]

app.set('view engine', 'ejs')


app.use(GetDATAOne)
app.use(GetDATATwo)

app.get('/', (req, res) => {
  console.log('sdfsdfsfsffssfdfsd:', req.DATAOne);
  res.render('index', { title: 'Home', dataOne: req.DATAOne==undefined?error:req.DATAOne, dataTwo: req.DATATwo||['no mana']})
})

app.listen(PORT, () => {
  console.log(`Server has been listening on ${PORT}...`);
});