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
		format: "dd-mm-yyyy"
	};
}(jQuery));


$(document).ready(function(){

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
        
        $('#inputdia').datepicker({
            language: "pt-BR",
            startDate: new Date(),
            todayHighlight: true,
            daysOfWeekDisabled: '0,5,6',
        });
        
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
        $('#inputdia').datepicker({
            language: "pt-BR",
            startDate: new Date(),
            todayHighlight: true,
            daysOfWeekDisabled: '0,6'
        });

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
        $('#inputdia').datepicker({
            language: "pt-BR",
            startDate: new Date(),
            todayHighlight: true,
            daysOfWeekDisabled: '0,5,6'
        });

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
        $('#inputdia').datepicker({
            language: "pt-BR",
            startDate: new Date(),
            todayHighlight: true,
            daysOfWeekDisabled: '0,2,3,4,5'
        });
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
        $('#inputdia').datepicker({
            language: "pt-BR",
            startDate: new Date(),
            todayHighlight: true,
            daysOfWeekDisabled: '0,2,5,6'
        });

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
        $('#inputdia').datepicker({
            language: "pt-BR",
            startDate: new Date(),
            todayHighlight: true,
            daysOfWeekDisabled: '0'
        });

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
        $('#inputdia').datepicker({
            language: "pt-BR",
            startDate: new Date(),
            todayHighlight: true,
            daysOfWeekDisabled: '0,2,6'
        });

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
        $('#inputdia').datepicker({
            language: "pt-BR",
            startDate: new Date(),
            todayHighlight: true,
            daysOfWeekDisabled: '0,1,2,5,6'
        });

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
        $('#inputdia').datepicker({
            language: "pt-BR",
            startDate: new Date(),
            todayHighlight: true,
            daysOfWeekDisabled: '0,1,3,5,6'
        });

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
        $('#inputdia').datepicker({
            language: "pt-BR",
            startDate: new Date(),
            todayHighlight: true,
            daysOfWeekDisabled: '0,1,2,4,5,6'
        });

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

    }
});
});
