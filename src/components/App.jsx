import Product from "./Product.jsx";
import Mailbox from "./Mailbox.jsx";
import Book from "./Book.jsx";
import Alert from "./Alert.jsx";
import UserMenu from "./UserMenu.jsx";
import Button from "./Button.jsx";
import CommonCounter from "./CommonCounter";
import TextUpdate from "./TextUpdate";
import ModalHandler from "./ModalHandler.jsx";
import Clicker from "./Clicker.jsx";
import Form from "../tabs/module_3/Form.jsx";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import SearchBar from "../tabs/module_3/Searchbar.jsx";
import LangSwitcher from "../tabs/module_3/LangSwitcher.jsx";
import { useState, useEffect } from "react";
import Radio from "../tabs/module_3/Radio.jsx";
import Checkbox from "../tabs/module_3/Checkbox.jsx";
import ControlledForm from "../tabs/module_3/ControlledForm.jsx";
import BookForm from "../tabs/module_3/BookFilter/BookForm.jsx";
import BookList from "../tabs/module_3/BookFilter/BookList.jsx";
import BookFilter from "../tabs/module_3/BookFilter/BookFilter.jsx";
import initialBooks from "../tabs/module_3/BookFilter/books.json";
import FeedbackForm from "../tabs/module_3/FeedbackForm.jsx";
import NewsPage from "../tabs/module_4/NewsPage.jsx";
import { fetchArticlesWithTopic } from "../api/articles-api.js";
import ArticleSearchForm from "../tabs/module_4/ArticleSearchForm.jsx";
import Planets from "../tabs/module_4/Planets";
import VideoPlayer from "../tabs/module_4/VideoPlayer.jsx";
import ToggleModalA from "../tabs/module_4/ToggleModalA.jsx";
import ToggleModalB from "../tabs/module_4/ToggleModalB.jsx";
import UserLogMenu from "../tabs/module_4/UserLogMenu.jsx";

const messages = ["hola", "hi", "adios"];

const booksArr = [
  { id: "id-1", name: "JS for beginners" },
  { id: "id-2", name: "React basics" },
  { id: "id-3", name: "React Router overview new" },
];

export default function App() {
  const [lang, setLang] = useState("en");
  const [books, setBooks] = useState(initialBooks);
  const [filter, setFilter] = useState("");

  const handleLogin = (userData) => {
    console.log(userData);
  };

  const addBook = (newBook) => {
    setBooks((prevBooks) => {
      return [...prevBooks, newBook];
    });
  };

  const deleteBook = (bookId) => {
    setBooks((prevBooks) => {
      return prevBooks.filter((book) => book.id !== bookId);
    });
  };

  const visibleBooks = books.filter((book) =>
    book.text.toLowerCase().includes(filter.toLowerCase())
  );

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // useEffect(() => {
  //   async function fetchArticles() {
  //     try {
  //       setLoading(true);
  //       const data = await fetchArticlesWithTopic("react");
  //       setArticles(data);
  //     } catch (error) {
  //       console.log(error);
  //       setError(true);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }
  //   fetchArticles();
  // }, []);

  const handleSearch = async (topic) => {
    try {
      setArticles([]);
      setError(false);
      setLoading(true);
      const data = await fetchArticlesWithTopic(topic);
      setArticles(data);
    } catch (error) {
      setError(true);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Tabs>
        <TabList>
          <Tab>Module 4</Tab>
          <Tab>Module 3</Tab>
          <Tab>Module 1-2</Tab>
        </TabList>
        <TabPanel>
          <h2>User Menu</h2>
          <UserLogMenu />
          <h2>Toggle Modals</h2>
          <ToggleModalA />
          <ToggleModalB />
          <h2>VideoPlayer</h2>
          <VideoPlayer source="http://media.w3.org/2010/05/sintel/trailer.mp4" />
          <h2>Planets</h2>
          <Planets />
          <h2>News Page</h2>
          <ArticleSearchForm handleSearch={handleSearch} />
          {loading && <p>Loading, please wait...</p>}
          {error && (
            <p>Whoops, something went wrong! Please try reloading this page!</p>
          )}
          {articles.length > 0 && <NewsPage articles={articles} />}
        </TabPanel>
        <TabPanel>
          <h2>Feedback Form</h2>
          <FeedbackForm />
          <h2>Book Filter</h2>
          <div className="bookBox">
            <BookForm addBook={addBook} />
            <BookFilter filter={filter} setFilter={setFilter} />
            <BookList books={visibleBooks} deleteBook={deleteBook} />
          </div>
          <h2>Controlled Form</h2>
          <ControlledForm />
          <h2>Checkbox</h2>
          <Checkbox />
          <h2>Radio</h2>
          <Radio />
          <h2>Language Switcher</h2>
          <p>Selected language is: {lang}</p>
          <LangSwitcher value={lang} onSelect={setLang} />
          <h2>Search Bar</h2>
          <SearchBar />
          <h2>Form: Login to your Account!</h2>
          <Form onLogin={handleLogin} />
        </TabPanel>

        <TabPanel>
          <h2>User Menu</h2>
          <UserMenu name="Anastasiia" />
          <h2>Alerts</h2>
          <Alert variant="info" outlined={true}>
            Please update your email!
          </Alert>
          <Alert variant="error">There was an error during transaction!</Alert>
          <Alert variant="success">
            Payment received, thank you for your purchase!
          </Alert>
          <Alert variant="warning" elevated={true}>
            Reload the page to apply changes!
          </Alert>
          <h2>Books of the week</h2>
          <Book books={booksArr} />
          <h2>Clicker</h2>
          <Clicker />
          <h2>Modal Handler</h2>
          <ModalHandler />
          <h2>Text Update</h2>
          <TextUpdate />
          <h2>Common Counter</h2>
          <CommonCounter />
          <h2>Button</h2>
          <Button message="I say meow" />
          <h2>Mailbox</h2>
          <Mailbox username="Henry" messages={messages} />
          <h2>Best selling</h2>
          <Product
            name="Tacos With Lime"
            imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
            price={10.99}
          />
          <Product
            name="Fries and Burger"
            imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
            price={14.29}
          />
          <Product name="Fish and Chips" price={9.59} />
        </TabPanel>
      </Tabs>
    </>
  );
}
