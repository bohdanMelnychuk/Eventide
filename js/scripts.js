$(function(){
    $('.collapse').on('show.bs.collapse',function(){
        $(this).prev().find('.fa').removeClass().addClass('fa fa-minus-circle');
    });
    
    $('.collapse').on('hide.bs.collapse',function(){
        $(this).prev().find('.fa').removeClass().addClass('fa fa-plus-circle');
    });
    
    $('.carousel').carousel({
      interval: false
    });
    
    $('#myForm').validator({
        feedback: {
            success: 'fa-check-circle',
            error: 'fa-times-circle'
        }
    });
	
    $('.select-item').select2({
        minimumResultsForSearch: Infinity
    });
});