import { useRef,useEffect,useState} from 'react';
import { useLocation } from 'react-router-dom'

function UpdateBooks(){
    const [book,setBook] = useState([]);
    
    const location = useLocation();
    var path = location.pathname;
    const bookId = path.split('/')[2];

    const BookName = useRef();
    const BookAuthor = useRef();
    const BookImageLink = useRef();
    const bookDescription = useRef();

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
            .then(data => setBook(data))
    }
    );

    function submitHandler() {
        const enteredBookName = BookName.current.value;
        const enteredBookAuthor = BookAuthor.current.value;
        const enteredBookImageLink = BookImageLink.current.value;
        const enteredbookDescription = bookDescription.current.value;

        const BookData = {
            bookName : enteredBookName,
            bookURL : enteredBookImageLink,
            bookDescription : enteredbookDescription,
            bookAuthor : enteredBookAuthor
        };

        console.log(BookData);

        fetch('http://localhost:8081/books', {
            method: 'POST',
            body: JSON.stringify(BookData),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(() => {
            alert('Book Added!!')
        })
    }


    return (
        <div>
            <h1>Add New Book</h1>
            <br />
            <form>
                <div className="form-row">
                    <div className="col">
                        <input type="text" ref={BookName} className="form-control" placeholder="Book Name" />
                    </div>
                    <div className="col">
                        <input type="text" ref={BookAuthor} className="form-control" placeholder="Book Author" />
                    </div>
                </div>
                <br />
                <div className="form-group">
                    <label for="exampleFormControlInput1">Book Image Link</label>
                    <input ref={BookImageLink} type="text" className="form-control" id="exampleFormControlInput1" />
                </div>
                <br />
                <div className="form-group">
                    <label for="exampleFormControlTextarea1">Book Description</label>
                    <textarea ref={bookDescription} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button onClick={submitHandler} type="submit" className="btn btn-primary mb-2">Add Book</button>
            </form>
        </div>
    )
}

export default UpdateBooks;