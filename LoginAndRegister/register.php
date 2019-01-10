<?php 
	header("content-type:text/html;charset=utf-8");

	$username = $_POST["username"];
	$password = $_POST["password"];
	$passwordAgain = $_POST["passwordAgain"];
	$phoneNumber = $_POST["phoneNumber"];

	$link = mysql_connect("localhost", "root", "123456");

	if(!$link){
		echo "连接数据库失败";
		exit;
	}

	mysql_set_charset("utf8");


	mysql_select_db("register");



	$sql = "INSERT INTO  user(username ,password,passwordAgain,phoneNumber)
			VALUES ( '{$username}',  '{$password}',  '{$passwordAgain}',  '{$phoneNumber}');";


	$res = mysql_query($sql);

	if($res){
		echo "注册成功";
	}else{
		echo "注册失败";
	}


	mysql_close($link);
?>