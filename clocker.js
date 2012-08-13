// Clocker.js
// Version - 0.1
//
// by MAD - @madsgraphics - ecrire[at]madsgraphics.com
//
// https://github.com/madsgraphics/clocker.js/
//
// Tri-license - WTFPL | MIT | BSD
//
// Please minify before use.

( function ( window ) {

  "use strict";

  var clocker = function clocker( timestr ) {
    var time,
        decimal,
        times = timestr.split( ':' );

    // Timecount-value
    // = Formats without ':'
    if ( times.length == 1 ) {
      time = times[0];
      // Time already given in milliseconds (250ms)
      if ( time.lastIndexOf('ms') != -1 ) {
        return parseInt(time);
      }
      // Othermetrics
      else {
        // minutes
        if( time.lastIndexOf('min') != -1 ) {
          time = parseFloat(time) * 60;
        }
        // hours
        else if( time.lastIndexOf('h') != -1 ) {
          time = parseFloat(time) * 3600;
        }
        // Time is now in seconds.
        // If time is without metric, then assume in seconds,
        // maybe float (2.05 == 2050ms)
        // So convert in ms…
        return parseFloat(time) * 1000;
      }
    }
    // Full-clock-value || Partial-clock-value
    else {
      // Reverse order to iterate from seconds to hours
      times.reverse();
      // Init time
      time = 0;
      for ( var t in times ) {
        // Value * 60^t (hours / minutes to seconds) * 1000 (s to ms)
        time += times[t]*Math.pow(60, t)*1000;
      }

      return time;
    }
  }

  window.clocker = clocker;

})( this );
