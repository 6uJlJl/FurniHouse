<?php

$name = $_POST['name'];
$phone = $_POST['phone'];
$name = htmlspecialchars($name);
$phone = htmlspecialchars($phone);
$name = urldecode($name);
$phone = urldecode($phone);
$name = trim($name);
$phone = trim($phone);

if (isset($_POST['item'])) {
  $item = $_POST['item'];
  $item = htmlspecialchars($item);
  $item = urldecode($item);
  $item = trim($item);
  $item = "\nЗаявка отправлена с товара:\n".$item;
} else {
 $item = " ";
}



if (mail("mailtomerkulov@gmail.com", "Заказан обратный звонок!", "Клиент просит перезвонить ему! ".$section.$item."\nИмя: ".$name.". \nТелефон: ".$phone ,"From: mailtomerkulov@gmail.com \r\n"))
{ echo "<html><head><meta charset='UTF-8'><meta http-equiv='Refresh' content='3; URL=/'><link rel='stylesheet' href='/css/main.min.css'></head><body class='after-send'><p>Сообщение успешно отправлено! \nВы будете перемещены на сайт через 3 сек. \nЕсли не хотите ждать, перейдите <a href='index.html'>по ссылке.</a></p></body></html>";
} else {
  echo "<html><head><meta charset='UTF-8'><meta http-equiv='Refresh' content='3; URL=/'><link rel='stylesheet' href='/css/main.min.css'></head><body class='after-send'><p>При отправке сообщения возникли ошибки! \nВы будете перемещены на сайт через 3 сек. \nЕсли не хотите ждать, перейдите <a href='index.html'>по ссылке.</a></p></body></html>";
}

?>
