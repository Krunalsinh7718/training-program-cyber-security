//All elements that have a data-feather attribute will be replaced with SVG markup
feather.replace();

$(document).ready(function () {

    //responsive navmenu revil button
    $(document).on('click', '#navMenuRevilBtn', function () {
        navMenuToggle();
    })

    //responsive navmenu close button
    $(document).on('click', '#navMenuCloseBtn', function() {
        navMenuToggle();
    })

    //common date picker
    $('.custDatePicker').length > 0 && $('.custDatePicker').datetimepicker({
        format: 'MM/DD/YYYY'
    });
    
    $('.custTimePicker').length > 0 && $('.custTimePicker').datetimepicker({
        format: 'hh:mm A'
    })

    //headroom
    $("#mainHeader").headroom({
        offset : 100,
    });

    //help menu toggle
    $(document).on('click',"#helpMenuOpenMenuBtn", function() {
        $("#topHeader").toggleClass("top-header-visible")
    })

    $(document).on('click',"#helpMenuCloseMenuBtn", function() {
        $("#topHeader").removeClass("top-header-visible")
    })

    $(document).on('click', "#pageNavMenuOpenBtn", function(){
        $("#pageNavMenu").addClass("bottom-menu-visible")
    })

    $(document).on('click', "#bottomMenuCloseBtn", function(){
        $("#pageNavMenu").removeClass("bottom-menu-visible")
    })
    
})


//function for nav menu revil toggle
const navMenuToggle = () => {
    $("#pageNavLinkMenu").toggleClass("menu-active");
    $(document).toggleClass("nav-menu-overflow-hidden");
}
