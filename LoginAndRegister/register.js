$(function(){
	$("#exampleInputEmail1").blur(function(){
		var oValue = $("#exampleInputEmail1").val().replace(/\s+/g, "");
		$("#exampleInputEmail1").val(oValue);

		if($("#exampleInputEmail1").val() == ""){
			$("#p1").css({
				"display":"block",
				"color":"red"
			})
			$("#p1").html("用户名不能为空！");
		}else if($("#exampleInputEmail1").val().length < 6 || $("#exampleInputEmail1").val().length > 18){
			$("#p1").css({
				"display":"block",
				"color":"red"
			})
			$("#p1").html("用户名长度应为6-18位");
		}else if(/\W/.test($("#exampleInputEmail1").val())){
			$("#p1").css({
				"display":"block",
				"color":"red"
			})
			$("#p1").html("用户名须由数字、字母或下划线组成");
		}else{
			$("#p1").css({
				"display":"block",
				"color":"green"
			})
			$("#p1").html("√&nbsp;&nbsp;恭喜，该用户名可以注册！")
		}
		
	})
	
	$("#exampleInputPassword1").blur(function(){
		if(!$("#exampleInputPassword1").val()){
			$("#p2").css({
				"display":"block",
				"color":"red"
			})
			$("#p2").html("密码不能为空！");
		}else if($("#exampleInputPassword1").val().length < 6 || $("#exampleInputPassword1").val().length > 16){
			$("#p2").css({
				"display":"block",
				"color":"red"
			})
			$("#p2").html("密码长度应为6-16位！");
		}else{
			$("#p2").css({
				"display":"block",
				"color":"green"
			})
			$("#p2").html("密码输入正确");
		}
	})
	
	$("#exampleInputPassword2").blur(function(){
		if($("#exampleInputPassword1").val() == $("#exampleInputPassword2").val()){
			$("#p3").css({
				"display":"block",
				"color":"green"
			})
			$("#p3").html("两次密码输入一致")
		}else{
			$("#p3").css({
				"display":"block",
				"color":"red"
			})
			$("#p3").html("两次输入密码不一致，请重新输入")
		}
	})
	
	$("#exampleInputPhone").blur(function(){
		if(/^1[3|4|5|7|8][0-9]{9}$/.test($("#exampleInputPhone").val())){
			$("#p4").css({
				"display":"block",
				"color":"green"
			})
			$("#p4").html("手机号输入正确")
		}else{
			$("#p4").css({
				"display":"block",
				"color":"red"
			})
			$("#p4").html("手机号格式不正确，请重新输入")
		}
	})
})