$.fn.extend( {
    zIndex : function( zIndex ) {
        var elem,
            position,
            value;

        if ( zIndex !== undefined ) {
            return this.css( 'zIndex', zIndex );
        }

        if ( this.length ) {
            elem = $( this[ 0 ] );
            while ( elem.length && elem[ 0 ] !== document ) {

            // Ignore z-index if position is set to a value where z-index is ignored by the browser
            // This makes behavior of this function consistent across browsers
            // WebKit always returns auto if the element is positioned
                position = elem.css('position');
                if ( position === 'absolute' || position === 'relative' || position === 'fixed' ) {

                // IE returns 0 when zIndex is not specified
                // other browsers return a string
                // we ignore the case of nested elements with an explicit value of 0
                // <div style="z-index: -10;"><div style="z-index: 0;"></div></div>
                    value = parseInt( elem.css('zIndex'), 10 );
                    if ( !isNaN( value ) && value !== 0 ) {
                        return value;
                    }
                }
                elem = elem.parent();
            }
        }

        return 0;
    }, 
} );
