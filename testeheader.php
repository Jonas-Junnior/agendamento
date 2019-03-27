<?php
 
require __DIR__ . '/vendor/autoload.php';

$servername = "estilodevidaurbano.com.br";
$username = "estil469_crm";
$password = "hsy6Fs3S9Kj";
$dbname = "estil469_crm";


//vars do forms
$nome = $_POST['inputnome'];
$email = $_POST['inputemail'];
$celular = $_POST['inputcelular'];
$dia = $_POST['inputdia'];
$horario = $_POST['inputturno'];
$especialidade = $_POST['inputespecialidade'];
$especialidadetext = $_POST['inputespecialidade']; 
$cep = $_POST['inputCEP'];

function generateRandomString($length = 6) {
    $characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $charactersLength = strlen($characters);
    $randomString = '';
    for ($i = 0; $i < $length; $i++) {
        $randomString .= $characters[rand(0, $charactersLength - 1)];
    }
    return $randomString;
}
$codigo = generateRandomString();


if($especialidade == "Implantes Dentários"){
	$especialidade = 61;
} else if($especialidade == "Aparelho Ortodônico"){
	$especialidade = 62;
} else if($especialidade == "Tratamento de Canal"){
	$especialidade = 63;
} else if($especialidade == "Tratamento Estético"){
	$especialidade = 64;
} else if($especialidade == "Pediatria"){
	$especialidade = 65;
} else if($especialidade == "Limpeza e Flúor"){
	$especialidade = 66;
} else if($especialidade == "Clareamento Dentário"){
	$especialidade = 67;
} else if($especialidade == "Extração Dentária"){
	$especialidade = 68;
} else if($especialidade == "Outro"){
	$especialidade = 69;
}else if($especialidade == "Harmonia Facial"){
	$especialidade = 71;
} else if($especialidade == "Tratamento de Gengiva"){
	$especialidade = 72;
}


function getClient()
{
    $client = new Google_Client();
    $client->setApplicationName('Integração com o Google Agenda API');
    $client->setScopes(Google_Service_Calendar::CALENDAR);
    $client->setAuthConfig('credentials.json');
    $client->setAccessType('offline');
    $client->setPrompt('select_account consent');


    $tokenPath = 'token.json';
    if (file_exists($tokenPath)) {
        $accessToken = json_decode(file_get_contents($tokenPath), true);
        $client->setAccessToken($accessToken);
    }

    if ($client->isAccessTokenExpired()) {
        if ($client->getRefreshToken()) {
            $client->fetchAccessTokenWithRefreshToken($client->getRefreshToken());
        } else {
            $authUrl = $client->createAuthUrl();
            //printf("Abra o seguinte link no seu browser:\n%s\n", $authUrl);
            //print 'Entre com o código de ativação do link: ';
            $authCode = trim(fgets(STDIN));

            $accessToken = $client->fetchAccessTokenWithAuthCode($authCode);
            $client->setAccessToken($accessToken);

            if (array_key_exists('error', $accessToken)) {
                throw new Exception(join(', ', $accessToken));
            }
        }
        if (!file_exists(dirname($tokenPath))) {
            mkdir(dirname($tokenPath), 0700, true);
        }
        file_put_contents($tokenPath, json_encode($client->getAccessToken()));
    }
    return $client;
}



function pegarHorarioDepois(){
  if($_POST['inputturno'] == "08:00:00"){
    $horariodepois = "9:00:00";
    return $horariodepois;
  } else if($_POST['inputturno'] == "09:00:00"){
    $horariodepois = "10:00:00";
    return $horariodepois;
  } else if($_POST['inputturno'] == "10:00:00"){
    $horariodepois = "11:00:00";
    return $horariodepois;
  } else if($_POST['inputturno'] == "11:00:00"){
    $horariodepois = "12:00:00";
    return $horariodepois;
  } else if($_POST['inputturno'] == "14:00:00"){
    $horariodepois = "15:00:00";
    return $horariodepois;
  } else if($_POST['inputturno'] == "15:00:00"){
    $horariodepois = "16:00:00";
    return $horariodepois;
  } else if($_POST['inputturno'] == "16:00:00"){
    $horariodepois = "17:00:00";
    return $horariodepois;
  } else if($_POST['inputturno'] == "17:00:00"){
    $horariodepois = "18:00:00";
    return $horariodepois;
  }

}

$horariodepois = pegarHorarioDepois();

//echo("Horario depois: {$horariodepois}");

$clientCalendar = getClient();
$service = new Google_Service_Calendar($clientCalendar);
$event = new Google_Service_Calendar_Event(array(
    'summary' => 'Consulta',
    'location' => 'Av. Serzedelo Corrêa, 805 Batista Campos / Belém - PA',
    'description' => "{$nome} \nE-mail: {$email} \nCelular: {$celular} \nEspecialidade: {$especialidadetext}",
    'start' => array(
      //'dateTime' => '2019-03-18T09:00:00',
      'dateTime' => "{$dia}T{$horario}",
      'timeZone' => 'America/Belem',
    ),
    'end' => array(
      'dateTime' => "{$dia}T{$horariodepois}",
      'timeZone' => 'America/Belem',
    ),/*
    'recurrence' => array(
      'RRULE:FREQ=DAILY;COUNT=1'
    ),*/
    'attendees' => array(
      array('email' => 'amaurymagalhaesf@gmail.com')
    ),
    'reminders' => array(
      'useDefault' => FALSE,
      'overrides' => array(
        array('method' => 'email', 'minutes' => 24 * 60),
        array('method' => 'popup', 'minutes' => 10),
      ),
    ),
  ));
  
  $calendarId = 'primary';
  $event = $service->events->insert($calendarId, $event);
  //printf('Evento criado: %s', $event->htmlLink);
  header('Location: http://odonto.com.vc');
?>