package com.project.BookSearchApp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.project.BookSearchApp.models.Book;
import com.project.BookSearchApp.service.BookService;

@RestController
public class BookController {
	@Autowired
	private BookService service;
	
	@RequestMapping("/books")
	public List<Book> getBooks(){
		return service.getAllBooks();
	}
	
	@RequestMapping("/books/{id}")
	public Book getBookById(@PathVariable long id) {
		return service.getBookById(id);
	}
	
	@RequestMapping(method=RequestMethod.POST,value="/books")
	public void insertBook(@RequestBody Book book) {
		service.save(book);
	}
	
	@RequestMapping(method=RequestMethod.PUT,value="/books/{id}")
	public void updateBook(@RequestBody Book book,@PathVariable long id) {
		service.updateBook(book, id);
	}
	@RequestMapping(method=RequestMethod.DELETE, value= "/books/{id}")
	public void deleteBook(@PathVariable long id) {
        service.deleteBook(id);
	}
}
