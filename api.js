import axios from "axios";

const api = axios.create({
  baseURL: "http://slowpoke.desigens.com/json/",
  timeout: 6000,
  // withCredentials: true
});

export async function GetDATAOne(req, res, next) {
  req.DATAOne = await api.get('1/10000')
    .then(function (response) {
      // console.log(response.data);
      return (response.data)
    })
    .catch(function (error) {
      // return ([{title: 'time out'}])
      console.log('error', error);
    })
  next()
}
export async function GetDATATwo(req, res, next) {
  req.DATATwo = await api.get('2/3000')
    .then(function (response) {
      return (response.data);
    })
    .catch(function (error) {
      console.log('error', error);
    })
  next()
}