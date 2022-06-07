package com.project.BookSearchApp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.BookSearchApp.models.Book;

@Repository
public interface BookRepository extends JpaRepository<Book,Long>{
}
