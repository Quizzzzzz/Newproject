"use strict";
var $ = function (id) {
    return document.getElementById(id);
}

var calculatePercentage = function(itemPrice, discountPercentage) {
    
    var discount = itemPrice * (discountPercentage / 100);
	var net = itemPrice - discount;
    return net;
}


var processEntries = function() {
    var itemPrice = parseFloat( $("itemPrice").value );
    var discountPercentage = parseFloat( $("discountPercentage").value );
	
	if(itemPrice == "" || discountPercentage == ""){
		alert("Both item Price and discount price are required fields.");
		return false;
	}
	if(itemPrice < 0 || itemPrice > 1000){
		alert("Item price should be greater than 0 and less 1000;");
		return false;
	}
    if (isNaN(itemPrice)) {
        alert("Item Price should be numeric.");
		return false;
    }
	
	if(discountPercentage < 0 || discountPercentage >= 70){
		alert("Discount percentage should be greater than 0 and less 70;");
		return false;
	}
	if (isNaN(discountPercentage)) {
        alert("Discount price should be numeric.");
		return false;
    }
   
	var netPrice = 	calculatePercentage(itemPrice, discountPercentage);
	$("netPrice").value = Math.round(netPrice * 100) / 100;

	var discountTotal = itemPrice - netPrice;
	$("discountDollar").value = Math.round(discountTotal * 100) / 100;   
}


window.onload = function () {
    $("calculate").onclick = processEntries;
    $("itemPrice").focus();
}

