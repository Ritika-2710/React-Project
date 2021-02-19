<?php
require(__DIR__.'/config.php');
// require(__DIR__.'/security.php');
spl_autoload_register(function($classname){
	global $root;
	if(!class_exists($classname));
		require_once($root.'/classes/'.strtolower($classname).'-class.php');
});
date_default_timezone_set('Asia/Kolkata');
function newid(){
	return round(microtime(true)*1000);
}
function datefromid($string,$id){
	return date($string,($id)/1000);
}
function allow_only($str, $allowed){
    $str = htmlspecialchars($str);
    foreach( $allowed as $a ){
        $str = str_replace("&lt;".$a."&gt;", "<".$a.">", $str);
        $str = str_replace("&lt;/".$a."&gt;", "</".$a.">", $str);
    }
    return $str;
}
function upload_file($file,$path){
	$tmp=$file['tmp_name'];
	if(move_uploaded_file($tmp,$path)){
		return "success";
	}else{
		return "error";
	}
}
function upload_image($file,$path){
	$img=$file['tmp_name'];
	$img_info=getimagesize($img);
	$width = $img_info[0];
	$height = $img_info[1];
	switch ($img_info[2]) {
		case IMAGETYPE_JPEG : $src = imagecreatefromjpeg($img); break;
		case IMAGETYPE_PNG  : $src = imagecreatefrompng($img);  break;
		default : die("Unknown filetype ".$img_info[2]);
	}
	$tmp = imagecreatetruecolor($width,$height);
	imagecopyresampled($tmp, $src, 0, 0, 0, 0, $width, $height, $width, $height);
	imagejpeg($tmp,$path.'.jpg');
	imagedestroy($tmp);
	return "success";
}

function send_mail($email,$name,$subject,$body){
	global $admin_email,$admin_password,$admin_name,$root;
	require_once($root.'/PHPMailer/src/PHPMailer.php');
	require_once($root.'/PHPMailer/src/Exception.php');
	require_once($root.'/PHPMailer/src/SMTP.php');
	$mail=new PHPMailer\PHPMailer\PHPMailer();
    if(!$mail->validateAddress($email)){
    	echo 'Invalid Email Address : '.$email;
        return;
    }
    $mail->IsSMTP();
    //$mail->SMTPDebug = 3;
    $mail->SMTPAuth = true;
    $mail->Host = 'smtp.gmail.com';
    $mail->Port = 587;
    $mail->SMTPSecure = 'tls';
    // $mail->Port = 465;
    // $mail->SMTPSecure = 'ssl';
    $mail->Username = $admin_email;
    $mail->Password = $admin_password;
    $mail->setFrom($admin_email,$admin_name);
    $mail->AddReplyTo($admin_email,$admin_name);
    $mail->addAddress($email,$name);
    $mail->isHTML(true);
    $mail->Subject = $subject;
    $mail->Body = $body;
    if(!$mail->send()){
        return 'Mailer Error: ' . $mail->ErrorInfo;
    }else{
        return 'success';
    }
}
function random_string($n,$s='aA1'){
	$a='';
	if(strpos($s,'a')!==false){
		$a.='abcdefghijklmnopqrstuvwxyz';
	}
	if(strpos($s,'A')!==false){
		$a.='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	}
	if(strpos($s,'1')!==false){
		$a.='0123456789';
	}
	if(strpos($s,'@')!==false){
		$a.='@#$%^?&.,\'";:+-*/';
	}
	$r='';
	for ($i=0;$i<$n;$i++) { 
		$r.=$a[rand(0,strlen($a)-1)];
	}
	return $r;
} 
$db=new Database();
?>