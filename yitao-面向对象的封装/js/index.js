/**
 * Created by Administrator on 2017/7/24.
 */
function init() {
	
	$(".header-top-login").click(function(){
    new Login(function(user){
    		$(".header-top-menu ul li:first-child").html("<a href='#'>"+user.username+"</a>");
    	});
	});
	
	//导航
	new Navigater().createView(PRODUCT_HOST+PRODUCT_TYPE,$(".main-nav-container"),function(event){
		console.log(event);
	});
	
}


init();


