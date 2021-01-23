package com.cos.blog.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cos.blog.model.Board;
import com.cos.blog.model.Reply;
import com.cos.blog.model.RoleType;
import com.cos.blog.model.User;
import com.cos.blog.repository.ReplyRepository;
import com.cos.blog.repository.UserRepository;
import com.cos.blog.repository.boardRepository;

@Service
public class BoardService {

	@Autowired
	private boardRepository boardRepository;
	
	@Autowired
	private ReplyRepository replyRepository;

	@Transactional
	public void 글쓰기(Board board, User user) { // title content
		board.setCount(0);
		board.setUser(user);
		boardRepository.save(board);
	}

	@Transactional(readOnly = true)
	public Page<Board> 글목록(Pageable pageable) {
		return boardRepository.findAll(pageable);
	}

	@Transactional(readOnly = true)
	public Board 글상세보기(int id) {
		return boardRepository.findById(id).orElseThrow(() -> {
			return new IllegalArgumentException("글 상세보기 실페 : 아이디를 찾을수 없습니다");
		});
	}

	@Transactional
	public void 글삭제하기(int id) {
		boardRepository.deleteById(id);
	}
	
	@Transactional
	public void 글수정하기(int id, Board requestBoard) {
		Board board = boardRepository.findById(id)
		  .orElseThrow(() -> {
			return new IllegalArgumentException("글 찾기 실페 : 아이디를 찾을수 없습니다");
		});
		board.setTitle(requestBoard.getTitle());
		board.setContent(requestBoard.getContent());
	}
	
	@Transactional
	public void 댓글쓰기(User user, int boardId, Reply requestreply) {
		
		Board board = boardRepository.findById(boardId).orElseThrow(()->{
			return new IllegalArgumentException("댓글쓰기 실패 - id를 찾을수 없음");
		});
		
		requestreply.setUser(user);
		requestreply.setBoard(board);
		
		replyRepository.save(requestreply);
	}
}
