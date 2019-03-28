<?php
 
require __DIR__ . '/vendor/autoload.php';

$servername = "estilodevidaurbano.com.br";
$username = "estil469_crm";
$password = "hsy6Fs3S9Kj";
$dbname = "estil469_crm";


//vars do forms
$nome = $_POST['inputnome'];
//$email = $_POST['inputemail'];
$celular = $_POST['inputcelular'];
$dia = $_POST['inputdia'];
$horario = $_POST['inputturno'];
$especialidade = $_POST['inputespecialidade'];
$especialidadetext = $_POST['inputespecialidade']; 
//$cep = $_POST['inputCEP'];
$diadepois = date("Y-m-d", strtotime($dia));

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

/*
$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 


$sqlInsFluxo = "INSERT INTO fluxos (codigo, incorporadora_id, imobiliaria_id, empreendimento_id, fase_fluxo_id, status_fluxo_id, tipo_fluxo_id, usuario_id, corretor_id, corretor_autonomo_id, origem_principal_id, origem_detalhada_id, encerramento_id, corretor, proposta,valor_proposta, temperatura, data_venda, data_lixeira, created_at, updated_at, deleted_at)
VALUES ('$codigo', 17, 27, $especialidade, 69, 50, NULL, 372, 361, NULL, 101, NULL, NULL, NULL, NULL,NULL, 'F', NULL, NULL, now(), now(), NULL)";


if ($conn->query($sqlInsFluxo) === TRUE) {
    echo "Inserção para a tabela fluxos, efetuada com sucesso";
} else {
    echo "Error: " . $sqlInsFluxo . "<br>" . $conn->error;
}

$sqlBuscaID = "SELECT id FROM fluxos WHERE codigo='$codigo'";
$result = $conn->query($sqlBuscaID);

if ($result->num_rows > 0) { 
    while($row = $result->fetch_assoc()) {
        echo "<br>" . "id: " . $row["id"]. "<br>";
		$idbuscado = $row["id"];
		echo "<br>" . $idbuscado;
    }
} else {
    echo "0 results";
}



$sqlInsCont = "INSERT INTO contatos(questionario_id, fluxo_id, empreendimento_id, usuario_id, corretor_id, tipo_fluxo_id, corretor, created_at, updated_at, deleted_at)
VALUES (59, $idbuscado, $especialidade, 372, 361, NULL, NULL, now(), now(), NULL)";



if ($conn->query($sqlInsCont) === TRUE) {
    echo "Inserção para a tabela contatos, efetuada com sucesso";
} else {
    echo "Error: " . sqlInsCont . "<br>" . $conn->error;
}

$sqlBuscaContato = "SELECT id FROM contatos WHERE fluxo_id='$idbuscado'";
$result = $conn->query($sqlBuscaContato);

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        echo "<br>" . "contato_id: " . $row["id"]. "<br>";
		$contatobuscado = $row["id"];
		echo "<br>" . $contatobuscado;
    }
} else {
    echo "0 results";
}

$sqlInsContRespNome = "INSERT INTO contato_respostas(contato_id, questionario_pergunta_id, questionario_resposta_id, resposta, created_at, updated_at, deleted_at)
VALUES($contatobuscado, 328, NULL, '$nome', now(), now(), NULL)";

if ($conn->query($sqlInsContRespNome) === TRUE) {
    echo "<br>"."Inserção para a tabela contato_respostas no campo Nome, efetuada com sucesso";
} else {
    echo "Error: " . $sqlInsContRespNome . "<br>" . $conn->error;
}

$sqlInsContRespCelular = "INSERT INTO contato_respostas(contato_id, questionario_pergunta_id, questionario_resposta_id, resposta, created_at, updated_at, deleted_at)
VALUES($contatobuscado, 329, NULL, '$celular', now(), now(), NULL)";


if ($conn->query($sqlInsContRespCelular) === TRUE) {
    echo "<br>"."Inserção para a tabela contato_respostas no campo Celular, efetuada com sucesso";
} else {
    echo "Error: " . $sqlInsContRespCelular . "<br>" . $conn->error;
}

$sqlInsContRespEmail = "INSERT INTO contato_respostas(contato_id, questionario_pergunta_id, questionario_resposta_id, resposta, created_at, updated_at, deleted_at)
VALUES($contatobuscado, 331, NULL, '$email', now(), now(), NULL)";
if ($conn->query($sqlInsContRespEmail) === TRUE) {
    echo "<br>"."Inserção para a tabela contato_respostas no campo Email, efetuada com sucesso";
} else {
    echo "Error: " . $sqlInsContRespEmail . "<br>" . $conn->error;
}

$sqlInsContRespCEP = "INSERT INTO contato_respostas(contato_id, questionario_pergunta_id, questionario_resposta_id, resposta, created_at, updated_at, deleted_at)
VALUES($contatobuscado, 332, NULL, '$cep', now(), now(), NULL)";
if ($conn->query($sqlInsContRespCEP) === TRUE) {
    echo "<br>"."Inserção para a tabela contato_respostas no campo CEP, efetuada com sucesso";
} else {
    echo "Error: " . $sqlInsContRespCEP . "<br>" . $conn->error;
}



$sqlInsContRespNull1 = "INSERT INTO contato_respostas(contato_id, questionario_pergunta_id, questionario_resposta_id, resposta, created_at, updated_at, deleted_at)
VALUES($contatobuscado, 330, NULL, NULL, now(), now(), NULL)";
if ($conn->query($sqlInsContRespNull1) === TRUE) {
    echo "<br>"."Inserção para a tabela contato_respostas no campo Nulo 1, efetuada com sucesso";
} else {
    echo "Error: " . $sqlInsContRespNull1 . "<br>" . $conn->error;
}

$sqlInsContRespNull2 = "INSERT INTO contato_respostas(contato_id, questionario_pergunta_id, questionario_resposta_id, resposta, created_at, updated_at, deleted_at)
VALUES($contatobuscado, 334, NULL, NULL, now(), now(), NULL)";
if ($conn->query($sqlInsContRespNull2) === TRUE) {
    echo "<br>"."Inserção para a tabela contato_respostas no campo Nulo 2, efetuada com sucesso";
} else {
    echo "Error: " . $sqlInsContRespNull2 . "<br>" . $conn->error;
}

$sqlInsContRespNull3 = "INSERT INTO contato_respostas(contato_id, questionario_pergunta_id, questionario_resposta_id, resposta, created_at, updated_at, deleted_at)
VALUES($contatobuscado, 335, NULL, NULL, now(), now(), NULL)";
if ($conn->query($sqlInsContRespNull3) === TRUE) {
    echo "<br>"."Inserção para a tabela contato_respostas no campo Nulo 3, efetuada com sucesso";
} else {
    echo "Error: " . $sqlInsContRespNull3 . "<br>" . $conn->error;
}




$sqlInsAtendimento = "INSERT INTO atendimentos(incorporadora_id,fluxo_id,empreendimento_id,fase_fluxo_id,status_fluxo_id,usuario_id,contato_id, atendimento, created_at, updated_at)
VALUES(17, $idbuscado, $especialidade, 69, 50, 372, $contatobuscado, 'Agendamento pelo site', now(), now())";

if ($conn->query($sqlInsAtendimento) === TRUE) {
    echo "<br>"."Inserção para a tabela atendimentos, efetuada com sucesso";
} else {
    echo "Error: " . $sqlInsAtendimento . "<br>" . $conn->error;
}



$conn->close();
*/

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
    'description' => "{$nome} \n \nCelular: {$celular} \nEspecialidade: {$especialidadetext}",
    'start' => array(
      //'dateTime' => '2019-03-18T09:00:00',
      'dateTime' => "{$diadepois}T{$horario}",
      'timeZone' => 'America/Belem',
    ),
    'end' => array(
      'dateTime' => "{$diadepois}T{$horariodepois}",
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
  //header('Location: http://odonto.com.vc');
?>