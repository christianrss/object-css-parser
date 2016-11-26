/* 
    MIT License
    Copyright (c) 2016 Christian Rafael
    JS Object to CSS String Parser
    christian@paradix.com.br
*/
function parseCSS( object_css ) {
    function parseClass( _class, properties ) {
        return String().concat( _class, " { ", parseProperties( properties ), " } " );
    }
    function parseProperties( properties ) {
        var css_properties = String();
        for (var prop in properties) {
            css_properties = css_properties.concat(
                typeof properties[ prop ] === "object" && parseClass( prop, properties[ prop ] ) || String().concat( prop, " : ", properties[ prop ] ),
                typeof properties[ prop ] !== "object" && ";" || ""
            );
        }
        return css_properties;
    }
    var css_str = String();
    for ( var _class in object_css ) {
        css_str = css_str.concat( parseClass( _class, object_css[ _class ] ) );
    }
    return css_str;
}
