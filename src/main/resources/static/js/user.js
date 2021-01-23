 let index={
 	init: function(){
 		$("#btn-save").on("click",()=>{
 			this.save();
 		});
 
 	init: function(){
 		$("#btn-update").on("click",()=>{
 			this.update();
 		});
 		
 	},
 	
 	save: function(){
 		//alert('유저의 세이브함수 호출됨');
 		let data={
 			username: $("#username").val(),
 			password: $("#password").val(),
 			email: $("#email").val()
 		};
 		
 		console.log(data);
 		
 		// 비동기가 디폴트
 		//ajax통신을 이용해서 3개의 데이터를 json으로 변경하여 인서트 요청
 		$.ajax({
 			type:"POST",
 			url:"/auth/joinProc",
 			data:JSON.stringify(data),
 			contentType:"application/json; charset=utf-8", //바디데이터 확인
 			dataType:"json" //응답은 기본적으로 string문자열 생긴게 json이면 자바스크로 응답해줌
 			
 		}).done(function(resp){
 			alert("회원가입이 완료되엇습니다");
 			//console.log(resp);
 			location.href="/";
 		}).fail(function(error){
 			alert(JSON.stringify(error));
 		});
 	
 	},
 	
 	update: function(){
 		let data={
 			id: $("#id").val(),
 			username: $("#username").val(),
 			password: $("#password").val(),
 			email: $("#email").val()
 		};
 		$.ajax({
 			type:"PUT",
 			url:"/user",
 			data:JSON.stringify(data),
 			contentType:"application/json; charset=utf-8", 
 			dataType:"json" 
 			
 		}).done(function(resp){
 			alert("회원수정이 완료되었습니다");
 			location.href="/";
 		}).fail(function(error){
 			alert(JSON.stringify(error));
 		});
 	
 	},
 	
 }
 
 index.init();