jQuery(document).ready(function($){
	
	// browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 300,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 1200,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 700,
		//grab the "back to top" link
		$back_to_top = $('.cd-top');

	//hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) {
			$back_to_top.addClass('cd-fade-out');
		}
	});

	const elementTarget = document.getElementById("cv");

	// skip first callback when first observing
	let firstCallback = true;
	const observer = new IntersectionObserver(entries => {
	  if (!entries[0].isIntersecting) {
		 if (firstCallback) {
		   firstCallback = false;
		 } else {
		   alert("You've scrolled past the second div");
		 }
	  }
	});
	observer.observe(elementTarget);
	// remember to unobserve when done

	const element = document.getElementById('cv');
let lastScrollTop = 0;
element.onscroll = (e)=>{
if (element.scrollTop < lastScrollTop){
      // upscroll 
      return;
   } 
   lastScrollTop = element.scrollTop <= 0 ? 0 : element.scrollTop;
    if (element.scrollTop + element.offsetHeight>= element.scrollHeight ){
       console.log("End");
    }
}

$(document).ready(function () {
    if($('#cv').children().hasClass('classNameInView')){
        $('.cd-top').addClass('animated bounceInLeft');
    }
});


});