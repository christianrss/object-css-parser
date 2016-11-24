# object-css-parser
A little recursive parser of JS Object to CSS String in JavaScript

```javascript
/* 
    MIT License
    Copyright (c) 2016 Christian Rafael
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
                typeof properties[ prop ] === "object" && parseClass( prop, properties[ prop ] ) || String().concat( prop, " : ", properties[ prop ] )
                ,
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
```
## Example:
```javascript
// Part of a Pure CSS Loading Icon generated with: http://loading.io/
var object_css = {
    "@-webkit-keyframes uil-default-anim": {
        "0%": {
            "opacity": 1
        },
        "100%": {
            "opacity": 0
        }
    },
    "@keyframes uil-default-anim": {
        "0%": {
          "opacity": 1
        },
        "100%": {
          "opacity": 0
        }
    },
    ".uil-default-css": {
        "position": "relative",
        "background": "none",
        "width": "200px",
        "height": "200px",
        "top": "calc(50% - 200px/2)",
        "margin-left": "auto",
        "margin-right": "auto"
    },
    ".uil-default-css > div:nth-of-type(1)": {
        "-webkit-animation": "uil-default-anim 1s linear infinite",
        "animation": "uil-default-anim 1s linear infinite",
        "-webkit-animation-delay": "-0.48s",
        "animation-delay": "-0.48s"
    }
};
var css_string = parseCSS( object_css );
```
``` css
/* will return: */
@-webkit-keyframes uil-default-anim { 0% { opacity : 1; } 100% { opacity : 0; }  } @keyframes uil-default-anim { 0% { opacity : 1; } 100% { opacity : 0; }  } .uil-default-css { position : relative;background : none;width : 200px;height : 200px;top : calc(50% - 200px/2);margin-left : auto;margin-right : auto; } .uil-default-css > div:nth-of-type(1) { -webkit-animation : uil-default-anim 1s linear infinite;animation : uil-default-anim 1s linear infinite;-webkit-animation-delay : -0.48s;animation-delay : -0.48s; } 

```
