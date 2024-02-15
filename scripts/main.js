
const characters = document.getElementById("char");
const words = document.getElementById("word");
const no_space_chars = document.getElementById("no_char");
const sentences = document.getElementById("sentence");
const paragraphs = document.getElementById("paragraph");
const spaces = document.getElementById("space");
const vowels = document.getElementById("vowel");
const awls = document.getElementById("awl");
const read_time = document.getElementById("read");
const write_time = document.getElementById("write");
const speak_time = document.getElementById("speak");

const chars_panel = document.getElementById("chars-panel");
const words_panel = document.getElementById("words-panel");
const no_space_panel = document.getElementById("no_spaces_panel");
const sentence_panel = document.getElementById("sentences_panel");
const paragraph_panel = document.getElementById("paragraphs_panel");
const white_space_panel = document.getElementById("white_spaces_panel");
const vowel_panel = document.getElementById("vowels_panel");
const average_panel = document.getElementById("average_panel");
const read_panel = document.getElementById("read_panel");
const write_panel = document.getElementById("write_panel");
const speak_panel = document.getElementById("speak_panel");

const highlight_container = document.getElementById("highlight-container");
const highlights = document.getElementById("highlight");

const p_data = document.getElementById("data");
const textarea = document.getElementById("input");

textarea.addEventListener("input", event => {
    const target = event.currentTarget;
    //const maxLength = target.getAttribute("maxlength");
    const charLength = target.value.length;
	
	if(charLength > 0 && window.getComputedStyle(p_data, null).marginRight != "0%"){
		p_data.style.marginRight = "0%";
		p_data.style.animation = "slide-left 0.15s cubic-bezier(0, 0, 0.03, 0.99)";
	}
	
	if(charLength == 0 && window.getComputedStyle(p_data, null).display == "block"){
		p_data.style.animation = "slide-right 0.15s cubic-bezier(0, 0, 0.03, 0.99)";
		p_data.style.marginRight = "-30%";	
	}
	
	characters.innerHTML = charLength;
	words.innerHTML = getWordsCount(target.value);
	no_space_chars.innerHTML = getNoSpaceCharsCount(target.value);
	sentences.innerHTML = getSentencesCount(target.value);
	paragraphs.innerHTML = getParagraphsCount(target.value);
	spaces.innerHTML = getWhiteSpacesCount(target.value);
	vowels.innerHTML = getVowelsCount(target.value);
	awls.innerHTML = getAverageWordLength(target.value);
	
	read_time.innerHTML = calculateTime(target.value,250);
	write_time.innerHTML = calculateTime(target.value,50);
	speak_time.innerHTML = calculateTime(target.value,150);
	//var text = $textarea.val();
	
	
});

chars_panel.addEventListener("mouseover", function (event) {
	highlight_container.style.display = "block";
    var highlightedText = highlightsAllChars(textarea.value);
	highlights.innerHTML = highlightedText;
	highlight_container.scrollTop = textarea.scrollTop;
}, false);

chars_panel.addEventListener("mouseleave", function (event) {
	highlight_container.style.display = "none";
}, false);

words_panel.addEventListener("mouseover", function (event) {
	highlight_container.style.display = "block";
    var highlightedText = highlightsAllWords(textarea.value);
	highlights.innerHTML = highlightedText;
	highlight_container.scrollTop = textarea.scrollTop;
}, false);

words_panel.addEventListener("mouseleave", function (event) {
	highlight_container.style.display = "none";
}, false);

no_space_panel.addEventListener("mouseover", function (event) {
	highlight_container.style.display = "block";
    var highlightedText = highlightsAllNoSpaceChars(textarea.value);
	highlights.innerHTML = highlightedText;
	highlight_container.scrollTop = textarea.scrollTop;
}, false);

no_space_panel.addEventListener("mouseleave", function (event) {
	highlight_container.style.display = "none";
}, false);

sentence_panel.addEventListener("mouseover", function (event) {
	highlight_container.style.display = "block";
    var highlightedText = highlightsAllSentences(textarea.value);
	highlights.innerHTML = highlightedText;
	highlight_container.scrollTop = textarea.scrollTop;
}, false);

sentence_panel.addEventListener("mouseleave", function (event) {
	highlight_container.style.display = "none";
}, false);

paragraph_panel.addEventListener("mouseover", function (event) {
	highlight_container.style.display = "block";
    var highlightedText = highlightsAllParagraphs(textarea.value);
	highlights.innerHTML = highlightedText;
	highlight_container.scrollTop = textarea.scrollTop;
}, false);

paragraph_panel.addEventListener("mouseleave", function (event) {
	highlight_container.style.display = "none";
}, false);

white_space_panel.addEventListener("mouseover", function (event) {
	highlight_container.style.display = "block";
    var highlightedText = highlightsAllWhiteSpaces(textarea.value);
	highlights.innerHTML = highlightedText;
	highlight_container.scrollTop = textarea.scrollTop;
}, false);

white_space_panel.addEventListener("mouseleave", function (event) {
	highlight_container.style.display = "none";
}, false);

vowel_panel.addEventListener("mouseover", function (event) {
	highlight_container.style.display = "block";
    var highlightedText = highlightsAllVowels(textarea.value);
	highlights.innerHTML = highlightedText;
	highlight_container.scrollTop = textarea.scrollTop;
}, false);

vowel_panel.addEventListener("mouseleave", function (event) {
	highlight_container.style.display = "none";
}, false);

function getWordsCount(s){
	return s.trim().split(/\s+/).length;
}

function getNoSpaceCharsCount(s){
	return s.replace(/\s/g, '').length;
}

