 let index={
 	init: function(){
 		$("#btn-save").on("click",()=>{
 			this.save();
 		});
 		
 			$("#btn-delete").on("click",()=>{
 			this.deleteById();
 		});
 		
 		$("#btn-update").on("click",()=>{
 			this.update();
 		});
 		
 		$("#btn-reply-save").on("click",()=>{
 			this.replySave();
 		});
 
 	},
 	
 	//저장처리
 	save: function(){
 		//alert('유저의 세이브함수 호출됨');
 		let data={
 			title: $("#title").val(),
 			content: $("#content").val(),

 		};
 		
 		console.log(data);
 		
 		// 비동기가 디폴트
 		//ajax통신을 이용해서 3개의 데이터를 json으로 변경하여 인서트 요청
 		$.ajax({
 			type:"POST",
 			url:"/api/board",
 			data:JSON.stringify(data),
 			contentType:"application/json; charset=utf-8", //바디데이터 확인
 			dataType:"json" //응답은 기본적으로 string문자열 생긴게 json이면 자바스크로 응답해줌
 			
 		}).done(function(resp){
 			alert("글쓰기가 완료되엇습니다");
 			location.href="/";
 		}).fail(function(error){
 			alert(JSON.stringify(error));
 		});
 	
 	},
 	
 	//삭제처리
 	deleteById: function(){
 		let id = $("#id").text();
 		$.ajax({
 			type:"DELETE",
 			url:"/api/board/"+id,
 			dataType:"json" 
 		}).done(function(resp){
 			alert("삭제가 완료되엇습니다");
 			location.href="/";
 		}).fail(function(error){
 			alert(JSON.stringify(error));
 		});
 	
 	},
 	
 	//수정처리
 	update: function(){
 		let id =$("#id").val();
 	
 		let data={
 			title: $("#title").val(),
 			content: $("#content").val()
 		};

 		$.ajax({
 			type:"PUT",
 			url:"/api/board/"+id,
 			data:JSON.stringify(data),
 			contentType:"application/json; charset=utf-8", 
 			dataType:"json" 
 		}).done(function(resp){
 			alert("글수정이 완료되엇습니다");
 			location.href="/";
 		}).fail(function(error){
 			alert(JSON.stringify(error));
 		});
 	
 },
	 replySave: function(){
	 		let data={
	 			content: $("#reply-content").val() 
	 		};
	 		
	 		let boardId = ${"#boardId"}.val();
	
	 		console.log(data);
	 		
	 		$.ajax({
	 			type:"POST",
	 			url:'/api/board/${boardId}/reply',
	 			data:JSON.stringify(data),
	 			contentType:"application/json; charset=utf-8", 
	 			dataType:"json" 
	 		}).done(function(resp){
	 			alert("댓글작성이 완료되엇습니다");
	 			location.href='/board/${boardId}';
	 		}).fail(function(error){
	 			alert(JSON.stringify(error));
	 		});
 	
 	}
 
 index.init();