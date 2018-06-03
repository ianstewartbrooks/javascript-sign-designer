$(document).ready(function () {
	"use strict";
	// create array of objects to hold info per material
	var mat = new Array();
	mat[0] = {
		name: "Acrylic",
		colours: ["black", "red", "blue"],
		fonts: ["Arial, Helvetica, sans-serif", "'Times New Roman', Times, serif", "'Courier New', Courier, monospace"],
		fontsdisplayname: ["sans-serif", "serif", "monospace"],
		shape: ["08", "09", "12", "20", "22"],
		top: [40, 0, 70, 35, 60],
		mid: [144, 144, 144, 144, 144],
		bot: [40, 0, 70, 40, 60]
	};
	mat[1] = {
		name: "Aluminium",
		colours: ["black", "red", "blue"],
		fonts: ["Arial, Helvetica, sans-serif", "'Times New Roman', Times, serif"],
		fontsdisplayname: ["sans-serif", "serif"],
		shape: ["08", "09", "10", "11", "20", "22"],
		top: [40, 0, 35, 60, 40, 60],
		mid: [144, 144, 144, 144, 144, 144],
		bot: [40, 0, 35, 40, 40, 60]
	};
	mat[2] = {
		name: "Brass",
		colours: ["black", "red", "blue", "green"],
		fonts: ["Arial, Helvetica, sans-serif", "'Times New Roman', Times, serif", "'Comic Sans MS', cursive"],
		fontsdisplayname: ["sans-serif", "serif", "cursive"],
		shape: ["08", "09", "20", "22", "23"],
		top: [40, 0, 40, 60, 60],
		mid: [144, 144, 144, 144, 144],
		bot: [40, 0, 40, 60, 60]
	};
	mat[3] = {
		name: "Frosted",
		colours: ["black", "red", "blue"],
		fonts: ["Arial, Helvetica, sans-serif", "'Times New Roman', Times, serif"],
		fontsdisplayname: ["sans-serif", "serif"],
		shape: ["08", "09", "20", "22", "25"],
		top: [40, 0, 40, 60, 60],
		mid: [144, 144, 144, 144, 144],
		bot: [40, 0, 40, 60, 60]
	};
	mat[4] = {
		name: "Glass",
		colours: ["black", "red", "blue"],
		fonts: ["Arial, Helvetica, sans-serif", "'Times New Roman', Times, serif"],
		fontsdisplayname: ["sans-serif", "serif"],
		shape: ["08", "09", "20", "22"],
		top: [40, 0, 40, 60],
		mid: [144, 144, 144, 144],
		bot: [40, 0, 40, 60]
	};
	mat[5] = {
		name: "Granite",
		colours: ["white"],
		fonts: ["Arial, Helvetica, sans-serif", "'Times New Roman', Times, serif"],
		fontsdisplayname: ["sans-serif", "serif"],
		shape: ["08", "09", "12", "20", "22"],
		top: [40, 0, 70, 40, 60],
		mid: [144, 144, 144, 144, 144],
		bot: [40, 0, 75, 40, 60]
	};
	mat[6] = {
		name: "Oak",
		colours: ["black", "red", "blue"],
		fonts: ["'Times New Roman', Times, serif"],
		fontsdisplayname: ["serif"],
		shape: ["08", "09", "12", "20", "22"],
		top: [40, 0, 80, 40, 55],
		mid: [144, 144, 144, 144, 144],
		bot: [50, 0, 85, 50, 70]
	};
	mat[7] = {
		name: "Slate",
		colours: ["white"],
		fonts: ["Arial, Helvetica, sans-serif", "'Times New Roman', Times, serif"],
		fontsdisplayname: ["sans-serif", "serif"],
		shape: ["08", "09", "12", "20", "22"],
		top: [40, 0, 80, 40, 60],
		mid: [144, 144, 144, 144, 144],
		bot: [40, 0, 85, 40, 60]
	};
	var intChosenMat = 2;

//--------------------------------------------------------------------------

	//Load the shapes depending on which material type is chosen.
	function LoadShapesFontsColours(intMat) {
		var strHTMLLine = "<p>Choose a shape:</p> ";

		//Load all the sahpes that the chosen material type has and display them.
		for (var intIndex = 0; intIndex < mat[intMat].shape.length; intIndex++) {
			var strShapeName = mat[intMat].name + "_" + mat[intMat].shape[intIndex];
			var strTitle = mat[intMat].name + " " + (intIndex +1);
		    var strSrc = "Sign-Images/ShapesAndMats/" + mat[intMat].name + "/" + strShapeName + ".png";
			strHTMLLine += "<img class='imgshapes' src='" + strSrc + "' title='" + strTitle + "'> ";
		}

		//Remove old shape images from the HTML and replace with new ones
		$("#shapes").empty();
		$("#shapes").append(strHTMLLine);

		//Load the list of colours that the chosen material has and display them
		strHTMLLine = "Colours <select id='selectcolour' name='chosencolour' class='dropdowns'>";
		for (var intIndex = 0; intIndex < mat[intMat].colours.length; intIndex++) {
			strHTMLLine += "<option value='" + mat[intMat].colours[intIndex] + "'>" + mat[intMat].colours[intIndex] + "</option>";
		}
		strHTMLLine += "</select>";

		//Remove old colour dropdown box from the html and replace it with the new html
		$("#colourslist").empty();
		$("#colourslist").append(strHTMLLine);

		//Load the list of fonts that the chosen material has and display them
		strHTMLLine = 'Fonts <select id="selectfont" name="chosenfont" class="dropdowns">';
		for (var intIndex = 0; intIndex < mat[intMat].fonts.length; intIndex++) {
			strHTMLLine +='"<option value="' + mat[intMat].fonts[intIndex] + '">' + mat[intMat].fontsdisplayname[intIndex] + '</option>';
		}
		strHTMLLine += '</select>';

		//Remove old fonts dropdown box from the html and replace it with the new html
		$("#fontslist").empty();
		$("#fontslist").append(strHTMLLine);

	// End of LoadShapesFontsColours Function
	};

//----------------------------------------------------------------------------

	// Material type clicked, so update material type displayed and show the list of available shapes
	$(".mattype").click(function () {
		intChosenMat = $("input[name=material]:checked").val();
		var strMatUrl = "Sign-Images/ShapesAndMats/" + mat[intChosenMat].name + "/" + mat[intChosenMat].name + "_" + mat[intChosenMat].shape[0] + ".png";
		$("#ImgMat").attr("src", strMatUrl);

		//Store shape and material name in hidden fields
		$("#hiddenchosenshape").val(mat[intChosenMat].shape[0]);
		$("#hiddenmaterialname").val(mat[intChosenMat].name);

		LoadShapesFontsColours (intChosenMat);
		$("#design p").css("color", mat[intChosenMat].colours[0]);
		$("#design p").css("font-family", mat[intChosenMat].fonts[0]);
		$("#txt1").css("top", mat[intChosenMat].top[0]);
		$("#txt2").css("top", mat[intChosenMat].mid[0]);
		$("#txt3").css("bottom", mat[intChosenMat].bot[0]);
	// End of .mattype click event
	});

//------------------------------------------------------------------------------

	// Colour clicked so update the display section with the chosen colour
	$(document).on('change',"#selectcolour", function(){
    	$("#design p").css("color", this.value);
	});

//------------------------------------------------------------------------------

	// Font clicked so update the display section with the chosen colour
	$(document).on('change',"#selectfont", function(){
    	$("#design p").css("font-family", this.value);
	});

//------------------------------------------------------------------------------

	// Set event handler to check for shape clicked - if so, set the source of main ImgMat display to be the same as the thumbnail clicked
	$("#shapes").on("click", ".imgshapes", function () {
		var strMatUrl = $(this).prop("src");
		$("#ImgMat").attr("src", strMatUrl);
		var intShape = parseInt($(this).prop("title").substr(-2,2)) - 1;

		//Store chosen shape in hidden field
		$("#hiddenchosenshape").val(mat[intChosenMat].shape[intShape]);

		if (mat[intChosenMat].top[intShape] == 0) {
			$("#inputbox1").prop("disabled", true);
			$("#txt1").hide()
		} else {
			$("#inputbox1").prop("disabled", false);
			$("#txt1").show()
		}
		if (mat[intChosenMat].bot[intShape] == 0) {
			$("#inputbox3").prop("disabled", true);
			$("#txt3").hide()
		} else {
			$("#inputbox3").prop("disabled", false);
			$("#txt3").show()
		}

		$("#txt1").css("top", mat[intChosenMat].top[intShape] +"px");
		$("#txt2").css("top", mat[intChosenMat].mid[intShape] +"px");
		$("#txt3").css("bottom", mat[intChosenMat].bot[intShape] +"px");
		$("#txt1").css("left", "74px");
		$("#txt2").css("left", "74px");
		$("#txt3").css("left", "74px");

	// End of user clicked on a shape
	});

//------------------------------------------------------------------------------

	// Update Designer background if the user chooses a different brick type
	$(".bricktype").click(function () {
		var strBG = "Sign-Images/Backgrounds/" + $(this).prop("value");
		$("#design-background-container").css("background-image", "url(" + strBG + ")");
	// End of .bricktype click event
	});

//------------------------------------------------------------------------------

	// Populate the shapes section using the Brass array when the page first loads
	LoadShapesFontsColours (2); //that's Brass
	$('#hiddenchosenshape').val(mat[2].shape[0]);

//------------------------------------------------------------------------------

	// initialise slider1
	$("#slider-1").slider({
		min: 0,
		max: 80,
		value: 30,
		animate: "slow",
		// While sliding, update the value of the fontsize in #text-1
		slide: function (event, ui) {
			$("#text-1").css("font-size", ui.value + "px");
		}
	});

//------------------------------------------------------------------------------

	// initialise slider2
	$("#slider-2").slider({
		min: 0,
		max: 200,
		value: 75,
		animate: "slow",
		// While sliding, update the value of the fontsize in #text-2
		slide: function (event, ui) {
			var uiv = ui.value, topadjust = (-uiv / 3);
			$("#text-2").css("font-size", uiv  + "px");
			$("#txt2").css("transform", "translate(0px, " + topadjust + "px)");
		}
	});

//------------------------------------------------------------------------------

	// initialise slider3
	$("#slider-3").slider({
		min: 0,
		max: 80,
		value: 30,
		animate: "slow",
		// While sliding, update the value of the fontsize in #text-3
		slide: function (event, ui) {
			$("#text-3").css("font-size", ui.value  + "px");
		}
	});

//------------------------------------------------------------------------------

	// track change event for inputbox1
	$("#inputbox1").keyup(function () {
		$("#text-1").text($("#inputbox1").prop("value"));
	});

//------------------------------------------------------------------------------

	// track change event for inputbox2
	$("#inputbox2").keyup(function () {
		$("#text-2").text($("#inputbox2").prop("value"));
	});

//------------------------------------------------------------------------------

	// track change event for inputbox3
	$("#inputbox3").keyup(function () {
		$("#text-3").text($("#inputbox3").prop("value"));
	});

//------------------------------------------------------------------------------

	// Clicks on nudge arrows
	$("#nudge1 .arrU").click(function () {$("#txt1").css("top", (parseInt($("#txt1").css("top")) - 1) + "px")});
	$("#nudge1 .arrD").click(function () {$("#txt1").css("top", (parseInt($("#txt1").css("top")) + 1) + "px")});
	$("#nudge1 .arrL").click(function () {$("#txt1").css("left", (parseInt($("#txt1").css("left")) - 1) + "px")});
	$("#nudge1 .arrR").click(function () {$("#txt1").css("left", (parseInt($("#txt1").css("left")) + 1) + "px")});

	$("#nudge2 .arrU").click(function () {$("#txt2").css("top", (parseInt($("#txt2").css("top")) - 1) + "px")});
	$("#nudge2 .arrD").click(function () {$("#txt2").css("top", (parseInt($("#txt2").css("top")) + 1) + "px")});
	$("#nudge2 .arrL").click(function () {$("#txt2").css("left", (parseInt($("#txt2").css("left")) - 1) + "px")});
	$("#nudge2 .arrR").click(function () {$("#txt2").css("left", (parseInt($("#txt2").css("left")) + 1) + "px")});

	$("#nudge3 .arrU").click(function () {$("#txt3").css("bottom", (parseInt($("#txt3").css("bottom")) + 1) + "px")});
	$("#nudge3 .arrD").click(function () {$("#txt3").css("bottom", (parseInt($("#txt3").css("bottom")) - 1) + "px")});
	$("#nudge3 .arrL").click(function () {$("#txt3").css("left", (parseInt($("#txt3").css("left")) - 1) + "px")});
	$("#nudge3 .arrR").click(function () {$("#txt3").css("left", (parseInt($("#txt3").css("left")) + 1) + "px")});

//------------------------------------------------------------------------------

	// debug
	$("#footer p").click(function () {
		var msg="Debug:\n";
		for (var matidx=0; matidx < mat.length ; matidx++) {
			msg += "\n" + mat[matidx].name;
			msg += " " + mat[matidx].shape.length;
			msg += " " + mat[matidx].top.length;
			msg += " " + mat[matidx].mid.length;
			msg += " " + mat[matidx].bot.length;
		}
		alert (msg);
	});

	// End of Document Ready section
});

//------------------------------------------------------------------------------
//------------------------------------------------------------------------------

// onsubmit Function - needs to be available globally
// Place data into hidden fields ready for submission.
function FillHiddenFields() {

	//Put chosen font sizes into the hidden fields
	$("#hiddentxt1fontsize").val($("#text-1").css("font-size"));
	$("#hiddentxt2fontsize").val($("#text-2").css("font-size"));
	$("#hiddentxt3fontsize").val($("#text-3").css("font-size"));

	$("#hiddentxt1top").val($("#txt1").css("top"));
	$("#hiddentxt1left").val($("#txt1").css("left"));

	$("#hiddentxt2top").val($("#txt2").css("top"));
	$("#hiddentxt2left").val($("#txt2").css("left"));

	$("#hiddentxt3bottom").val($("#txt3").css("bottom"));
	$("#hiddentxt3left").val($("#txt3").css("left"));

	return true;
};
