$(document).ready(function (){

	// Search
	let searchBar = $("header input");
	
	$('.search').hover(function(){
		if ($(searchBar).hasClass("show")) {
			$(searchBar).removeClass('show');
		} 
		else {
			$(searchBar).addClass('show');
		}
	});
	$(searchBar).hover(function(){
		if ($(searchBar).hasClass("show")) {
			$(searchBar).removeClass('show');
		} 
		else {
			$(searchBar).addClass('show');
		}
	});

	// Menu Light/Dark
	if($('article').data("page") === '01'){
		$('header .wrapper').addClass('light');
	}


	////////////MENU////////////
	
	// Menu Responsive
	$('.mobile-menu').click(function(){ 
		if($('header').hasClass("opened")){
			$('header').removeClass('opened');
			$('.mobile-menu').removeClass('opened');
			document.body.style.overflow = "auto";
  
			if ($(window).scrollTop() > 0) {
				$("header .wrapper").addClass("thin");
			}
		}
		else {
			$('header').addClass('opened');
			$('.mobile-menu').addClass('opened');
			$("header .wrapper").removeClass("thin");
			document.body.style.overflow = "hidden";
		}
	});


	// Menu Scroll
	$(window).scroll(function() {    
		if ($(window).scrollTop() > 0) {
			$("header").addClass("thin");
		}
		else {
			$("header").removeClass("thin");
		}
	});


	////////////SLIDER////////////

	// Slider Single
	$('.single').slick({
		slidesToShow: 1,
  		slidesToScroll: 1,
		dots: true,
		prevArrow:'<div class="slick-prev slick-arrow"><svg viewBox="0 0 100 100"><path d="M29.4,50,75.5,4.5a3.7,3.7,0,0,0,.7-2A2.5,2.5,0,0,0,73.7,0h-.2c-.7,0-1.4.3-2.5,1.4L24.8,48a2.5,2.5,0,0,0-1,2,2.3,2.3,0,0,0,1,2L71.7,99.1a2.1,2.1,0,0,0,1.8.9,2.6,2.6,0,0,0,2.7-2.4v-.3a2.7,2.7,0,0,0-.7-1.8Z" class="arrow"</path></svg></div>',
		nextArrow:'<div class="slick-next slick-arrow"><svg viewBox="0 0 100 100"><path d="M29.4,50,75.5,4.5a3.7,3.7,0,0,0,.7-2A2.5,2.5,0,0,0,73.7,0h-.2c-.7,0-1.4.3-2.5,1.4L24.8,48a2.5,2.5,0,0,0-1,2,2.3,2.3,0,0,0,1,2L71.7,99.1a2.1,2.1,0,0,0,1.8.9,2.6,2.6,0,0,0,2.7-2.4v-.3a2.7,2.7,0,0,0-.7-1.8Z" class="arrow" transform="translate(100, 100) rotate(180)"></path></svg></div>',
	});

	
	// Slider Single Thumb
	$('.single-thumb').slick({
		arrows : false,		
		dots: false,
		slidesToScroll: 1,
		slidesToShow: 1
	});
	$('.single-thumb-nav').slick({
		arrows : false,
		asNavFor: '.single-thumb',
		dots: false,
		focusOnSelect: true,
		slidesToShow: 3
	});


	// Slider Multiple
	$('.multiple').slick({
		dots: false,
		slidesToShow: 6,
  		slidesToScroll: 2,
		prevArrow:'<div class="slick-prev slick-arrow"><svg viewBox="0 0 100 100"><path d="M29.4,50,75.5,4.5a3.7,3.7,0,0,0,.7-2A2.5,2.5,0,0,0,73.7,0h-.2c-.7,0-1.4.3-2.5,1.4L24.8,48a2.5,2.5,0,0,0-1,2,2.3,2.3,0,0,0,1,2L71.7,99.1a2.1,2.1,0,0,0,1.8.9,2.6,2.6,0,0,0,2.7-2.4v-.3a2.7,2.7,0,0,0-.7-1.8Z" class="arrow"</path></svg></div>',
		nextArrow:'<div class="slick-next slick-arrow"><svg viewBox="0 0 100 100"><path d="M29.4,50,75.5,4.5a3.7,3.7,0,0,0,.7-2A2.5,2.5,0,0,0,73.7,0h-.2c-.7,0-1.4.3-2.5,1.4L24.8,48a2.5,2.5,0,0,0-1,2,2.3,2.3,0,0,0,1,2L71.7,99.1a2.1,2.1,0,0,0,1.8.9,2.6,2.6,0,0,0,2.7-2.4v-.3a2.7,2.7,0,0,0-.7-1.8Z" class="arrow" transform="translate(100, 100) rotate(180)"></path></svg></div>',
		responsive: [
			{
			breakpoint: 600,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			}
		]
	});


	// Input Selected
	let button = $(".product-description input");
	
	$(button).click(function(){ 
		if($(this).hasClass("selected")){
			$(button).removeClass('selected');
		}
		else {
			$(button).removeClass('selected');
			$(this).addClass('selected');
		}
	});


	////////////PAYMENT////////////

	//Definir Valor por Artigo
	function Amount(){
		let product = $(".product");
		let quantity = $(".quantity");
		let amount = $(".amount");

		
		for(i=0; i<product.length; i++) {
			let valorUnitario = product[i].dataset.value;
			let valorUnitarioNumber = Number(valorUnitario.replace('€', '').replace(',', '.'))

			let valorQuantity = quantity[i].innerText;
			let valorQuantityNumber = Number(valorQuantity);

			let valor = valorUnitarioNumber * valorQuantityNumber;

			if (Number.isInteger(valor)) {
				amount[i].children[0].innerHTML = "€" + valor +",00";
			}
			else {
				amount[i].children[0].innerHTML = "€" + valor;
			}
		}
		valorSubtotal()
	}
	Amount()

	//Aumentar Quantidade
	$('.more').click(function(){ 
		let parent = $(this).parents(".quantity");
		let quantity = parent[0].children[0].innerText;
		let quantityNumber = Number(quantity);
		let quantityNew = quantityNumber + 1;

		parent[0].children[0].innerText = quantityNew;
		Amount()
	});

	//Diminuir Quantidade
	$('.less').click(function(){ 
		let parent = $(this).parents(".quantity");
		let quantity = parent[0].innerText;
		let quantityNumber = Number(quantity);
		let quantityNew = quantityNumber - 1;

		if (quantityNew > 0){
			parent[0].children[0].innerText = quantityNew;
		}
		else {
			$(parent).closest('ul').remove();
		}
		Amount()
	});


	// Apagar Producto
	$('.delete svg').click(function(){ 
		$(this).closest('ul').remove();
		valorSubtotal()
	});


	// Adicionar Valor Subtotal
	function valorSubtotal() {
		let amount = document.querySelectorAll(".amount p" );
		let subtotal = document.querySelectorAll( ".subtotal" );
		let subtotalNumber = 0;

		for(i=0; i<amount.length; i++) {
			let valor = amount[i].innerHTML;
			let valorNumber = Number(valor.replace('€', '').replace(',', '.'));
			subtotalNumber = subtotalNumber + valorNumber;

			for(j=0; j<subtotal.length; j++) {
				if (Number.isInteger(subtotalNumber)) {
					subtotal[j].innerHTML = "€" + subtotalNumber +",00";
				}
				else {
					subtotal[j].innerHTML = "€" + subtotalNumber;
				}
			}
		}
		valorTotal()
	}
	valorSubtotal()


	// Adicionar Valor de Metodo de Entrega
	$("#deliveryMethod").on("change", function(){ 

		let deliveryMethod = document.querySelector( "#deliveryMethod" );

		document.querySelector( ".shipping" ).innerHTML = deliveryMethod.options[deliveryMethod.selectedIndex].value;
		
		valorTotal()
	});


	// Adicionar Valor Total
	function valorTotal() {
		let subtotal = document.querySelector( ".subtotal" ).innerHTML;
		let subtotalNumber = Number(subtotal.replace('€', '').replace(',', '.'));

		let shipping = document.querySelector( ".shipping" ).innerHTML;
		let shippingNumber = Number(shipping.replace('€', '').replace(',', '.'));

		let total = "€" + (subtotalNumber + shippingNumber);

		document.querySelector( ".total" ).innerHTML = total;
	}
	valorTotal()


	// Adicionar Metodo de Pagamento
	$('.payment .btn').click(function(){ 
		let paymentMethod = document.querySelector( "#paymentMethod" );
		if (paymentMethod.options[paymentMethod.selectedIndex].value == "") {
			alert( "Please select a Payment Method" )
		}
	});
	
}); 
