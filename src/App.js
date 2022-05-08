import logo from './logo.svg';
import './App.css';
import Navsimmi from './component/Navsimmi';
import NewsContent from "./component/NewsContent/NewsContent";
import { useEffect, useState } from "react";
import axios from 'axios';
import Footer from './component/Footer/Footer';
function App() {

  const [ category, setCategory] = useState("general");
  const[newsArray, setNewsArray] = useState([]);
  const[newsResults, setNewsResults] = useState();
  const [loadmore, setLoadmore] = useState(20);


  const newsApi = async () => {
    try {
      const news = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=59e965e03c724e51973b341fd1540382&category=${category}&pageSize=${loadmore}`);
      setNewsArray(news.data.articles);
      setNewsResults(news.data.totalResults);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(()=>{
    newsApi();
  }, [newsResults, category, loadmore]);
  return (
    <div className="App">
      <Navsimmi setCategory={setCategory}/>
      <NewsContent
      setLoadmore= {setLoadmore}
      loadmore={loadmore}
      newsArray= {newsArray}  newsResults= {newsResults}/>
      <Footer/>

    </div>
  );
}

export default App;
