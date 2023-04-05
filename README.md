# remove-passeidireto-blur
remove blur in passeidireto.com documents
<br>
<br>


<img style="width:450px" src="https://github.com/rafaelsorgato/remove-passeidireto-blur/blob/main/images/com.png"><img style="width:450px" src="https://github.com/rafaelsorgato/remove-passeidireto-blur/blob/main/images/sem.png">

<br>
<br>

you can just download the project and jump to the last step / https://github.com/rafaelsorgato/remove-passeidireto-blur/tree/main/removeblur
<br>

<h3> 1) Create a folder and 2 files inside it: "manifest.json" and "code.js"</h3>
<img src="https://github.com/rafaelsorgato/remove-passeidireto-blur/blob/main/images/folder.png">
<br>
<br>
manifest.json

```
{
    "manifest_version": 3,
    "name": "remover blur passeidireto",
    "description": "remove passeidireto.com blur in the documents",
    "version": "1.0",
    "content_scripts":[
        {
            "matches": ["https://www.passeidireto.com/*"],
            "js": ["codigo.js"]
        }
    ]
  }
```

code.js

```
const regex = /.*RegisterBanner.*/; // regular expression that matches any string containing "RegisterBanner", we will use this to get the banner class that appears at the front of the document

const element = document.querySelectorAll("*");  //select all elements on the page. These elements are stored in an array.

element.forEach((element) => { //used to iterate over each element of this array
  const classes = elemento.classList; //gets its classes using the classList method.
  if (classes) {
    classes.forEach((classe) => { //iterates over each class using another forEach
      if (regex.test(classe)) { //if the current class matches the regular expression defined in the first line, then delete
        element.remove();
      }
    });
  }
});

const element2 = document.getElementById("text-inner-content"); //selects the element with the id "text-inner-content" and put it in a const
element2.removeAttribute("style"); //remove the element style (here the blur is removed)
```

<br>
<br>
<h3>2) Last Step</h3>
<br>
<img src="https://github.com/rafaelsorgato/remove-passeidireto-blur/blob/main/images/extension.png">
follow the steps in the image and load the folder that contains the extension, that's it, the extension is already working
