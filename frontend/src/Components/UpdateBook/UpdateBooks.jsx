import { useEffect,useState} from 'react';
import { useLocation } from 'react-router-dom'

function UpdateBooks(){
    const [bookName,setBookName] = useState('');
    const [bookAuthor,setBookAuthor] = useState('');
    const [BookImageLink,setBookImageLink] = useState('');
    const [bookDescription,setBookDescription] = useState('');

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
                setBookName(data.bookName);
                setBookAuthor(data.bookAuthor);
                setBookImageLink(data.bookURL);
                setBookDescription(data.bookDescription);
            })
    },[bookName,bookAuthor,BookImageLink,bookDescription]);

    function onChangeBookDescription(e){
        e.preventDefault();
        setBookDescription(e.target.value);
    }

    function onChangeBookName(e) {
        e.preventDefault();
        setBookName(e.target.value);
    }

    function onChangeBookAuthor(e) {
        e.preventDefault();
        setBookAuthor(e.target.value);
    }

    function onChangeBookImageLink(e) {
        e.preventDefault();
        setBookImageLink(e.target.value);
    }

    function submitHandler() {
        const enteredBookName = bookName;
        const enteredBookAuthor = bookAuthor;
        const enteredBookImageLink = BookImageLink;
        const enteredbookDescription = bookDescription;

        const BookData = {
            bookName : enteredBookName,
            bookURL : enteredBookImageLink,
            bookDescription : enteredbookDescription,
            bookAuthor : enteredBookAuthor
        };

        console.log(BookData);

        fetch("http://localhost:8081/books/"+bookId, {
            method: 'PUT',
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
            <h1>Update Book</h1>
            <br />
            <form>
                <div className="form-row">
                    <div className="col">
                        <input type="text" onChange={e => setBookName(e.target.value)} value={bookName} className="form-control" placeholder="Book Name" />
                    </div>
                    <div className="col">
                        <input type="text" onChange={onChangeBookAuthor} value={bookAuthor} className="form-control" placeholder="Book Author" />
                    </div>
                </div>
                <br />
                <div className="form-group">
                    <label for="exampleFormControlInput1">Book Image Link</label>
                    <input onChange={onChangeBookImageLink} value={BookImageLink} type="text" className="form-control" id="exampleFormControlInput1" />
                </div>
                <br />
                <div className="form-group">
                    <label for="exampleFormControlTextarea1">Book Description</label>
                    <textarea onChange={onChangeBookDescription} value={bookDescription} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button onClick={submitHandler} type="submit" className="btn btn-primary mb-2">Add Book</button>
            </form>
        </div>
    )
}

export default UpdateBooks;