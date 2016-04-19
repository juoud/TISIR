$(document).bind("mobileinit", function () {
    console.log('TISIR en cours de configuration ...');
    $.mobile.someSetting = "some value here";
    $.mobile.defaultPageTransition = "none";
    console.log('TISIR configuré!!!');
}) || $(document).bind("mobileinit", function () {
    console.log('TISIR en cours de configuration (2) ...');
    $.extend($.mobile, {
        someSetting: "some value here",
        defaultPageTransition:"none"
    });
    console.log('TISIR configuré!!!');
});
