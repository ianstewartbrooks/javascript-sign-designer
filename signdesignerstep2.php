<!DOCTYPE html>
<?php
	$material = $_POST['material'];
	$materialname = $_POST['materialname'];
	$shape = $_POST['chosenshape'];
	$colour = $_POST['chosencolour'];
	$font = $_POST['chosenfont'];
	$txt1 = $_POST['addressline1'];
	$txt2 = $_POST['addressline2'];
	$txt3 = $_POST['addressline3'];
	$txt1fontsize = $_POST['txt1fontsize'];
	$txt2fontsize = $_POST['txt2fontsize'];
	$txt3fontsize = $_POST['txt3fontsize'];
	$txt1left = $_POST['txt1left'];
	$txt2left = $_POST['txt2left'];
	$txt3left = $_POST['txt3left'];
	$txt1top = $_POST['txt1top'];
	
	//In the line below we need to divide Fontsize by 3, subract it from txt2top and then add 25
	//to get the exact top value for text line 2.  You need to also do this if you are going to store
	//the information in a database for future use.

	$txt2top = (intval($_POST['txt2top']) - intval(($txt2fontsize / 3)) + 25) . "px";
	$txt3bottom = $_POST['txt3bottom'];

	$displayimage = "Sign-Images/ShapesAndMats/" . $materialname . "/" . $materialname . "_" . $shape . ".png";
?>
<html>
<head>
	<link href="signdesigner-styles.css" rel="stylesheet" />
	<title>Sign Site - Step Two</title>
	<meta charset="utf-8" />
</head>
<body>
	<div id="header">
		Sign Designer - Step Two
	</div>
	<div id="controls">
		<div id="form-area" >
			<p>Put the information from the previous page below to show that it has worked ok.</p>
			<ul>
				<li>Material: <?=$materialname ?></li>
				<li>Chosen Shape: <?=$shape ?></li>
				<li>Chosen Colour: <?=$colour ?></li>
				<li>Chosen Font: <?=$font ?></li>
				<li>Address Line 1: <?=$txt1 ?></li>
				<li>Font Size Line 1: <?=$txt1fontsize ?></li>
				<li>Address Line 1 Top: <?=$txt1top ?></li>
				<li>Address Line 1 Left: <?=$txt1left ?></li>
				<li>Address Line 2: <?=$txt2 ?></li>
				<li>Font Size Line 2: <?=$txt2fontsize ?></li>
				<li>Address Line 2 Top: <?=$txt2top ?></li>
				<li>Address Line 2 Left: <?=$txt2left ?></li>
				<li>Address Line 3: <?=$txt3 ?></li>
				<li>Font Size Line 3: <?=$txt3fontsize ?></li>
				<li>Address Line 3 Bottom: <?=$txt3bottom ?></li>
				<li>Address Line 3 Left: <?=$txt3left ?></li>
			</ul>
		</div>
	</div>
	<div id="display-area">
		<div id="design-background-container">
			<div id="design">
				<div id="txt1" style="left:<?=$txt1left ?>; top:<?=$txt1top ?>;"><p id="text-1" style="font-size:<?=$txt1fontsize ?>; color:<?=$colour ?>;"><?=$txt1 ?></p></div>
				<div id="txt2" style="left:<?=$txt2left ?>; top:<?=$txt2top ?>;"><p id="text-2" style="font-size:<?=$txt2fontsize ?>; color:<?=$colour ?>;"><?=$txt2 ?></p></div>
				<div id="txt3" style="left:<?=$txt3left ?>; bottom:<?=$txt3bottom ?>;"><p id="text-3" style="font-size:<?=$txt3fontsize ?>; color:<?=$colour ?>;"><?=$txt3 ?></p></div>
				<img id="ImgMat" src="<?=$displayimage ?>" />
			</div>
		</div>
	</div>
	<div id="footer">
		<p>Footer</p>
	</div>
</body>
</html>
