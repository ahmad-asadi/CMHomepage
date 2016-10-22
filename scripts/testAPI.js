/**
 * Created by root on 10/22/16.
 */

$(document).ready(function () {
    $('#resNeg').fadeOut(0) ;
    $('#resPos').fadeOut(0) ;

})

function testAPI() {
    $('#resNeg').fadeOut(0) ;
    $('#resPos').fadeOut(0) ;
    $.ajax({
        url: 'http://api.commentminer.ir/inference',
        type: 'POST',
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({
            text: $('#testText').val()
        }),
        dataType: 'json',
        success: showAPITestResult,

    });
    $('#testAPI').click();
}


function showAPITestResult(data)
{
    if(data.profanity == true)
        $('#resNeg').fadeIn(1000) ;
    else
        $('#resPos').fadeIn(1000) ;
}
