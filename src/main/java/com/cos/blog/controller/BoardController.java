package com.cos.blog.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.cos.blog.config.auth.PrincipalDetail;
import com.cos.blog.repository.boardRepository;
import com.cos.blog.service.BoardService;

@Controller
public class BoardController {

	@Autowired
	private BoardService BoardService;
	
	@GetMapping({"","/"})
	public String index(Model model, @PageableDefault(size=3, sort="id",direction=Sort.Direction.DESC) Pageable pageable) {
		model.addAttribute("boards",BoardService.글목록(pageable));
		return "index";
	}
	
	@GetMapping("/board/{id}")
	public String findById(@PathVariable int id, Model model) {
		model.addAttribute("board",BoardService.글상세보기(id));
		return "board/detail";
	}
	
	@GetMapping("/board/{id}/updateForm")
	public String updateForm(@PathVariable int id ,Model model) {
		model.addAttribute("board", BoardService.글상세보기(id));
		return "/board/updateForm";
	}
	
	@GetMapping("board/saveForm")
	public String saveform() {
		return "board/saveForm";
	}
}
