jQuery.extend( jQuery.fn.dataTableExt.oSort, {
    "numeric-comma-pre": function ( a ) {
        var x = (a == "-") ? 0 : a.replace( /,/, "." );
        return parseFloat( x );
    },
 
    "numeric-comma-asc": function ( a, b ) {
        return ((a < b) ? -1 : ((a > b) ? 1 : 0));
    },
 
    "numeric-comma-desc": function ( a, b ) {
        return ((a < b) ? 1 : ((a > b) ? -1 : 0));
    },

    "formatted-num-asc": function ( x,y ) {
        x = parseInt( x.replace(/[^\d\-\.\/]/g,'') );
        y = parseInt( y.replace(/[^\d\-\.\/]/g,'') );
        return x - y;
    },

    "formatted-num-desc": function ( x,y ) {
        x = parseInt( x.replace(/[^\d\-\.\/]/g,'') );
        y = parseInt( y.replace(/[^\d\-\.\/]/g,'') );
        return y - x;
    }

} );

    
