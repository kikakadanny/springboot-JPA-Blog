package com.cos.blog.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.cdi.JpaRepositoryExtension;

import com.cos.blog.model.Reply;

public interface ReplyRepository extends JpaRepository<Reply,Integer>{
	
}
