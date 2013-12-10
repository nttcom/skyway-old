/**

 https://github.com/tlianza/ajaxHooks/blob/master/src/ajax/xdr.js

 Copyright (c) 2011 Julian Aubourg

 Permission is hereby granted, free of charge, to any person obtaining
 a copy of this software and associated documentation files (the
 "Software"), to deal in the Software without restriction, including
 without limitation the rights to use, copy, modify, merge, publish,
 distribute, sublicense, and/or sell copies of the Software, and to
 permit persons to whom the Software is furnished to do so, subject to
 the following conditions:

 The above copyright notice and this permission notice shall be
 included in all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 */

if ( window.XDomainRequest ) {
    jQuery.ajaxTransport(function( s ) {
        if ( s.crossDomain && s.async ) {
            if ( s.timeout ) {
                s.xdrTimeout = s.timeout;
                delete s.timeout;
            }
            var xdr;
            return {
                send: function( _, complete ) {
                    function callback( status, statusText, responses, responseHeaders ) {
                        xdr.onload = xdr.onerror = xdr.ontimeout = jQuery.noop;
                        xdr = undefined;
                        complete( status, statusText, responses, responseHeaders );
                    }
                    xdr = new XDomainRequest();
                    xdr.onload = function() {
                        callback( 200, "OK", { text: xdr.responseText }, "Content-Type: " + xdr.contentType );
                    };
                    xdr.onerror = function() {
                        callback( 404, "Not Found" );
                    };
                    xdr.onprogress = jQuery.noop;
                    xdr.ontimeout = function() {
                        callback( 0, "timeout" );
                    };
                    xdr.timeout = s.xdrTimeout || Number.MAX_VALUE;
                    xdr.open( s.type, s.url );
                    xdr.send( ( s.hasContent && s.data ) || null );
                },
                abort: function() {
                    if ( xdr ) {
                        xdr.onerror = jQuery.noop;
                        xdr.abort();
                    }
                }
            };
        }
    });
}