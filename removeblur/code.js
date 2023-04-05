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

