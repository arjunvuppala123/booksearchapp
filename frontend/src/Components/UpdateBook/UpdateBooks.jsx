import { useEffect,useState,useRef} from 'react';
import { useLocation } from 'react-router-dom'

function UpdateBooks(){
    const [book,setBook] = useState({})

    const bookName = useRef();
    const bookAuthor = useRef();
    const bookDescription = useRef();
    const BookImageLink = useRef();

    const location = useLocation();
    var path = location.pathname;
    const bookId = path.split('/')[2];

    useEffect(() => {
        fetch("http://localhost:8081/books/"+bookId, {
            method: 'get',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
            },
            'credentials': 'same-origin'
        })
            .then(res => res.json())
            .then(data => {
                setBook(data);
            })
    },[bookName,bookAuthor,BookImageLink,bookDescription,bookId]);

    function submitHandler() {
        const enteredBookName = bookName.current.value  ;
        const enteredBookAuthor = bookAuthor.current.value;
        const enteredBookImageLink = book.bookURL;
        const enteredbookDescription = bookDescription.current.value;

        const BookData = {
            bookId : book.id,
            bookName : enteredBookName,
            bookURL : enteredBookImageLink,
            bookDescription : enteredbookDescription,
            bookAuthor : enteredBookAuthor
        };

        console.log(JSON.stringify(BookData),"http://localhost:8081/books/"+bookId);

        fetch("http://localhost:8081/books/"+bookId, {
            method: 'PUT',
            body: JSON.stringify(BookData),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(() => {
            alert('Book Updated!!')
        })
        .catch(err => {
            alert(err);
        });
    }


    return (
        <div>
            <h1>Update Book</h1>
            <p>Kindly enter the same details if they need to remain the same</p>
            <br />
            <form action={"http://localhost:3000/books/"+{bookId}} method="PUT">
                <div className="form-row">
                    <div className="col">
                        <input type="text" ref={bookName} className="form-control" placeholder={book.bookName} />
                    </div>
                    <div className="col">
                        <input type="text" ref={bookAuthor} className="form-control" placeholder={book.bookAuthor} />
                    </div>
                </div>
                <br />
                <div className="form-group">
                    <label for="exampleFormControlInput1">Book Image Link</label>
                    <input value={book.bookURL} placeholder={book.bookURL} type="text" className="form-control" id="exampleFormControlInput1" readOnly/>
                </div>
                <br />
                <div className="form-group">
                    <label for="exampleFormControlTextarea1">Book Description</label>
                    <textarea ref={bookDescription} placeholder={book.bookDescription} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button onClick={submitHandler} type="submit" className="btn btn-primary mb-2">Update Book</button>
            </form>
        </div>
    )
}

export default UpdateBooks;