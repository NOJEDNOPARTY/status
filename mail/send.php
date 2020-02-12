<?php
// Параметры подключения к вашему облачному Битрикс24
define('CRM_HOST', 'bx24.status-fashion.com'); // укажите здесь ваш домен в Битрикс
define('CRM_PORT', '443'); // порт для подключения. Здесь оставляем все как есть
define('CRM_PATH', '/crm/configs/import/lead.php'); // Путь к PHP файлу, к которому будем подлючаться. Здесь оставляем все как есть

// Параметры авторизации
define('CRM_LOGIN', 'chigrin.work@gmail.com'); // логин пользователя, которого мы создали для подключения
define('CRM_PASSWORD', 'E8o5Dt'); // пароль пользователя CRM


$name = trim(htmlspecialchars($_POST['name']));
$phone = trim(htmlspecialchars($_POST['phone']));
$subject = trim(htmlspecialchars($_POST['subject']));
$price = trim(htmlspecialchars($_POST['price']));

$to = "leadlist@dimbrowsky.com, shop@status-fashion.com";
$message = "
	<html> 
		<head> 
			<title>$subject</title> 
		</head> 
		<body>
			<table>
				<tr><td><b>Имя:</b></td><td>$name</td></tr>
				<tr><td><b>Телефон:</b></td><td>$phone</td></tr>
			</table>
		</body> 
	</html>";
$headers  = "From: noreply@dimbrowsky.com\r\n";
$headers .= "Content-type: text/html; charset=utf-8 \r\n";
mail($to, $subject, $message, $headers);


// Начинаем обработку внутри скрипта
if ($_SERVER['REQUEST_METHOD'] == 'POST')
{
	$leadData = $_POST['DATA'];

	// представляем массив
	$postData = array(
		'NAME' => $name,
		'PHONE_WORK' => $phone,
		'TITLE' => $subject,
		'OPPORTUNITY' => $price
	);

	// добавляем в массив параметры авторизации
	if (defined('CRM_AUTH'))
	{
		$postData['AUTH'] = CRM_AUTH;
	}
	else
	{
		$postData['LOGIN'] = CRM_LOGIN;
		$postData['PASSWORD'] = CRM_PASSWORD;
	}

	// открываем сокет соединения к облачной CRM
	$fp = fsockopen("ssl://".CRM_HOST, CRM_PORT, $errno, $errstr, 30);
	if ($fp)
	{
		// производим URL-кодирование строки
		$strPostData = '';
		foreach ($postData as $key => $value)
			$strPostData .= ($strPostData == '' ? '' : '&').$key.'='.urlencode($value);

		// подготавливаем заголовки
		$str = "POST ".CRM_PATH." HTTP/1.0\r\n";
		$str .= "Host: ".CRM_HOST."\r\n";
		$str .= "Content-Type: application/x-www-form-urlencoded\r\n";
		$str .= "Content-Length: ".strlen($strPostData)."\r\n";
		$str .= "Connection: close\r\n\r\n";

		$str .= $strPostData;

		fwrite($fp, $str);

		$result = '';
		while (!feof($fp))
		{
			$result .= fgets($fp, 128);
		}
		fclose($fp);

		$response = explode("\r\n\r\n", $result);

		$output = '<pre>'.print_r($response[1], 1).'</pre>';
	}
	else
	{
		// echo 'Не удалось подключиться к CRM '.$errstr.' ('.$errno.')';
		echo "send_error";
	}
}

echo "send_success";
?>