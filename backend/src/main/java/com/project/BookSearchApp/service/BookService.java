package com.project.BookSearchApp.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.BookSearchApp.models.Book;
import com.project.BookSearchApp.repository.BookRepository;

@Service
@Transactional
public class BookService {
	@Autowired
	private BookRepository repo;
	
	public List<Book> getAllBooks(){
		return repo.findAll();
	}
	
	public Book save(Book book) {
		repo.save(book);
		return book;
	}
	
	public Book getBookById(long id) {
		return repo.findById(id).get();
	}
	
	public void deleteBook(long id) {
		repo.deleteById(id);
	}
	
	public Book updateBook(Book book,long id) {
		repo.save(book);
		return book;
	}
}
