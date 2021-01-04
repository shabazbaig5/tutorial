import React from 'react';
import ReactDom from 'react-dom';
import './index.css';



const bookList = [
  {
    bookTitle : "This is just a random book",
    img : "https://m.media-amazon.com/images/I/81l3rZK4lnL._AC_UY218_.jpg"
  },
  {
    bookTitle : "This is just a random book 2",
    img : "https://m.media-amazon.com/images/I/81l3rZK4lnL._AC_UY218_.jpg"
  },
  {
    bookTitle : "This is just a random book 3",
    img : "https://m.media-amazon.com/images/I/81l3rZK4lnL._AC_UY218_.jpg"
  }
]
const List = () => {

    return (
      <section className="books-grid">
       
        {bookList.map((book, index) => {
          const {img, bookTitle} = book;
          console.log(img);
          return <Book {...book} key={index}/>
        })
      }

      </section>
    )

}

const Book = ({img, bookTitle}) => {

  // console.log(props);
  // const {img, bookTitle} = props.book;
  console.log(bookTitle);
  return (
    <article className='book'>
      <img src={img} alt="book image" />
      <h4>{bookTitle}</h4>
      
    </article>
  )

}

ReactDom.render(<List />, document.getElementById('root'));