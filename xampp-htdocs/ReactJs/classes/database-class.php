<?php
class Database{
	public $db;
	public $name;
	public $username;
	public $password;
	public $url;
	public $error;
	function __construct(){
		require(__DIR__.'/../include/services/config.php');
		$this->name=$database_name;
		$this->username=$database_username;
		$this->password=$database_password;
		$this->url=$database_url;
		$this->db=mysqli_connect($this->url,$this->username,$this->password);
		if(!$this->db)$this->error="error connecting database";
		mysqli_select_db($this->db,$this->name);
	}
	function query($sql){
		$result=mysqli_query($this->db,$sql);
		// print_r($result);
		// exit;
		$this->error=mysqli_error($this->db);
		return $result;
	}
	function multi_query($sql){
		$result=mysqli_multi_query($this->db,$sql);
		$this->error=mysqli_error($this->db);
		return $result;
	}
	function close(){
		mysqli_close($this->db);
	}
}
?>