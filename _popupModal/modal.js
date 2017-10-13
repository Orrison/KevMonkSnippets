$.ajax({
    type : 'GET',
    data: 'json',
    url : '/_inc/modal.php',
    success: function(response) {
        var isEnabled = response.description.toLowerCase() === 'on';
        var modalContent = response.text;
        if (localStorage.getItem("modalViewed") != "yes") {	
            if (isEnabled) {
                $.colorbox({
                    html:"<div id='popupModal' style='padding:25px;'>" + modalContent + "</div>",
                    width:"60%",height:"auto",
                    onClosed:function(){
                        localStorage.setItem("modalViewed", "yes");
                    }});
				  						
            }
        }	
    }
});