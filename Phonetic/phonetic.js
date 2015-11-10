/**
 * Tip of the hat to http://jota.uniq.com.au/radio/code.js
 * Author: Anup V
 */
 
var dot  = '<IMG SRC="icons/dot.gif" ALT=".">';
var dash = '<IMG SRC="icons/dash.gif" ALT="-">';
var space = '<IMG SRC="blank.gif" ALT=" ">';

var morse = new Array();
morse['A'] = dot + dash;
morse['B'] = dash + dot + dot + dot;
morse['C'] = dash + dot + dash + dot;
morse['D'] = dash + dot + dot;
morse['E'] = dot;
morse['F'] = dot + dot + dash + dot;
morse['G'] = dash + dash + dot;
morse['H'] = dot + dot + dot + dot;
morse['I'] = dot + dot;
morse['J'] = dot + dash + dash + dash;
morse['K'] = dash + dot + dash;
morse['L'] = dot + dash + dot + dot;
morse['M'] = dash + dash;
morse['N'] = dash + dot;
morse['O'] = dash + dash + dash;
morse['P'] = dot + dash + dash + dot;
morse['Q'] = dash + dash + dot + dash;
morse['R'] = dot + dash + dot;
morse['S'] = dot + dot + dot;
morse['T'] = dash;
morse['U'] = dot + dot + dash;
morse['V'] = dot + dot + dot + dash;
morse['W'] = dot + dash + dash;
morse['X'] = dash + dot + dot + dash;
morse['Y'] = dash + dot + dash + dash;
morse['Z'] = dash + dash + dot + dot;
morse['1'] = dot + dash + dash + dash + dash;
morse['2'] = dot + dot + dash + dash + dash;
morse['3'] = dot + dot + dot + dash + dash;
morse['4'] = dot + dot + dot + dot + dash;
morse['5'] = dot + dot + dot + dot + dot;
morse['6'] = dash + dot + dot + dot + dot;
morse['7'] = dash + dash + dot + dot + dot;
morse['8'] = dash + dash + dash + dot + dot;
morse['9'] = dash + dash + dash + dash + dot;
morse['0'] = dash + dash + dash + dash + dash;
morse[' '] = '<BR>';
morse['.'] = dot + dash + dot + dash + dot + dash;
morse[','] = dash + dash + dot + dot + dash + dash;
morse[':'] = dash + dash + dash + dot + dot + dot;
morse['?'] = dot + dot + dash + dash + dot + dot;
morse['\''] = dot + dash + dash + dash + dash + dot;
morse['-'] = dash + dot + dot + dot + dot + dash;
morse['/'] = dash + dot + dot + dash + dot;
morse['('] = dash + dot + dash + dash + dot;
morse[')'] = dash + dot + dash + dash + dot + dash;
morse['"'] = dot + dash + dot + dot + dash + dot;
morse['='] = dash + dot + dot + dot + dash;
morse['@'] = dash + dash + dash + dot + dash + dash + dot;
morse['*'] = dash + dot + dot + dash;

var phonetic = new Array();
phonetic['A'] = 'Alpha';
phonetic['B'] = 'Bravo';
phonetic['C'] = 'Charlie';
phonetic['D'] = 'Delta';
phonetic['E'] = 'Echo';
phonetic['F'] = 'Foxtrot';
phonetic['G'] = 'Golf';
phonetic['H'] = 'Hotel';
phonetic['I'] = 'India';
phonetic['J'] = 'Juliet';
phonetic['K'] = 'Kilo';
phonetic['L'] = 'Lima';
phonetic['M'] = 'Mike';
phonetic['N'] = 'November';
phonetic['O'] = 'Oscar';
phonetic['P'] = 'Papa';
phonetic['Q'] = 'Quebec';
phonetic['R'] = 'Romeo';
phonetic['S'] = 'Sierra';
phonetic['T'] = 'Tango';
phonetic['U'] = 'Uniform';
phonetic['V'] = 'Victor';
phonetic['W'] = 'Whiskey';
phonetic['X'] = 'X-ray';
phonetic['Y'] = 'Yankee';
phonetic['Z'] = 'Zulu';
phonetic['1'] = 'one';
phonetic['2'] = 'two';
phonetic['3'] = 'three';
phonetic['4'] = 'four';
phonetic['5'] = 'five';
phonetic['6'] = 'six';
phonetic['7'] = 'seven';
phonetic['8'] = 'eight';
phonetic['9'] = 'niner';
phonetic['0'] = 'zero';
phonetic['.'] = 'stop';
phonetic[','] = 'comma',
phonetic['!'] = 'exclaim';
phonetic['-'] = 'dash';
phonetic['_'] = 'underscore';
phonetic['='] = 'equals';
phonetic['+'] = 'plus';
phonetic['?'] = 'question';
phonetic[' '] = '<BR>';

/**
* Replaces characters with its corresponding phonetic alphabet or morse code and displays in the result div 
*/
function showResults(type, word) {
	var head = ''; 
	var code = '';
	
	if (word == '') {
    	
    	//default to name
    	word = 'ANUP VACHALI';
  }
    
	/* convert each char to morse or phonetic depending on type*/
	/* only display the requested code */
  if (type == 'morse') {
		/* convert each char to morse and phonetic */
		for (var i = 0; i < word.length; i++) {
		    var c = word.charAt(i);
		    if (morse[c]) {
					code = code + ' ' + c + ' ' + morse[c];
					head = head + c;
		    }
		}
		document.getElementById('result').innerHTML = '<h3>' + head + '</h3>' + code;
  
  } else if (type == 'phonetic') {
	
		for (var i = 0; i < word.length; i++) {
		    var c = word.charAt(i);
		    if (phonetic[c]) {
					code = code + ' ' + phonetic[c];
					head = head + c;
		    }
		}
		document.getElementById("result").innerHTML = '<h3>' + head + '</h3>' + code;
  }

}

/*
 * Ran into issues using the DOMContentLoaded listener; but windows.onload seems to work fine - chrome version?
 */
window.onload = execute;

/*
* Check which button was pressed and call the showResults function
*/
function execute() {
    document.getElementById("btnPhonetic").onclick = function() {
    	var word = document.getElementById("txtInput").value.toUpperCase();
    	showResults("phonetic", word);
    }
    
    document.getElementById("btnMorse").onclick = function() {
    	var word = document.getElementById("txtInput").value.toUpperCase();
    	showResults("morse",word);
    }
}

/*document.addEventListener('DOMContentLoaded', function () {
    var button = document.getElementById('btnPhonetic');
    //alert("button.."+button);
    button.addEventListener('click', myFunction2('phonetic'));
});

*/