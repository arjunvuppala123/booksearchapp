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

    function deleteHandler(id) {
        fetch("http://localhost:8081/books/" + id, {
            method: 'delete',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
            },
            'credentials': 'same-origin'
        })
            .then(res => res.json())
            .then(data => setResponseData(data))
    }

    return (
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Book Name</th>
                    <th scope="col">Book Image</th>
                    <th scope="col">Book Author</th>
                    <th scope="col">Book Desciption</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            {
                responseData && responseData?.map((book) => (
                        <tr>
                        <th scope="row">{book.id}</th>
                        <td><img src={book.bookURL} alt="Book" /></td>
                        <td>{book.bookName}</td>
                        <td>{book.bookAuthor}</td>
                        <td>@{book.bookDescription}</td>
                        <td><a class="btn btn-primary" href={"/books/" + book.id} role="button">Update Book</a></td>
                        <td><a class="btn btn-primary" onClick={() => deleteHandler(book.id)} href="/" role="button">Delete</a></td>
                      </tr>
                ))
            }
        </table >

    )
}

export default AllBooks;