function getSentencesCount(s){
	var str = s.match(/[\w|\)][.?!](\s|$)/g);
	if(str != null){
		return str.length;
	}
	return 1;
}

function getParagraphsCount(s){
	return s.replace(/\n$/gm, '').split(/\n/).length;
}

function getWhiteSpacesCount(s){
	return s.split(" ").length;
}

function getVowelsCount(s){
	var str = s.match(/[aeiou]/gi);
	if(str != null){
		return str.length;
	}
	return 0;
}

function getAverageWordLength(s){
	if (!s.includes(' ')) return s.length;
	return ( (s.length - getWordsCount(s) + 1) / getWordsCount(s) ).toFixed(2);
}

const date = new Date(null);
function calculateTime(s,word_per_min){
	date.setSeconds( Math.ceil( (getWordsCount(s)*60) / word_per_min) );
	return date.toISOString().slice(14, 19);
}


function hideSettingsDialog(){
	document.getElementById("settings_panel").style.display = "none";
}

function showSettingsDialog(){
	document.getElementById("settings_panel").style.display = "flex";
}

function hideAboutDialog(){
	document.getElementById("about_dialog").style.display = "none";
}

function showAboutDialog(){
	document.getElementById("about_dialog").style.display = "flex";
}

const switch_1 = document.getElementById("switch_1");
const switch_2 = document.getElementById("switch_2");
const switch_3 = document.getElementById("switch_3");
const switch_4 = document.getElementById("switch_4");
const switch_5 = document.getElementById("switch_5");
const switch_6 = document.getElementById("switch_6");
const switch_7 = document.getElementById("switch_7");
const switch_8 = document.getElementById("switch_8");
const switch_9 = document.getElementById("switch_9");
const switch_10 = document.getElementById("switch_10");
const switch_11 = document.getElementById("switch_11");

function show_hide_counter(counter_id){
	switch(counter_id){
		case 0 :
			chars_panel.style.display = (!switch_1.checked) ? 'none' : 'flex' ;
			break;
		case 1 :
			words_panel.style.display = (!switch_2.checked) ? 'none' : 'flex' ;
			break;
		case 2 :
			no_space_panel.style.display = (!switch_3.checked) ? 'none' : 'flex' ;
			break;
		case 3 :
			sentence_panel.style.display = (!switch_4.checked) ? 'none' : 'flex' ;
			break;
		case 4 :
			paragraph_panel.style.display = (!switch_5.checked) ? 'none' : 'flex' ;
			break;
		case 5 :
			white_space_panel.style.display = (!switch_6.checked) ? 'none' : 'flex' ;
			break;
		case 6 :
			vowel_panel.style.display = (!switch_7.checked) ? 'none' : 'flex' ;
			break;
		case 7 :
			average_panel.style.display = (!switch_8.checked) ? 'none' : 'flex' ;
			break;
		case 8 :
			read_panel.style.display = (!switch_9.checked) ? 'none' : 'flex' ;
			break;
		case 9 :
			write_panel.style.display = (!switch_10.checked) ? 'none' : 'flex' ;
			break;
		case 10 :
			speak_panel.style.display = (!switch_11.checked) ? 'none' : 'flex' ;
			break;
	}
}

function changeTheme(id){
	selectCard(id);
	var root = document.querySelector(':root');
	root.style.setProperty('--main-color', getCardColor(id));
	root.style.setProperty('--secondary-color', getShadowColor(id));
}

const c_1 = document.getElementById("card_1");
const c_2 = document.getElementById("card_2");
const c_3 = document.getElementById("card_3");
const c_4 = document.getElementById("card_4");
const c_5 = document.getElementById("card_5");
const c_6 = document.getElementById("card_6");
const c_7 = document.getElementById("card_7");
const c_8 = document.getElementById("card_8");
const c_9 = document.getElementById("card_9");
const c_10 = document.getElementById("card_10");

const color_cards = [c_1,c_2,c_3,c_4,c_5,c_6,c_7,c_8,c_9,c_10];

function selectCard(id){
	
	for(let i = 0; i < color_cards.length; i++){
		if(id == i+1){
			color_cards[i].children[0].style.display = "block";
		}else{
			color_cards[i].children[0].style.display = "none";
		}
	}
	
}

function getCardColor(id){
	return color_cards[id-1].style.background;
}

const secondery_colors = ["#ff4747","#ad1448","#5a1166","#3f51b5","#342018","#2c414a","#009688","#074e48","#1b255a","#e91e63"];
function getShadowColor(id){
	return secondery_colors[id-1];
}

function applyHighlights(text) {
  return text.replace(/\n$/g, '\n\n').replace(/[A-Z].*?\b/g, '<mark>$&</mark>');
}

function highlightsAllChars(text) {
  return "<mark>" + text +"</mark>";
}

function highlightsAllWords(text) {
  return text.replace(/\n$/g, '\n\n').replace(/\S+/g, '<mark>$&</mark>');
}

function highlightsAllNoSpaceChars(text) {
  return text.replace(/\n$/g, '\n\n').replace(/\S+/g, '<mark>$&</mark>');
}

function highlightsAllSentences(text) {
  return text.replace(/\n$/g, '\n\n').replace(/[\w|\)][.?!](\s|$)/g, '<mark>$&</mark>');
}

function highlightsAllParagraphs(text) {
	return text.replace(/\n$/g, '\n\n').replace(/.+/g, '<mark>$&</mark>');
}

function highlightsAllWhiteSpaces(text) {
  return text.replace(/\n$/g, '\n\n').replace(/\s+/g, '<mark>$&</mark>');
}

function highlightsAllVowels(text) {
  return text.replace(/\n$/g, '\n\n').replace(/[aeiou]/gi, '<mark>$&</mark>');
}