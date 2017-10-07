$(function(){
	$(".img_upload").change(function(){
		var img = this.files[0];
		var formData = new FormData();
		formData.append("myfile", img);
		
		var xhr = new XMLHttpRequest();
		xhr.open('POST', '/users/upload', true);
		xhr.onload = function(e){
			if(this.status == 200){
				console.log("上传成功");
			}
		};
		xhr.send(formData);
	});
});
