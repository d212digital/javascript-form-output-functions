# javascript-form-output-functions
Javascript Output Functions - to pass to form elements
<p>Hello, David Adamson here, so I've created these simple functions in Javascript that pass the function result into a form text field using document.inputForm.output.value = varName;.
    Please feel free to use them in your code/website.</p>
       <p>Hopefully you'll see more of this in the future. Hope you find it useful. Any comments/updates etc appreciated. </p>
    <p>NB: You can use Label and remove the form tag by using label ID's and then to output <span class="codeline">document.getElementsByName('output')[0].value= out;</span> however the point of these
        scipts is to allow you to pass the result to the form output element if required. To drop form tag and use Name/Label id's. Code is something like 
        <p><span class="codetext">
                function calculateArea() {<br>
                    var base = document.getElementsByName('width')[0].value;<br>
                    var height = document.getElementsByName('height')[0].value;<br>
                    var out = (1/2) * parseFloat(base) * parseFloat(height);<br>
                    <br>
                    document.getElementsByName('output')[0].value= out;
                   <br> 
                    }
        </span></p>
