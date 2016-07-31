<?php 
error_reporting(0);
	@$mysqli=new mysqli("rm-bp141vy5cuynml8ef.mysql.rds.aliyuncs.com","ro8tpmfe8f","Alibaba1234567890","ro8tpmfe8f");
	if($mysqli->connect_errno){ 
		die($mysqli->connect_error);
	}
	$mysqli->query("set names utf8");
	$sql="SELECT * FROM product";
	$result=$mysqli->query($sql);
	// var_dump($result);
	// if ($result->num_rows) {
	// 	// 得到的是一个包含所有商品的数组
	// 	$data= $result->fetch_all(MYSQLI_ASSOC);
	// 	echo json_encode($data);
	// }
	// $mysqli->close();

	$arr=array();
	while($row=$result->fetch_assoc()){
		array_push($arr, $row);
	}
	echo json_encode($arr);
	$mysqli->close();
 ?>