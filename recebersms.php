<?php

require_once('./vendor/php-rest-api/autoload.php');
require_once('./configsms.php');

$jsonResponse = file_get_contents('php://input');
$content = json_decode($jsonResponse, true);

$smsFacade = new SmsFacade($configs['alias'], $configs['password'], $configs['webServiceUrl']);

try {
    $data = $content['callbackMoRequest'];

    $mobile = $data['mobile'];

    $sms = new Sms();
    $sms->setTo("$mobile");
    $sms->setId(uniqid());
    $sms->setCallbackOption(Sms::CALLBACK_NONE);

    if($data['body'] == '1') {
        $sms->setMsg("Parabens, a sua consulta esta confirmada!");
    } else {
        $sms->setMsg("A sua consulta foi desmarcada com sucesso!");
    }

    try{
        $response = $smsFacade->send($sms);
    } catch(Exception $ex){
        echo "Falha ao fazer o envio da mensagem. Exceção: ".$ex->getMessage()."<br />".$ex->getTraceAsString();
    }

} catch (Exception $ex) {
    echo "Falha ao receber a mensagem. Exceção: " . $ex->getMessage() . "<br />" . $ex->getTraceAsString();
}
