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

    $('#inputespecialidade').on('change', function(){
    var $trat = document.getElementById("inputespecialidade").value;

    if($trat == "Implantes Dentários"){

        $('#inputdia').datepicker('remove');
        
        $('#inputdia').datepicker({
            language: "pt-BR",
            startDate: new Date(),
            todayHighlight: true,
            daysOfWeekDisabled: '0,5,6'
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
    }
    else if($trat == "Tratamento de Canal"){

        $('#inputdia').datepicker('remove');
        $('#inputdia').datepicker({
            language: "pt-BR",
            startDate: new Date(),
            todayHighlight: true,
            daysOfWeekDisabled: '0,5,6'
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
    }
    else if($trat == "Aparelho Ortodônico"){

        $('#inputdia').datepicker('remove');
        $('#inputdia').datepicker({
            language: "pt-BR",
            startDate: new Date(),
            todayHighlight: true,
            daysOfWeekDisabled: '0,2,5,6'
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
    }
    else if($trat == "Extração Dentária"){

        $('#inputdia').datepicker('remove');
        $('#inputdia').datepicker({
            language: "pt-BR",
            startDate: new Date(),
            todayHighlight: true,
            daysOfWeekDisabled: '0,2,6'
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
    }
    else if($trat == "Clareamento Dentário"){

        $('#inputdia').datepicker('remove');
        $('#inputdia').datepicker({
            language: "pt-BR",
            startDate: new Date(),
            todayHighlight: true,
            daysOfWeekDisabled: '0,1,3,5,6'
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
    }
    else{

    }
});
});



