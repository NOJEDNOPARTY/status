$(document).ready(function() {
	//SUBMIT
	$('#form_consult').on('submit', function() {
		send_consult();
	});
	$('#form_popup').on('submit', function() {
		send_buy();
	});


	//SET HIDDEN FIELDS
	$('.PACO-RABANNE').on('click', function() {
		$('#popup_price').val('3530');
		$('#popup_subject').val('Юбка PACO RABANNE');
	});

	$('.ANN-DEMEULEMEESTER').on('click', function() {
		$('#popup_price').val('2050');
		$('#popup_subject').val('Футболка ANN DEMEULEMEESTER');
	});

	$('.ONE-TEASPOON').on('click', function() {
		$('#popup_price').val('2260');
		$('#popup_subject').val('Шорты ONE TEASPOON');
	});

	$('.ONE-TEASPOON').on('click', function() {
		$('#popup_price').val('2260');
		$('#popup_subject').val('Шорты ONE TEASPOON');
	});

	$('.ESSENTIEL-ANTWERP').on('click', function() {
		$('#popup_price').val('3910');
		$('#popup_subject').val('Юбка ESSENTIEL ANTWERP');
	});

	$('.ESSENTIEL-ANTWERP-2').on('click', function() {
		$('#popup_price').val('Юбка ESSENTIEL ANTWERP');
		$('#popup_subject').val('4330');
	});

	$('.UNRAVEL-PROJECT').on('click', function() {
		$('#popup_price').val('6690');
		$('#popup_subject').val('Шорты UNRAVEL PROJECT');
	});

	$('.ALEXANDERWANG').on('click', function() {
		$('#popup_price').val('6690');
		$('#popup_subject').val('Рубашка ALEXANDERWANG');
	});

	$('.KENZO').on('click', function() {
		$('#popup_price').val('6230');
		$('#popup_subject').val('Платье KENZO');
	});

	$('.ZOE-KARSSEN').on('click', function() {
		$('#popup_price').val('1450');
		$('#popup_subject').val('Шорты ZOE KARSSEN');
	});
	$('.MARNI').on('click', function() {
		$('#popup_price').val('Футболка MARNI');
		$('#popup_subject').val('2650');
	});
	$('.UNRAVEL-PROJECT').on('click', function() {
		$('#popup_price').val('10690');
		$('#popup_subject').val('Рубашка UNRAVEL PROJECT');
	});
	$('.GCDS').on('click', function() {
		$('#popup_price').val('4140');
		$('#popup_subject').val('Джинсы GCDS');
	});
	$('.ONE-TEASPOON').on('click', function() {
		$('#popup_price').val('3290');
		$('#popup_subject').val('Джинсы ONE TEASPOON');
	});
	$('.GCDS-kross').on('click', function() {
		$('#popup_price').val('2430');
		$('#popup_subject').val('Кроссовки GCDS');
	});
	$('.WON-HUNDRED').on('click', function() {
		$('#popup_price').val('5270');
		$('#popup_subject').val('Кроссовки WON HUNDRED');
	});
	$('.UNRAVEL-PROJECT').on('click', function() {
		$('#popup_price').val('8470');
		$('#popup_subject').val('Кроссовки UNRAVEL PROJECT');
	});
	$('.KENZO-1').on('click', function() {
		$('#popup_price').val('3100');
		$('#popup_subject').val('Эспадрильи KENZO');
	});
	$('.KENZO-2').on('click', function() {
		$('#popup_price').val('5200');
		$('#popup_subject').val('Эспадрильи KENZO');
	});
	$('.PREMIATA-1').on('click', function() {
		$('#popup_price').val('4370');
		$('#popup_subject').val('Кроссовки PREMIATA');
	});
	$('.CRIME-LONDON').on('click', function() {
		$('#popup_price').val('3680');
		$('#popup_subject').val('Кроссовки CRIME LONDON');
	});
	$('.PREMIATA-2').on('click', function() {
		$('#popup_price').val('4370');
		$('#popup_subject').val('Кроссовки PREMIATA');
	});
	$('.CRIME-LONDON').on('click', function() {
		$('#popup_price').val('4690');
		$('#popup_subject').val('Кроссовки CRIME LONDON');
	});
	$('.GANNI').on('click', function() {
		$('#popup_price').val('7080');
		$('#popup_subject').val('Кроссовки GANNI');
	});
	$('.NAKED-WOLFE').on('click', function() {
		$('#popup_price').val('8710');
		$('#popup_subject').val('Кроссовки NAKED WOLFE');
	});
	$('.MARNI').on('click', function() {
		$('#popup_price').val('5390');
		$('#popup_subject').val('Кроссовки MARNI');
	});
	$('.MARC-JACOBS-1').on('click', function() {
		$('#popup_price').val('8590');
		$('#popup_subject').val('Сумка MARC JACOBS');
	});
	$('.MARC-JACOBS-2').on('click', function() {
		$('#popup_price').val('10110');
		$('#popup_subject').val('Сумка MARC JACOBS');
	});
	$('.MARC-JACOBS-3').on('click', function() {
		$('#popup_price').val('11940');
		$('#popup_subject').val('Сумка MARC JACOBS');
	});
	$('.MARC-JACOBS-4').on('click', function() {
		$('#popup_price').val('11940');
		$('#popup_subject').val('Сумка MARC JACOBS');
	});
	$('.MARC-JACOBS-5').on('click', function() {
		$('#popup_price').val('14360');
		$('#popup_subject').val('Сумка MARC JACOBS');
	});
	$('.MARC-JACOBS-6').on('click', function() {
		$('#popup_price').val('10770');
		$('#popup_subject').val('Сумка MARC JACOBS');
	});
	$('.PMDS').on('click', function() {
		$('#popup_price').val('4210');
		$('#popup_subject').val('Джинсы PMDS');
	});
	$('.MARCELO-BURLON').on('click', function() {
		$('#popup_price').val('5300');
		$('#popup_subject').val('Футболка MARCELO BURLON');
	});
	$('.GCDS').on('click', function() {
		$('#popup_price').val('3960');
		$('#popup_subject').val('Шорты GCDS');
	});
	$('.PAUL-SMITH').on('click', function() {
		$('#popup_price').val('1580');
		$('#popup_subject').val('Футболка PAUL SMITH');
	});
	$('.PAUL-SMITH-2').on('click', function() {
		$('#popup_price').val('4340');
		$('#popup_subject').val('Рубашка PAUL SMITH');
	});
	$('.PAUL-SMITH-3').on('click', function() {
		$('#popup_price').val('3140');
		$('#popup_subject').val('Джинсы PAUL SMITH');
	});
	$('.STONE-ISLAND').on('click', function() {
		$('#popup_price').val('5630');
		$('#popup_subject').val('Свитшот STONE ISLAND');
	});
	$('.STONE-ISLAND-2').on('click', function() {
		$('#popup_price').val('5010');
		$('#popup_subject').val('Свитшот STONE ISLAND');
	});
	$('.HERON-PRESTON').on('click', function() {
		$('#popup_price').val('4840');
		$('#popup_subject').val('Плавки HERON PRESTON');
	});
	$('.KENZO-K').on('click', function() {
		$('#popup_price').val('6280');
		$('#popup_subject').val('Кроссовки KENZO');
	});
	$('.PREMIATA-K').on('click', function() {
		$('#popup_price').val('4750');
		$('#popup_subject').val('Кроссовки PREMIATA');
	});
	$('.GCDS-S').on('click', function() {
		$('#popup_price').val('2300');
		$('#popup_subject').val('Сланцы GCDS');
	});
	$('.GCDS-E').on('click', function() {
		$('#popup_price').val('3700');
		$('#popup_subject').val('Эспадрильи GCDS');
	});
	$('.KENZO-SUMKA').on('click', function() {
		$('#popup_price').val('5400');
		$('#popup_subject').val('KENZO-SUMKA');
	});

	$('.MARC-JACOBS-R').on('click', function() {
		$('#popup_price').val('7140');
		$('#popup_subject').val('Рюкзак MARC JACOBS');
	});
	$('.MARC-JACOBS-R-2').on('click', function() {
		$('#popup_price').val('6310');
		$('#popup_subject').val('Рюкзак MARC JACOBS');
	});
	$('.HERON-PRESTON-K').on('click', function() {
		$('#popup_price').val('2810');
		$('#popup_subject').val('Кепка HERON PRESTON');
	});
	$('.OFF-WHITE').on('click', function() {
		$('#popup_price').val('11000');
		$('#popup_subject').val('Сумка OFF-WHITE');
	});
	$('.MARYSIA-K').on('click', function() {
		$('#popup_price').val('5830');
		$('#popup_subject').val('Купальник MARYSIA');
	});
	$('.MC2-ST-BARTH').on('click', function() {
		$('#popup_price').val('2560');
		$('#popup_subject').val('Купальник MC2 ST.BARTH');
	});
	$('.MARYSIA-K-2').on('click', function() {
		$('#popup_price').val('5360');
		$('#popup_subject').val('Купальник MARYSIA');
	});
	$('.MARYSIA-K-3').on('click', function() {
		$('#popup_price').val('5300');
		$('#popup_subject').val('Купальник MARYSIA');
	});
	$('.MC2-ST-BARTH-2').on('click', function() {
		$('#popup_price').val('3400');
		$('#popup_subject').val('Купальник MC2 ST.BARTH');
	});
	$('.MC2-ST-BARTH-3').on('click', function() {
		$('#popup_price').val('2560');
		$('#popup_subject').val('Купальник MC2 ST.BARTH');
	});
	$('.MC2-ST-BARTH-4').on('click', function() {
		$('#popup_price').val('2770');
		$('#popup_subject').val('Купальник MC2 ST.BARTH');
	});

	$('.ISABEL-MARANT').on('click', function() {
		$('#popup_price').val('1430');
		$('#popup_subject').val('Бюстье ISABEL MARANT');
	});
	$('.MC2-ST-BARTH').on('click', function() {
		$('#popup_price').val('3050');
		$('#popup_subject').val('Купальник MC2 ST.BARTH');
	});
	$('.ALEXANDERWANG-1').on('click', function() {
		$('#popup_price').val('5690');
		$('#popup_subject').val('Шорты ALEXANDERWANG');
	});
	$('.ETOILE-ISABEL-MARANT').on('click', function() {
		$('#popup_price').val('3290');
		$('#popup_subject').val('Шорты ETOILE ISABEL MARANT');
	});
	$('.ZOE-KARSSEN').on('click', function() {
		$('#popup_price').val('1450');
		$('#popup_subject').val('Шорты ZOE KARSSEN');
	});
	$('.MARISSA-WEBB').on('click', function() {
		$('#popup_price').val('4150');
		$('#popup_subject').val('Шорты MARISSA WEBB');
	});
	$('.KENZO-10').on('click', function() {
		$('#popup_price').val('4330');
		$('#popup_subject').val('Шорты KENZO');
	});
	$('.R13').on('click', function() {
		$('#popup_price').val('4820');
		$('#popup_subject').val('Шорты R13');
	});
	$('.FRAME').on('click', function() {
		$('#popup_price').val('4580');
		$('#popup_subject').val('Шорты FRAME');
	});
	$('.UNRAVEL-PROJECT').on('click', function() {
		$('#popup_price').val('6690');
		$('#popup_subject').val('Шорты UNRAVEL PROJECT');
	});
	$('.ONE-TEASPOON').on('click', function() {
		$('#popup_price').val('2260');
		$('#popup_subject').val('Шорты ONE TEASPOON');
	});
	$('.PACO-RABANNE-S').on('click', function() {
		$('#popup_price').val('6670');
		$('#popup_subject').val('Сумка PACO RABANNE');
	});
	$('.PACO-RABANNE-S-2').on('click', function() {
		$('#popup_price').val('10410');
		$('#popup_subject').val('Сумка PACO RABANNE');
	});
	$('.HERON-PRESTON').on('click', function() {
		$('#popup_price').val('2810');
		$('#popup_subject').val('Кепка HERON PRESTON');
	});
	$('.MARC-JACOBS-R').on('click', function() {
		$('#popup_price').val('6310');
		$('#popup_subject').val('Рюкзак MARC JACOBS');
	});
	$('.MARC-JACOBS-R-2').on('click', function() {
		$('#popup_price').val('7140');
		$('#popup_subject').val('Рюкзак MARC JACOBS');
	});
	$('.GCDS-K-2').on('click', function() {
		$('#popup_price').val('2000');
		$('#popup_subject').val('Кепка GCDS');
	});
	$('.PALM-ANGELS-2').on('click', function() {
		$('#popup_price').val('5790');
		$('#popup_subject').val('Сумка PALM ANGELS');
	});
	$('.PALM-ANGELS-3').on('click', function() {
		$('#popup_price').val('2230');
		$('#popup_subject').val('Шляпа PALM ANGELS');
	});
	$('.PALM-ANGELS-4').on('click', function() {
		$('#popup_price').val('2010');
		$('#popup_subject').val('Шляпа PALM ANGELS');
	});
	$('.KENZO-S-5400').on('click', function() {
		$('#popup_price').val('5400');
		$('#popup_subject').val('Сумка KENZO');
	});
	$('.MC2-ST-BARTH-2780').on('click', function() {
		$('#popup_price').val('2780');
		$('#popup_subject').val('Сумка MC2 ST.BARTH');
	});
	$('.MC2-ST-BARTH-2840').on('click', function() {
		$('#popup_price').val('2840');
		$('#popup_subject').val('Сумка MC2 ST.BARTH');
	});
	$('.MC2-ST-BARTH-3120').on('click', function() {
		$('#popup_price').val('3120');
		$('#popup_subject').val('Сумка MC2 ST.BARTH');
	});
	$('.MC2-ST-BARTH-1740').on('click', function() {
		$('#popup_price').val('1740');
		$('#popup_subject').val('Футболка MC2 ST.BARTH');
	});
	$('.MC2-ST-BARTH-1900').on('click', function() {
		$('#popup_price').val('1900');
		$('#popup_subject').val('Футболка MC2 ST.BARTH');
	});
	$('.MC2-ST-BARTH-3370').on('click', function() {
		$('#popup_price').val('3370');
		$('#popup_subject').val('Плавки MC2 ST.BARTH');
	});
	$('.MC2-ST-BARTH-2530').on('click', function() {
		$('#popup_price').val('2530');
		$('#popup_subject').val('Плавки MC2 ST.BARTH');
	});
	$('.MC2-ST-BARTH-3140').on('click', function() {
		$('#popup_price').val('3140');
		$('#popup_subject').val('Плавки MC2 ST.BARTH');
	});
	$('.MC2-ST-BARTH-3030').on('click', function() {
		$('#popup_price').val('3030');
		$('#popup_subject').val('Плавки MC2 ST.BARTH');
	});
	$('.MC2-ST-BARTH-2440').on('click', function() {
		$('#popup_price').val('2440');
		$('#popup_subject').val('Плавки MC2 ST.BARTH');
	});
	$('.MC2-ST-BARTH-3920').on('click', function() {
		$('#popup_price').val('3920');
		$('#popup_subject').val('Плавки MC2 ST.BARTH');
	});
	$('.MC2-ST-BARTH-2860').on('click', function() {
		$('#popup_price').val('2860');
		$('#popup_subject').val('Плавки MC2 ST.BARTH');
	});
	$('.KENZO-5400').on('click', function() {
		$('#popup_price').val('5400');
		$('#popup_subject').val('Сумка KENZO');
	});
	$('.GCDS-2000').on('click', function() {
		$('#popup_price').val('2000');
		$('#popup_subject').val('Кепка GCDS');
	});
	$('.MARC-JACOBS-7140').on('click', function() {
		$('#popup_price').val('7140');
		$('#popup_subject').val('Рюкзак MARC JACOBS');
	});
	$('.MARC-JACOBS-6310').on('click', function() {
		$('#popup_price').val('6310');
		$('#popup_subject').val('Рюкзак MARC JACOBS');
	});
	$('.HERON-PRESTON-2810').on('click', function() {
		$('#popup_price').val('2810');
		$('#popup_subject').val('Кепка HERON PRESTON');
	});
	$('.PALM-ANGELS-2230').on('click', function() {
		$('#popup_price').val('2230');
		$('#popup_subject').val('Шляпа PALM ANGELS');
	});
	$('.PALM-ANGELS-2010').on('click', function() {
		$('#popup_price').val('2010');
		$('#popup_subject').val('Шляпа PALM ANGELS');
	});
});

function send_consult() {
	var form_id = '#form_consult';
	var msg = $(form_id).serialize();
	$.ajax({
		type: 'POST',
		url: 'mail/send_consult.php',
		data: msg,
		success: function(data) {
			if (data == "send_error") {
				alert('Возникла ошибка при отправке. Попробуйте пожалуйста еще раз.');
			}
			else if (data == "send_success") {
				$(form_id)[0].reset();

				$('#thanksPopup').addClass('active');
			}
		},
		error: function(xhr, str){
			alert('Error: ' + xhr.responseCode + ' Please, try again later.');
		}
	});
}

function send_buy() {
	var form_id = '#form_popup';
	var msg = $(form_id).serialize();
	$.ajax({
		type: 'POST',
		url: 'mail/send.php',
		data: msg,
		success: function(data) {
			if (data == "send_error") {
				alert('Возникла ошибка при отправке. Попробуйте пожалуйста еще раз.');
			}
			else if (data == "send_success") {
				$(form_id)[0].reset();
				$('#callBackPopup').removeClass('active');
				$('#thanksPopup').addClass('active');
			}
		},
		error: function(xhr, str){
			alert('Error: ' + xhr.responseCode + ' Please, try again later.');
		}
	});
}