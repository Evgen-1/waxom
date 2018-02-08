				// smooth scroll from menu 


$('nav li:nth-of-type(6n)').click(function(e){
			e.preventDefault();
$('html, body').animate({scrollTop:$('.footer').position().top}, 2500);
			});

$('nav li:nth-of-type(4n)').prev().click(function(e){
			e.preventDefault();
$('html, body').animate({scrollTop:$('.partners').position().top}, 2500);
			});

$('nav li:nth-of-type(5n)').click(function(e){
			e.preventDefault();
$('html, body').animate({scrollTop:$('.mobile').position().top}, 2500);
			});

$('nav li:nth-of-type(4n)').click(function(e){
			e.preventDefault();
$('html, body').animate({scrollTop:$(' .realisation + .wordpress').position().top}, 2500);
			});

$('nav  li:first-of-type').click(function(e){
			e.preventDefault();
$('html, body').animate({scrollTop:$('.projects').position().top}, 2500);
			});

$('nav  li:first-of-type + li').click(function(e){
			e.preventDefault();
$('html, body').animate({scrollTop:$('.realisation').position().top}, 2500);
			});



// when srcreen achive wordpres-bot block start anime
var wordpress=document.querySelector('.wordpress-bot'); 
window.onscroll=function (){
	
	if (window.pageYOffset +document.documentElement.clientHeight > wordpress.offsetTop){
		var f= anime({
    targets: '.wordpress-bot .anime-clients',	
	  textContent:{
	  	value:118,
	  	duration:10000,
	  round:1,
	  easing:'linear'
	  }
	});

anime({
    targets: '.wordpress-bot .anime-cofee',	
	  textContent:{
	  	value:704,
	  	duration:10000,
	  round:1,
	  easing:'linear'
	  }
	});


anime({
    targets: '.wordpress-bot .anime-blog',	
	  textContent:{
	  	value:2500,
	  	duration:10000,
	  round:1,
	  easing:'linear'
	  }
	});

 anime({
    targets: '.wordpress-bot .anime-likes',	
	  textContent:{
	  	value:1723,
	  	duration:10000,
	  round:1,
	  easing:'linear'
	  }
	});

	}

};


 // start snap animation

var cup=Snap.select('#cup');
var steam1=Snap.select('#steam1');
var steam2=Snap.select('#steam2');
var steam3=Snap.select('#steam3');
var steam=cup.group(steam1, steam2, steam3);
function up(){
	steam.animate({
'transform':'t0 -30'
	},1000, down )
}

function down(){
	steam.animate({
'transform':'t0 25'
	},1000, up)
}

up();

var blog=Snap.select('#blog');
var pencil=Snap.select('#blog-part');
function write(){
	pencil.animate({
		'transform':'t-130 0'
	},1500, writeback)
}

function writeback(){
pencil.animate({
		'transform':'t-20 0'
	},1000, write)
}

write();

var heart= Snap.select('#heart');

function heartMore(){
	heart.animate({
		'transform':'s1.1 1.1'
	}, 1000, heartLess);
}

function heartLess(){
	heart.animate({
		'transform':'s1 1'
	}, 1000, heartMore);

}
heartLess();