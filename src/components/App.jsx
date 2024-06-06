import Product from "./Product.jsx";
import Mailbox from './Mailbox.jsx';
import Book from "./Book.jsx";
import Alert from "./Alert.jsx";

const messages = ['hola', 'hi', 'adios'];

const booksArr = [
  { id: "id-1", name: "JS for beginners" },
  { id: "id-2", name: "React basics" },
  { id: "id-3", name: "React Router overview new" }
];

export default function App() {
  return (
    <div>
      <h2>Alerts</h2>
      <Alert variant="info" outlined={true} >Please update your email!</Alert>
      <Alert variant="error">There was an error during transaction!</Alert>
      <Alert variant="success">Payment received, thank you for your purchase!</Alert>
      <Alert variant="warning" elevated={true} >Reload the page to apply changes!</Alert>
      <h2>Books of the week</h2>
      <Book books={booksArr} />
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
      <Product
        name="Fish and Chips"
        price={9.59}
      />
    </div>
    
  );
}
