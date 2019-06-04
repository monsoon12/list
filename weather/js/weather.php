<?php
header("Content-type: text/html; charset=utf-8");

if(getenv('HTTP_CLIENT_IP')) {
  $ip = getenv('HTTP_CLIENT_IP');
} elseif(getenv('HTTP_X_FORWARDED_FOR')) {
  $ip = getenv('HTTP_X_FORWARDED_FOR');
} elseif(getenv('REMOTE_ADDR')) {
  $ip = getenv('REMOTE_ADDR');
} else {
  $ip = $HTTP_SERVER_VARS['REMOTE_ADDR'];
}
// $json=file_get_contents('http://opendata.baidu.com/api.php?query='.$ip.'&co=&resource_id=6006&t=1433920989928&ie=utf8&oe=utf-8&format=json');
$json=file_get_contents('http://ip.taobao.com/service/getIpInfo.php?ip='.$ip);
$arr=json_decode($json,true);
$city = $arr['data']['city'];

$weather_info=file_get_contents('https://apis.juhe.cn/simpleWeather/query?city='.$city.'&key=015bb43992f7e0abe6d4c9748734b8cc');
echo $weather_info;
?>