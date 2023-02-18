//database
const emojis = [ 
    { icon: '&#128150;', code: '128150', },
    { icon: '&#128151;', code: '128151', },
    { icon: '&#128153;', code: '128153', },
    { icon: '&#128160;', code: '128160', },
    { icon: '&#128159;', code: '128159', },
    { icon: '&#127843;', code: '127843', },
    { icon: '&#127849;', code: '127849', },
    { icon: '&#127535;', code: '127535', },
    { icon: '&#127853;', code: '127853', },
    { icon: '&#127857;', code: '127857', },
    { icon: '&#127791;', code: '127791', },
    { icon: '&#127789;', code: '127789', },
    { icon: '&#127790;', code: '127790', },
    { icon: '&#128160;', code: '128160', },
    { icon: '&#127792;', code: '127792', },
    { icon: '&#127798;', code: '127798', },
    { icon: '&#127802;', code: '127802', },
    { icon: '&#127803;', code: '127803', },
    { icon: '&#127804;', code: '127804', },
    { icon: '&#127805;', code: '127805', },
    { icon: '&#127809;', code: '127809', },
    { icon: '&#127813;', code: '127813', },
    { icon: '&#127812;', code: '127812', },
    { icon: '&#127815;', code: '127815', },
    { icon: '&#127817;', code: '127817', },
    { icon: '&#127818;', code: '127818', },
    { icon: '&#127819;', code: '127819', },
    { icon: '&#127821;', code: '127821', },
    { icon: '&#127826;', code: '127826', },
    { icon: '&#127827;', code: '127827', },
	  { icon: '&#127828;', code: '127828', },
    { icon: '&#127829;', code: '127829', },
    { icon: '&#127830;', code: '127830', },
    { icon: '&#127832;', code: '127832', },
    { icon: '&#127835;', code: '127835', },
    { icon: '&#127837;', code: '127837', },
    { icon: '&#127839;', code: '127839', },
    { icon: '&#127841;', code: '127841', },
    { icon: '&#127844;', code: '127844', },
    { icon: '&#127859;', code: '127859', },
    { icon: '&#127863;', code: '127863', },
    { icon: '&#127865;', code: '127865', },
    { icon: '&#127866;', code: '127866', },
    { icon: '&#127868;', code: '127868', },
    { icon: '&#127873;', code: '127873', },
    { icon: '&#127875;', code: '127875', },
    { icon: '&#127880;', code: '127880', },
    { icon: '&#127886;', code: '127886', },
    { icon: '&#127890;', code: '127890', },
    { icon: '&#127891;', code: '127891', },
    { icon: '&#127904;', code: '127904', },	
	{ icon: '&#128310;', code: '128310', },
]

//to display emojis from the database

const emojiList = document.getElementById('emoji')
const htmlTemplate = []

for(const emoji of emojis) {
	htmlTemplate.push(
		`<div class="item">
			<p>${emoji.icon}</p>
		 	<p>${emoji.code}</p>
        </div>`)
}

emojiList.innerHTML = htmlTemplate.join('')

//adding a diamond on the title

const shape = document.querySelector('h1');
const diamond = document.createElement('a');
  
  diamond.innerHTML = `&#128310;`;

shape.appendChild(diamond)