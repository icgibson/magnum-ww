var gallery;
var infoText;
var mapCanvas;
var projTitle;
var artistName;
var projDesc;
var colorbg;

var x1 = 807; var y1 = 340;
var x2 = 904; var y2 = 314;
var x3 = 821; var y3 = 230;
var x4 = 1040; var y4 = 280;
var x5 = 757; var y5 = 247;
var x6 = 991; var y6 = 350;
var x7 = 293; var y7 = 266;
var x8 = 426; var y8 = 607; 
var x9 = 1200; var y9 = 300;

var R = 20;
var minDis = 10;

	function setup() {
		
		mapCanvas = createCanvas(1440,900);
		mapCanvas.style.zIndex = 0;

		document.getElementById('close').addEventListener('click', function() {
			TweenLite.to(colorbg,0.5,{opacity:0});
		})

		gallery = document.getElementById('gallery');
		curImg = document.getElementById('curImg');
		curImg.style.height = windowHeight - 190 +'px';
		curImg.style.width = windowWidth - 550 + 'px';

		projTitle = document.getElementById('projTitle');
		artistName = document.getElementById('artistName');
		projDesc = document.getElementById('projDesc');
		colorbg = document.getElementById('colorbg');

		infoText = document.getElementById('infoText');
		infoText.style.height = windowHeight - 210 +'px';

	}
	
	function draw() {
		fill(145,40,61);
    	noStroke();
    
	    ellipse(x1,y1,R,R);
	    ellipse(x2, y2,R,R);
	    ellipse(x3, y3,R,R);
	    ellipse(x4, y4,R,R);
	    ellipse(x5, y5,R,R);
	    ellipse(x6, y6,R,R);
	    ellipse(x7, y7,R,R);
	    ellipse(x8, y8,R,R);
	    ellipse(x9, y9,R,R);
	}

	function display(artist,imgNum,total) {
		curImg.innerHTML = "<img id='innerImg' src='img/" +artist +"/" +imgNum +".jpg' height='" +curImg.style.height +"'>";
		curImg.style.zIndex = 2;
		infoText.style.zIndex = 1;
		TweenLite.to(colorbg,0.5,{opacity:1});
		for(var i = 1; i < total; i++) {
			if(i != imgNum) {
				console.log(i);
				document.getElementById(String(artist +i)).style.opacity = '0.5'
			} else {
				document.getElementById(String(artist +i)).style.opacity = '1'
			}
		}
	}

	function mousePressed() {
		console.log(mouseX +", " +mouseY);
		var size1 = dist(mouseX, mouseY, x1, y1);
		var size2 = dist(mouseX, mouseY, x2, y2);
		var size3 = dist(mouseX, mouseY, x3, y3);
		var size4 = dist(mouseX, mouseY, x4, y4);
		var size5 = dist(mouseX, mouseY, x5, y5);
		var size6 = dist(mouseX, mouseY, x6, y6);
		var size7 = dist(mouseX, mouseY, x7, y7);
		var size8 = dist(mouseX, mouseY, x8, y8);
		var size9 = dist(mouseX, mouseY, x9, y9);
		if (size1< minDis){
			gallery.innerHTML = '';
			projTitle.innerHTML = 'BACK HOME'
			artistName.innerHTML = 'By Eman Helal'
			projDesc.innerHTML = 'Christian survivors of sectarian violence are returning to their predominantly Muslim communities after being attacked by pro-Morsy supporters. How are they engaging and coexisting with their Muslim neighbors?'
			for(var i = 1; i < 38; i++) {
			gallery.innerHTML = gallery.innerHTML + "<img class='gImg' id='eman" +i +"' src='img/eman/" +i +".jpg'>"

			}
			document.getElementById('colorbg').style.zIndex = 2;
			display('eman',1,38);
			eman();
		}
		
		if (size2< minDis){
			gallery.innerHTML = '';
			projTitle.innerHTML = 'JESUS IN IRAN'
			artistName.innerHTML = 'By Abbas Hajimohammadi'
			projDesc.innerHTML = 'Armenian Christians have lived peacefully in Iran, a predominantly Muslim country, for more than 400 years. This story offers a closer look at how this Christian minority coexists with their Muslim neighbors.'
			for(var i = 1; i < 28; i++) {
			gallery.innerHTML = gallery.innerHTML + "<img class='gImg' id='abbas" +i +"' src='img/abbas/" +i +".jpg'>"

			}
			document.getElementById('colorbg').style.zIndex = 2;
			display('abbas',1,28);	
			abbas();
		}
		
		if (size3< minDis){
			gallery.innerHTML = '';
			projTitle.innerHTML = 'HOMELAND IN EXILE'
			artistName.innerHTML = 'By Anastasia Vlasova'
			projDesc.innerHTML = 'Crimean Tatars are an ethnic minority that were forced to leave Crimea after the Russian annexation in 2014. They resettled in Lviv, Western Ukraine, a predominantly Christian area. Here they are able to build community and integrate peacefully.'
			for(var i = 1; i < 47; i++) {
				gallery.innerHTML = gallery.innerHTML + "<img class='gImg' id='anastasia" +i +"' src='img/anastasia/" +i +".jpg'>"

			}
			document.getElementById('colorbg').style.zIndex = 2;
			display('anastasia',1,47);
			anastasia();
		}
		
		if (size4< minDis){
			gallery.innerHTML = '';
			projTitle.innerHTML = 'UYGHUR AND HAN KIDS IN FOOTBALL SCHOOL'
			artistName.innerHTML = 'By Yuyang Liu'
			projDesc.innerHTML = 'Scholarships are offered to Uyghur youth, the Muslim minority in China, to leave their homes in Xining Province to study with Han youth in Guangzhou at a soccer-focused school.'
			for(var i = 1; i < 23; i++) {
				gallery.innerHTML = gallery.innerHTML + "<img class='gImg' id='yuyang" +i +"' src='img/yuyang/" +i +".jpg'>"
			}
			document.getElementById('colorbg').style.zIndex = 2;
			display('yuyang',1,23);
			yuyang();
		}
		
		if (size5< minDis){
			gallery.innerHTML = '';
			projTitle.innerHTML = 'SOLIDARITY, NOT CHARITY'
			artistName.innerHTML = 'By Manca Juvan'
			projDesc.innerHTML = 'This project is about Slovenian individuals who went beyond themselves and the socio-political climate they are living in, to volunteer and do good in the "migrant crisis" Europe is currently facing.'
			for(var i = 1; i < 8; i++) {
				gallery.innerHTML = gallery.innerHTML + "<img class='gImg' id='manca" +i +"' src='img/manca/" +i +".jpg'>"

			}
			document.getElementById('colorbg').style.zIndex = 2;
			display('manca',1,8);
			manca();
		}
		
		if (size6< minDis){
			gallery.innerHTML = '';
			projTitle.innerHTML = 'KASHMIRIYAT'
			artistName.innerHTML = 'By Poulomi Basu'
			projDesc.innerHTML = 'The Kashmiri Pundit festival of Kheer Bhawani brings Muslims and Hindus (Pundits) together in the spirit of tolerance and brotherhood. The festival has withstood the forced migration of the Pundits and even continued uninterrupted throughout the peak of militancy in 1998.'
			for(var i = 1; i < 57; i++) {
				gallery.innerHTML = gallery.innerHTML + "<img class='gImg' id='poulomi" +i +"' src='img/poulomi/" +i +".jpg'>"

			}
			document.getElementById('colorbg').style.zIndex = 2;
			display('poulomi',1,57);
			poulomi();
		}
		
		if (size7< minDis){
			gallery.innerHTML = '';
			projTitle.innerHTML = 'TALK 2 MUSLIMS'
			artistName.innerHTML = 'By Muyi Xiao'
			projDesc.innerHTML = 'Mona, a Muslim woman living in Cambridge, and her husband Sebastian give free donuts and coffee to pedestrians in front of the Cambridge Public Library in an attempt to create positive dialogue around Islam.'
			curImg.innerHTML = "<video id='innerImg' width='" +curImg.style.width +" height='auto' autoplay><source src='img/muyi.mp4' type='video/mp4'></video>";
			curImg.style.zIndex = 3;
			infoText.style.zIndex = 1;
			TweenLite.to(colorbg,0.5,{opacity:1});
		}
		
		if (size8< minDis){
			gallery.innerHTML = '';
			projTitle.innerHTML = 'THE SKIN OF PALESTINE'
			artistName.innerHTML = 'By Santiago Arcos'
			projDesc.innerHTML = 'In Latin American soccer slang, it is common to say that the uniforms of one’s favorite soccer team is their skin. In this case, Palestine’s skin can be found in Chile. The Palestino Futbol Club is a soccer team that was founded in 1920 by Palestinian migrants in Santiago, Chile. Chile holds the largest Palestinian community outside the Arab world, with about 350,000 Palestinian descendants.'
			curImg.innerHTML = "<video id='innerImg' width='" +curImg.style.width +" height='auto' autoplay><source src='img/santiago.mp4' type='video/mp4'></video>";
			curImg.style.zIndex = 3;
			infoText.style.zIndex = 1;
			TweenLite.to(colorbg,0.5,{opacity:1});
		}
		
		if (size9< minDis){
			gallery.innerHTML = '';
			projTitle.innerHTML = 'CLASSROOMS OF HOPE'
			artistName.innerHTML = 'By Xyza Cruz Bacani'
			projDesc.innerHTML = 'Mindanao is wrought with violence between Al Qaeda influenced Abu Sayaf and government Christian military forces. Amidst the violence, in Patikul, Sulu, Klasrum ng Pag-asa has built a school for Christian and Muslim children to learn together in peace.'
			for(var i = 1; i < 21; i++) {
				gallery.innerHTML = gallery.innerHTML + "<img class='gImg' id='xyza" +i +"' src='img/xyza/" +i +".jpg'>"

			}
			document.getElementById('colorbg').style.zIndex = 2;
			display('xyza',1,21);
			xyza();
		}
	}