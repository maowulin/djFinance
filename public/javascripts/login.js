
$(".login_btn").on("click", function(){
	var name = $(".name").val();
	var pass = $(".password").val();
	$.ajax({
		type  : "GET",
		url   : "/users/login",
		data  : {
			name     : name,
			password : pass
		},
		async:true,
		success : function(data){
			if(data.code == 200){
				window.location.href = "/manage";
			}
		},
		error   : function(e){
			console.log("失败");
		}
	});
	
	return false;
});

