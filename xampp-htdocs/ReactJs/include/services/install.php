<?php
require_once(__DIR__.'/functions.php');
require_once(__DIR__.'/config.php');
$sql="
create table if not exists signup(
	id varchar(20) not null primary key,
	firstname varchar(40),
	lastname varchar(20),
	email varchar(30),
	phone varchar(13),
	password varchar(100)
);
";
if(!$db->multi_query($sql)){
	echo $db->error;
}else{
	echo "success";
}
?>