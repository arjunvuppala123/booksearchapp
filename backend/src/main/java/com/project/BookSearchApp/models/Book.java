package com.project.BookSearchApp.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Book {
	@Id
	private long id;
	private String bookName;
	private String bookURL;
	private String bookDescription;
	private String bookAuthor;
	
	public Book() {
	}
	
	public Book(long id, String bookName, String bookURL, String bookDescription, String bookAuthor) {
		super();
		this.id = id;
		this.bookName = bookName;
		this.bookURL = bookURL;
		this.bookDescription = bookDescription;
		this.bookAuthor = bookAuthor;
	}
	
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public long getId() {
		return id;
	}
	
	public void setId(long id) {
		this.id = id;
	}
	
	public String getBookName() {
		return bookName;
	}
	
	public void setBookName(String bookName) {
		this.bookName = bookName;
	}
	
	public String getBookURL() {
		return bookURL;
	}
	
	public void setBookURL(String bookURL) {
		this.bookURL = bookURL;
	}
	
	public String getBookDescription() {
		return bookDescription;
	}
	
	public void setBookDescription(String bookDescription) {
		this.bookDescription = bookDescription;
	}
	
	public String getBookAuthor() {
		return bookAuthor;
	}
	
	public void setBookAuthor(String bookAuthor) {
		this.bookAuthor = bookAuthor;
	}
}
