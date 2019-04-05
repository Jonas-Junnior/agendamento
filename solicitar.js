<<<<<<< HEAD:solicitar.js
$(document).ready(function(){
    document.getElementById("inputdia").disabled = true;
    document.getElementById("inputturno").disabled = true;

    $('#inputespecialidade').on('change', function(){
        document.getElementById("inputdia").disabled = false;
        document.getElementById("inputturno").disabled = false;
    })
})

;(function($){
	$.fn.datepicker.dates['pt-BR'] = {
		days: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"],
		daysShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
		daysMin: ["Do", "Se", "Te", "Qu", "Qu", "Se", "Sa"],
		months: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
		monthsShort: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
		today: "Hoje",
		monthsTitle: "Meses",
		clear: "Limpar",
        format: "dd-mm-yyyy",
	};
}(jQuery));

$(document).ready(function(){

    var limite = new Date()

    var time = limite.getHours() + ":" + limite.getMinutes() + ":" + limite.getSeconds();

    limite.setHours(18)
    limite.setMinutes(00)
    limite.setSeconds(00)

    var timeTo = limite.getHours() + ":" + limite.getMinutes() + ":" + limite.getSeconds()

    var weekday=new Array(7);
    weekday[0]="Monday";
    weekday[1]="Tuesday";
    weekday[2]="Wednesday";
    weekday[3]="Thursday";
    weekday[4]="Friday";
    weekday[5]="Saturday";

    $('#inputespecialidade').on('change', function(){
    var $trat = document.getElementById("inputespecialidade").value;

    if($trat == "Implantes Dentários"){

        $('#inputdia').datepicker('remove');
        if (time > timeTo){

            $('#inputdia').datepicker({
                language: "pt-BR",
                startDate: '+0d',
                todayHighlight: true,
                daysOfWeekDisabled: '0,5,6'
            });
        }

        else{
        
        $('#inputdia').datepicker({
            language: "pt-BR",
            startDate: new Date(),
            todayHighlight: true,
            daysOfWeekDisabled: '0,5,6',
        });
        
    }
        $('#inputdia').on('change', function() {
        
            var $date = $('#inputdia').datepicker('getDate');
    
            var $dayOfWeek = weekday[$date.getUTCDay()]

            if($dayOfWeek = "Wednesday"){
                document.getElementById('08:00:00').disabled = false;
                document.getElementById('09:00:00').disabled = false;
                document.getElementById('10:00:00').disabled = false;
                document.getElementById('11:00:00').disabled = false;
                document.getElementById('14:00:00').disabled = true;
                document.getElementById('15:00:00').disabled = true;
                document.getElementById('16:00:00').disabled = true;
                document.getElementById('17:00:00').disabled = true;
            }
        });
        

    }
    else if($trat == "Tratamento Estético"){

        $('#inputdia').datepicker('remove');

        if (time > timeTo){

            $('#inputdia').datepicker({
                language: "pt-BR",
                startDate: '+0d',
                todayHighlight: true,
                daysOfWeekDisabled: '0,6'
            });
        }

        else{
            $('#inputdia').datepicker({
                language: "pt-BR",
                startDate: new Date(),
                todayHighlight: true,
                daysOfWeekDisabled: '0,6'
            });
        }

        $('#inputdia').on('change', function() {
        
            var $date = $('#inputdia').datepicker('getDate');
    
            var $dayOfWeek = weekday[$date.getUTCDay()]

            if($dayOfWeek = "Monday"){
                document.getElementById('08:00:00').disabled = false;
                document.getElementById('09:00:00').disabled = false;
                document.getElementById('10:00:00').disabled = false;
                document.getElementById('11:00:00').disabled = false;
                document.getElementById('14:00:00').disabled = true;
                document.getElementById('15:00:00').disabled = true;
                document.getElementById('16:00:00').disabled = true;
                document.getElementById('17:00:00').disabled = true;
            }

            else if($dayOfWeek = "Wednesday"){
                document.getElementById('08:00:00').disabled = false;
                document.getElementById('09:00:00').disabled = false;
                document.getElementById('10:00:00').disabled = false;
                document.getElementById('11:00:00').disabled = false;
                document.getElementById('14:00:00').disabled = true;
                document.getElementById('15:00:00').disabled = true;
                document.getElementById('16:00:00').disabled = true;
                document.getElementById('17:00:00').disabled = true;
            }

            else if($dayOfWeek = "Friday"){
                document.getElementById('08:00:00').disabled = true;
                document.getElementById('09:00:00').disabled = true;
                document.getElementById('10:00:00').disabled = true;
                document.getElementById('11:00:00').disabled = true;
                document.getElementById('14:00:00').disabled = false;
                document.getElementById('15:00:00').disabled = false;
                document.getElementById('16:00:00').disabled = false;
                document.getElementById('17:00:00').disabled = false;
            }
        });
    }

    else if($trat == "Tratamento de Canal"){

        $('#inputdia').datepicker('remove');

        if (time > timeTo){

            $('#inputdia').datepicker({
                language: "pt-BR",
                startDate: '+0d',
                todayHighlight: true,
                daysOfWeekDisabled: '0,5,6'
            });
        }

        else{
            $('#inputdia').datepicker({
                language: "pt-BR",
                startDate: new Date(),
                todayHighlight: true,
                daysOfWeekDisabled: '0,5,6'
            });
        }   

        $('#inputdia').on('change', function() {
        
            var $date = $('#inputdia').datepicker('getDate');
    
            var $dayOfWeek = weekday[$date.getUTCDay()]

        if($dayOfWeek = "Tuesday"){
            document.getElementById('08:00:00').disabled = true;
            document.getElementById('09:00:00').disabled = true;
            document.getElementById('10:00:00').disabled = true;
            document.getElementById('11:00:00').disabled = true;
            document.getElementById('14:00:00').disabled = false;
            document.getElementById('15:00:00').disabled = false;
            document.getElementById('16:00:00').disabled = false;
            document.getElementById('17:00:00').disabled = false;
        }

        else if($dayOfWeek = "Wednesday"){
            document.getElementById('08:00:00').disabled = true;
            document.getElementById('09:00:00').disabled = true;
            document.getElementById('10:00:00').disabled = true;
            document.getElementById('11:00:00').disabled = true;
            document.getElementById('14:00:00').disabled = false;
            document.getElementById('15:00:00').disabled = false;
            document.getElementById('16:00:00').disabled = false;
            document.getElementById('17:00:00').disabled = false;
        }

        else if($dayOfWeek = "Thrusday"){
            document.getElementById('08:00:00').disabled = true;
            document.getElementById('09:00:00').disabled = true;
            document.getElementById('10:00:00').disabled = true;
            document.getElementById('11:00:00').disabled = true;
            document.getElementById('14:00:00').disabled = false;
            document.getElementById('15:00:00').disabled = false;
            document.getElementById('16:00:00').disabled = false;
            document.getElementById('17:00:00').disabled = false;
        }
    });

    }
    else if($trat == "Tratamento de Gengiva"){

        $('#inputdia').datepicker('remove');

        if (time > timeTo){

            $('#inputdia').datepicker({
                language: "pt-BR",
                startDate: '+0d',
                todayHighlight: true,
                daysOfWeekDisabled: '0,2,3,4,5'
            });
        }

        else{
            $('#inputdia').datepicker({
                language: "pt-BR",
                startDate: new Date(),
                todayHighlight: true,
                daysOfWeekDisabled: '0,2,3,4,5'
            });
        }

        $('#inputdia').on('change', function() {
        
            var $date = $('#inputdia').datepicker('getDate');
    
            var $dayOfWeek = weekday[$date.getUTCDay()]

        if($dayOfWeek = "Saturday"){
            document.getElementById('08:00:00').disabled = false;
            document.getElementById('09:00:00').disabled = false;
            document.getElementById('10:00:00').disabled = false;
            document.getElementById('11:00:00').disabled = false;
            document.getElementById('14:00:00').disabled = true;
            document.getElementById('15:00:00').disabled = true;
            document.getElementById('16:00:00').disabled = true;
            document.getElementById('17:00:00').disabled = true;
        }

    });
        
    }
    else if($trat == "Aparelho Ortodônico"){

        $('#inputdia').datepicker('remove');

        if (time > timeTo){

            $('#inputdia').datepicker({
                language: "pt-BR",
                startDate: '+0d',
                todayHighlight: true,
                daysOfWeekDisabled: '0,2,5,6'
            });
        }

        else{
            $('#inputdia').datepicker({
                language: "pt-BR",
                startDate: new Date(),
                todayHighlight: true,
                daysOfWeekDisabled: '0,2,5,6'
            });
        }

        $('#inputdia').on('change', function() {
        
            var $date = $('#inputdia').datepicker('getDate');
    
            var $dayOfWeek = weekday[$date.getUTCDay()]

        if($dayOfWeek = "Monday"){
            document.getElementById('08:00:00').disabled = true;
            document.getElementById('09:00:00').disabled = true;
            document.getElementById('10:00:00').disabled = true;
            document.getElementById('11:00:00').disabled = true;
            document.getElementById('14:00:00').disabled = false;
            document.getElementById('15:00:00').disabled = false;
            document.getElementById('16:00:00').disabled = false;
            document.getElementById('17:00:00').disabled = false;
    }

        else if($dayOfWeek = "Wednesday"){
            document.getElementById('08:00:00').disabled = true;
            document.getElementById('09:00:00').disabled = true;
            document.getElementById('10:00:00').disabled = true;
            document.getElementById('11:00:00').disabled = true;
            document.getElementById('14:00:00').disabled = false;
            document.getElementById('15:00:00').disabled = false;
            document.getElementById('16:00:00').disabled = false;
            document.getElementById('17:00:00').disabled = false;
        }

    });
    }
    else if($trat == "Limpeza e Flúor"){

        $('#inputdia').datepicker('remove');

        if (time > timeTo){

            $('#inputdia').datepicker({
                language: "pt-BR",
                startDate: '+0d',
                todayHighlight: true,
                daysOfWeekDisabled: '0'
            });
        }

        else{
            $('#inputdia').datepicker({
                language: "pt-BR",
                startDate: new Date(),
                todayHighlight: true,
                daysOfWeekDisabled: '0'
            });
        }

        $('#inputdia').on('change', function() {
        
            var $date = $('#inputdia').datepicker('getDate');
    
            var $dayOfWeek = weekday[$date.getUTCDay()]

        if($dayOfWeek = "Monday"){
            document.getElementById('08:00:00').disabled = true;
            document.getElementById('09:00:00').disabled = true;
            document.getElementById('10:00:00').disabled = true;
            document.getElementById('11:00:00').disabled = true;
            document.getElementById('14:00:00').disabled = false;
            document.getElementById('15:00:00').disabled = false;
            document.getElementById('16:00:00').disabled = false;
            document.getElementById('17:00:00').disabled = false;
        }

        else if($dayOfWeek = "Wednesday"){
            document.getElementById('08:00:00').disabled = false;
            document.getElementById('09:00:00').disabled = false;
            document.getElementById('10:00:00').disabled = false;
            document.getElementById('11:00:00').disabled = false;
            document.getElementById('14:00:00').disabled = true;
            document.getElementById('15:00:00').disabled = true;
            document.getElementById('16:00:00').disabled = true;
            document.getElementById('17:00:00').disabled = true;
        }

        else if($dayOfWeek = "Saturday"){
            document.getElementById('08:00:00').disabled = false;
            document.getElementById('09:00:00').disabled = false;
            document.getElementById('10:00:00').disabled = false;
            document.getElementById('11:00:00').disabled = false;
            document.getElementById('14:00:00').disabled = true;
            document.getElementById('15:00:00').disabled = true;
            document.getElementById('16:00:00').disabled = true;
            document.getElementById('17:00:00').disabled = true;
        }

    });
    }
    else if($trat == "Extração Dentária"){

        $('#inputdia').datepicker('remove');

        if (time > timeTo){

            $('#inputdia').datepicker({
                language: "pt-BR",
                startDate: '+0d',
                todayHighlight: true,
                daysOfWeekDisabled: '0,2,6'
            });
        }

        else{
            $('#inputdia').datepicker({
                language: "pt-BR",
                startDate: new Date(),
                todayHighlight: true,
                daysOfWeekDisabled: '0,2,6'
            });
        }

        $('#inputdia').on('change', function() {
        
            var $date = $('#inputdia').datepicker('getDate');
    
            var $dayOfWeek = weekday[$date.getUTCDay()]

        if($dayOfWeek = "Monday"){
            document.getElementById('08:00:00').disabled = true;
            document.getElementById('09:00:00').disabled = true;
            document.getElementById('10:00:00').disabled = true;
            document.getElementById('11:00:00').disabled = true;
            document.getElementById('14:00:00').disabled = false;
            document.getElementById('15:00:00').disabled = false;
            document.getElementById('16:00:00').disabled = false;
            document.getElementById('17:00:00').disabled = false;
        }

        else if($dayOfWeek = "Wednesday"){
            document.getElementById('08:00:00').disabled = true;
            document.getElementById('09:00:00').disabled = true;
            document.getElementById('10:00:00').disabled = true;
            document.getElementById('11:00:00').disabled = true;
            document.getElementById('14:00:00').disabled = false;
            document.getElementById('15:00:00').disabled = false;
            document.getElementById('16:00:00').disabled = false;
            document.getElementById('17:00:00').disabled = false;
        }

    });
    }
    else if($trat == "Harmonia Facial"){

        $('#inputdia').datepicker('remove');

        if (time > timeTo){

            $('#inputdia').datepicker({
                language: "pt-BR",
                startDate: '+0d',
                todayHighlight: true,
                daysOfWeekDisabled: '0,1,2,5,6'
            });
        }

        else{
            $('#inputdia').datepicker({
                language: "pt-BR",
                startDate: new Date(),
                todayHighlight: true,
                daysOfWeekDisabled: '0,1,2,5,6'
            });
        }

        $('#inputdia').on('change', function() {
        
            var $date = $('#inputdia').datepicker('getDate');
    
            var $dayOfWeek = weekday[$date.getUTCDay()]

        if($dayOfWeek = "Wednesday"){
            document.getElementById('08:00:00').disabled = true;
            document.getElementById('09:00:00').disabled = true;
            document.getElementById('10:00:00').disabled = true;
            document.getElementById('11:00:00').disabled = true;
            document.getElementById('14:00:00').disabled = false;
            document.getElementById('15:00:00').disabled = false;
            document.getElementById('16:00:00').disabled = false;
            document.getElementById('17:00:00').disabled = false;
        }

    });
    }
    else if($trat == "Clareamento Dentário"){

        $('#inputdia').datepicker('remove');

        if (time > timeTo){

            $('#inputdia').datepicker({
                language: "pt-BR",
                startDate: '+0d',
                todayHighlight: true,
                daysOfWeekDisabled: '0,1,3,5,6'
            });
        }

        else{
            $('#inputdia').datepicker({
                language: "pt-BR",
                startDate: new Date(),
                todayHighlight: true,
                daysOfWeekDisabled: '0,1,3,5,6'
            });
        }
        $('#inputdia').on('change', function() {
        
            var $date = $('#inputdia').datepicker('getDate');
    
            var $dayOfWeek = weekday[$date.getUTCDay()]

        if($dayOfWeek = "Tuesday"){
            document.getElementById('08:00:00').disabled = true;
            document.getElementById('09:00:00').disabled = true;
            document.getElementById('10:00:00').disabled = true;
            document.getElementById('11:00:00').disabled = true;
            document.getElementById('14:00:00').disabled = false;
            document.getElementById('15:00:00').disabled = false;
            document.getElementById('16:00:00').disabled = false;
            document.getElementById('17:00:00').disabled = false;
        }

        else if($dayOfWeek = "Thursday"){
            document.getElementById('08:00:00').disabled = true;
            document.getElementById('09:00:00').disabled = true;
            document.getElementById('10:00:00').disabled = true;
            document.getElementById('11:00:00').disabled = true;
            document.getElementById('14:00:00').disabled = false;
            document.getElementById('15:00:00').disabled = false;
            document.getElementById('16:00:00').disabled = false;
            document.getElementById('17:00:00').disabled = false;
        }

    });
    }
    else if($trat == "Pediatria"){

        $('#inputdia').datepicker('remove');

        if (time > timeTo){

            $('#inputdia').datepicker({
                language: "pt-BR",
                startDate: '+0d',
                todayHighlight: true,
                daysOfWeekDisabled: '0,1,2,4,5,6'
            });
        }

        else{
            $('#inputdia').datepicker({
                language: "pt-BR",
                startDate: new Date(),
                todayHighlight: true,
                daysOfWeekDisabled: '0,1,2,4,5,6'
            });
        }

        $('#inputdia').on('change', function() {
        
            var $date = $('#inputdia').datepicker('getDate');
    
            var $dayOfWeek = weekday[$date.getUTCDay()]

        if($dayOfWeek = "Wednesday"){
            document.getElementById('08:00:00').disabled = true;
            document.getElementById('09:00:00').disabled = true;
            document.getElementById('10:00:00').disabled = true;
            document.getElementById('11:00:00').disabled = true;
            document.getElementById('14:00:00').disabled = false;
            document.getElementById('15:00:00').disabled = false;
            document.getElementById('16:00:00').disabled = false;
            document.getElementById('17:00:00').disabled = false;
        }

    });
    }
	else{
			 $('#inputdia').datepicker('remove');
			if (time > timeTo){

				$('#inputdia').datepicker({
					language: "pt-BR",
					startDate: '+0d',
					todayHighlight: true,
					daysOfWeekDisabled: '0,5,6'
				});
			}

			else{

				$('#inputdia').datepicker({
					language: "pt-BR",
					startDate: new Date(),
					todayHighlight: true,
					daysOfWeekDisabled: '0,5,6',
				});

			}
		}
});
});
=======
;(function($){
	$.fn.datepicker.dates['pt-BR'] = {
		days: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"],
		daysShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
		daysMin: ["Do", "Se", "Te", "Qu", "Qu", "Se", "Sa"],
		months: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
		monthsShort: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
		today: "Hoje",
		monthsTitle: "Meses",
		clear: "Limpar",
        format: "dd-mm-yyyy",
	};
}(jQuery));

