$(document).ready (function(){
    
  $('#userSignInput').on('keyup',function(e) {
    
      $('#tiles').text($(this).val().length);
      
      updatePrice($(this).val().length);
    
    })
    
  $('#userFontInput').on('click',function(e) {
    
      var inputFont = $(this).is(':checked');
        updatePrice($('#userSignInput').val().length, inputFont)
    })
  
  $('#confirmOrder').on('click',function(e) {
    event.preventDefault();
    
    var previewMsg = $('#userSignInput').val();
    $('#preview').append(previewMsg);
    
    $('#preview').toggle().animate({ 'right': '0px' }, 250);
      
    })  
  
  $('#cancelPreview').on('click',function(e) {
    event.preventDefault();
       
    $('#preview').toggle();
      
    })  
 })

function updatePrice(signLength, fontUpgrade){
  var costPerTile = 5;
  
  
  if(fontUpgrade){costPerTile = 6;}
  else {costPerTile = 5}
  
  var subTotal = signLength * costPerTile;
  var shipping = 7;
  
  if(signLength != 0){shipping = 7;}
  else {shipping = 0}
  
  var grandTotal = subTotal + shipping;
  
  $('#subTotal').text('$'+subTotal);
  $('#shipping').text('$'+shipping);
  $('#grandTotal').text('$'+grandTotal);
  
  return grandTotal;
  
}

// // Note: textContent does not work in IE8 or earlier - see explanation on website