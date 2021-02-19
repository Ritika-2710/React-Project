<?php
class Signup{
	public $data;
	function __construct(){
        $this->data=array();
	}
	function select($match=null){
        global $db; //$db=new Database();
        $response=array();
		$sql="select * from signup";
		if($match!=null){
			$sql.=" where ".$match;
		}
		$result=$db->query($sql);
		$all=array();
		if(mysqli_num_rows($result)>0){
			while(($row=mysqli_fetch_assoc($result))!=null){
				array_push($all,$row);
            }
            $response['result']=$all;
            $response['error']=$db->error;
		} 
		return $response;
    }
    function insert(){
        global $db;
        $response=array('result'=>'','error'=>'');
        $sql="insert into signup(";
        foreach($this->data as $key => $value){
            if(!in_array($key,array())){
                if($value!=null){
                    $sql.="$key,\n";
                }
            }
        }
        $sql=substr($sql,0,strlen($sql)-2);
        $sql.=") values(";
        foreach($this->data as $key => $value){
            if(!in_array($key,array())){
                if($value!=null) {
                    $sql .= "'$value',\n";
                }
            }
        }
        $sql=substr($sql,0,strlen($sql)-2);
        $sql.=");";
        if($db->query($sql)){
            $response['result']="success";
        }else
            $response['error']=$db->error;
        return $response;
    }
    function update($id){
        global $db;
        $response=array('result'=>'','error'=>'');
		$sql="update signup set\n";
		foreach($this->data as $key => $value){
			if(!in_array($key,array('id'))){
				if($value!=null) {
                    $sql .= "$key='$value',\n";
                }
			}
		}
		$sql=substr($sql,0,strlen($sql)-2);
		$sql.="\nwhere id='$id'";
        if($db->query($sql)){
            $response['result']="success";
        }else
            $response['error']=$db->error;
        return $response;
    }
    function delete($id){
        global $db;
        $response=array('result'=>'','error'=>'');
		$sql="delete from signup where id='$id'";
		if($db->query($sql))
            $response['result']="success";
		else  $response['error']=$db->error;

		return $response;
    }
}