$(document).ready(function(){
    document.getElementById("inputdia").disabled = true;
    document.getElementById("inputturno").disabled = true;

    $('#inputespecialidade').on('change', function(){
        document.getElementById("inputdia").disabled = false;
        document.getElementById("inputturno").disabled = false;
    })

    var limite = new Date()

    var time = limite.getHours() + ":" + limite.getMinutes() + ":" + limite.getSeconds();

    limite.setHours(16)
    limite.setMinutes(00)
    limite.setSeconds(00)

    var timeTo = limite.getHours() + ":" + limite.getMinutes() + ":" + limite.getSeconds()

    var weekday=new Array(7);
    weekday[1]="Monday";
    weekday[2]="Tuesday";
    weekday[3]="Wednesday";
    weekday[4]="Thursday";
    weekday[5]="Friday";
    weekday[6]="Saturday";

    var $daysDisabled = function(dd){
        $('#inputdia').datepicker('remove');
        if (time > timeTo){

            $('#inputdia').datepicker({
                language: "pt-BR",
                startDate: '+0d',
                todayHighlight: true,
                daysOfWeekDisabled: dd
            });
        }

        else{
        
            $('#inputdia').datepicker({
                language: "pt-BR",
                startDate: new Date(),
                todayHighlight: true,
                daysOfWeekDisabled: dd,
            });
            
        }
    }

    var $hoursDisabled = function(turno){

        var $trn = turno;

        if($trn == "manha"){
            document.getElementById('08:00:00').disabled = false;
            document.getElementById('09:00:00').disabled = false;
            document.getElementById('10:00:00').disabled = false;
            document.getElementById('11:00:00').disabled = false;
            document.getElementById('14:00:00').disabled = true;
            document.getElementById('15:00:00').disabled = true;
            document.getElementById('16:00:00').disabled = true;
            document.getElementById('17:00:00').disabled = true;
        }

        else if ($trn == "tarde"){
            document.getElementById('08:00:00').disabled = true;
            document.getElementById('09:00:00').disabled = true;
            document.getElementById('10:00:00').disabled = true;
            document.getElementById('11:00:00').disabled = true;
            document.getElementById('14:00:00').disabled = false;
            document.getElementById('15:00:00').disabled = false;
            document.getElementById('16:00:00').disabled = false;
            document.getElementById('17:00:00').disabled = false;
        }

        else if($trn == "allday"){
            document.getElementById('08:00:00').disabled = false;
            document.getElementById('09:00:00').disabled = false;
            document.getElementById('10:00:00').disabled = false;
            document.getElementById('11:00:00').disabled = false;
            document.getElementById('14:00:00').disabled = false;
            document.getElementById('15:00:00').disabled = false;
            document.getElementById('16:00:00').disabled = false;
            document.getElementById('17:00:00').disabled = false;
        }
    }

    $('#inputespecialidade').on('change', function(){
    var $trat = document.getElementById("inputespecialidade").value;

    if($trat == "Implantes Dentários"){

        var $dd = '0,5,6'

        $daysDisabled($dd)

        $('#inputdia').on('change', function() {
            var $date = $('#inputdia').datepicker('getDate');    
            var $dayOfWeek = weekday[$date.getUTCDay()];

            console.log($dayOfWeek)

            if ($dayOfWeek == "Wednesday"){
                var $turno = "tarde";
                $hoursDisabled($turno);
            }

            else{
                var $turno = "allday";
                $hoursDisabled($turno)
            }

        });
        

    }
    else if($trat == "Tratamento Estético"){

        var $dd = '0,6'
        $daysDisabled($dd)

        $('#inputdia').on('change', function() {
        
            var $date = $('#inputdia').datepicker('getDate');    
            var $dayOfWeek = weekday[$date.getUTCDay()]

            if ($dayOfWeek == "Monday"){
                var $turno = "tarde";
                $hoursDisabled(turno)

            }
            else if ($dayOfWeek == "Wednesday"){
                var $turno = "tarde";
                $hoursDisabled($turno)
            }            

            else if($dayOfWeek == "Friday"){
                var $turno = "manha";
                $hoursDisabled($turno)
            }

            else{
                var $turno = "allday";
                $hoursDisabled($turno)
            }
        });
    }

    else if($trat == "Tratamento de Canal"){

        var $dd = '0,5,6'
        $daysDisabled($dd)        

        $('#inputdia').on('change', function() {
        
            var $date = $('#inputdia').datepicker('getDate');    
            var $dayOfWeek = weekday[$date.getUTCDay()]

            if ($dayOfWeek == "Tuesday"){
                var $turno = "manha";
                $hoursDisabled($turno)

            }
            else if ($dayOfWeek == "Wednesday"){
                var $turno = "manha";
                $hoursDisabled($turno)
            }            

            else if($dayOfWeek == "Thrusday"){
                var $turno = "tarde";
                $hoursDisabled($turno)
            }

            else{
                var $turno = "allday";
                $hoursDisabled($turno)
            }
    });

    }
    else if($trat == "Tratamento de Gengiva"){

        var $dd = '0,2,3,4,5'
        $daysDisabled($dd) 

        $('#inputdia').on('change', function() {
        
            var $date = $('#inputdia').datepicker('getDate');    
            var $dayOfWeek = weekday[$date.getUTCDay()]

            if ($dayOfWeek == "Saturday"){
                var $turno = "tarde";
                $hoursDisabled($turno)
            }

            else{
                var $turno = "allday";
                $hoursDisabled($turno)
            }

    });
        
    }
    else if($trat == "Aparelho Ortodônico"){

        var $dd = '0,2,5,6'
        $daysDisabled($dd) 

        $('#inputdia').on('change', function() {
        
            var $date = $('#inputdia').datepicker('getDate');    
            var $dayOfWeek = weekday[$date.getUTCDay()]

            if ($dayOfWeek == "Monday"){
                var $turno = "manha";
                $hoursDisabled($turno)
            }

            else if($dayOfWeek == "Wednesday"){
                var $turno = "manha";
                $hoursDisabled($turno)
            }

            else{
                var $turno = "allday";
                $hoursDisabled($turno)
            }

    });
    }
    else if($trat == "Limpeza e Flúor"){

        var $dd = '0'
        $daysDisabled($dd) 

        $('#inputdia').on('change', function() {
        
            var $date = $('#inputdia').datepicker('getDate');    
            var $dayOfWeek = weekday[$date.getUTCDay()]

            if ($dayOfWeek == "Monday"){
                var $turno = "manha";
                $hoursDisabled($turno)
            }

            else if($dayOfWeek == "Wednesday"){
                var $turno = "tarde";
                $hoursDisabled($turno)
            }

            else if ($dayOfWeek == "Saturday"){
                var $turno = "tarde";
                $hoursDisabled($turno)
            }

            else{
                var $turno = "allday";
                $hoursDisabled($turno)
            }

    });
    }
    else if($trat == "Extração Dentária"){

        var $dd = '0,2,6'
        $daysDisabled($dd) 

        $('#inputdia').on('change', function() {
        
            var $date = $('#inputdia').datepicker('getDate');    
            var $dayOfWeek = weekday[$date.getUTCDay()]

            if ($dayOfWeek == "Monday"){
                var $turno = "manha";
                $hoursDisabled($turno)
            }

            else if($dayOfWeek == "Wednesday"){
                var $turno = "manha";
                $hoursDisabled($turno)
            }

            else{
                var $turno = "allday";
                $hoursDisabled($turno)
            }

    });
    }
    else if($trat == "Harmonia Facial"){

        var $dd = '0,1,2,5,6'

        $('#inputdia').on('change', function() {
        
            var $date = $('#inputdia').datepicker('getDate');    
            var $dayOfWeek = weekday[$date.getUTCDay()]

            if ($dayOfWeek == "Monday"){
                var $turno = "manha";
                $hoursDisabled($turno)
            }

            else{
                var $turno = "allday";
                $hoursDisabled($turno)
            }
    });
    }
    else if($trat == "Clareamento Dentário"){

        var $dd = '0,1,3,5,6'
        $daysDisabled($dd) 

        $('#inputdia').on('change', function() {
        
            var $date = $('#inputdia').datepicker('getDate');    
            var $dayOfWeek = weekday[$date.getUTCDay()]

            if ($dayOfWeek == "Tuesday"){
                var $turno = "manha";
                $hoursDisabled($turno)
            }

            else if($dayOfWeek == "Thursday"){
                var $turno = "manha";
                $hoursDisabled($turno)
            }

            else{
                var $turno = "allday";
                $hoursDisabled($turno)
            }
    });
    }
    else if($trat == "Pediatria"){

        var $dd = '0,1,2,4,5,6'
        $daysDisabled($dd) 

        $('#inputdia').on('change', function() {
        
            var $date = $('#inputdia').datepicker('getDate');    
            var $dayOfWeek = weekday[$date.getUTCDay()]

            if ($dayOfWeek == "Wednesday"){
                var $turno = "manha";
                $hoursDisabled($turno)
            }

            else{
                var $turno = "allday";
                $hoursDisabled($turno)
            }
    });
    }
    else{
        var $dd = '0'
        $daysDisabled($dd) 
    }
});
});
>>>>>>> 7e4ca4e11c70f20563b445ab3aaf02533973e672:agendamento.js
