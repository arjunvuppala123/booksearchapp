import { useEffect, useState } from 'react'
import "./AllBooks.css"

function AllBooks() {
    const [responseData, setResponseData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8081/books", {
            method: 'get',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
            },
            'credentials': 'same-origin'
        })
            .then(res => res.json())
            .then(data => setResponseData(data))
    })

    return (
        <div classNameName="container">
            <div classNameName="row">
                {
                    responseData && responseData?.map((book) => (
                        <div className="col-sm-4">
                            <div className="card">
                                <div className="card-header">
                                    {book.bookName}
                                </div>
                                <img className="card-img-top" src={book.bookURL} alt="Book" />
                                <div className="card-body">
                                    <blockquote className="blockquote mb-0">
                                        <p>{book.bookDescription}</p>
                                        <footer className="blockquote-footer">{book.bookAuthor}</footer>
                                    </blockquote>
                                </div>
                                <a class="btn btn-primary" href={"/books/" + book.id} role="button">Update Book</a>
                                <br />
                                <a class="btn btn-primary" href={"/books/" + book.id} role="button">Delete</a>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>

    )
}

export default AllBooks;