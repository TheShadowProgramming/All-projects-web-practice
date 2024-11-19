- footer tag + address tag for the SEO optimizability (check md for more usage of <a> tag, a tag with target = "_blank" will redirect the href opening in new tab)
- img tag me sirf aur sirf width attribute add karo and not the height attribute usse ratio kharab ho jaayega image ka jo ki we don't know 
- if we have local images then keeping their names without spaces will make sure that application doesn't crashes in production
- UTF-16 se emojis support hote hai in the web page since now we're taking 2 bytes of info per character
- pre tag for pasting the content inside the tag as it is in the browser
- comments in html and css may leak sensetive info since vo comment ke saath hi browser jo milta hai file 
- strong tag helps you with the keywords of the website and this is really important since browsers ko samajhta hai ki kaunse website ko kaise rank karna on the basis of this strong tag
- ul is unordered list and the li element inside is bullet point list
- sub is subscript tag, sup is superscript it raises the power 
- BlockQoute is another tag where we can qoute something which is said by someone in our website, and uska cite attribute se we can link the citing source of that saying (search mdn)
- abbr tag with title attribute is used to make acronyms jinka full form aata when we hover over the acronym, and we have to feed that full form in the title attribute of the abbr tag
- input tag and select tag type of tags can be given some value attribute which will render the value it has been given starting me hi
- select tag ke andar we render option tags jiski kuch value hoti
- label tag gives screen reading softwares some context that the input tag and label tag are associated so therefore visually impaired can also browse of our website
- also it defines the semantics of the html doc which again will improve the ranks and stuff of the website, even when the user clicks on the label still the website will focus on the input field itself 
- Use nav tags, header tags and footer tags for defining the strucure and semantics of the website
- map tag for creating links in the image of the website whose image tag is present just above the map tag like the we use target attribute of the map image element to strategically puts certain links in certain parts of the link
- form tag is used for input forms like login and registration and stuff, action attribute decides which link to send the data on and through which request too using the method attribute, enctype attribute default rehne do chedo mat until and unless you want to upload a file through the form, target attribute decided where to display the response of the form which is usually set to _self when we want that the response of the request should be on the same page and when we want the request on different page then we use _blank value of the target attribute
- enctype attribute = multipart/form-data of the form is essential for the server to accept files that the user uploads on the website, since when the text is sent to the server then browser takes care of the conversion of text into binaries according to pre-defined encoding in the html tag doc like utf-8 or ASCII, but since we're sending direct binary data into the server
- Inside the form there are various tags and stuff which we can use in cases where the form is very huge like in the case of a govt registration form, tags like fieldset and legend are used, fieldset groups some input fields and their labels together and gives them a label at the top just like label works for the input tag, legend gives the label to these input groups, autocomplete attribute helps us in saving the password email and other credentials of the user locally but it is unsafe, therefore we'll make sure to include a forget password option in the form instead of saving the info locally
- the name attribute of the input tag gives description about the group to which the data belongs to, so like if there are 2 input fields with same name attributes then the server considers the data inside the fields in the same group and also it helps the server-side to access the data using that name attribute like specifically we can access the desired data from the form data, usually the name attribute is equal to the id of the html element itself 

# SEO optimization google practices

- <meta name="description" content="A description of the page"> [description snippet of the website that appears when we see website in the indexing]
- <meta name="robots" content="..., ..."> [for general search engines indexing]
- <meta name="googlebot" content="..., ..."> [for google specific indexing only]
- <meta name="google" content="nopagereadaloud"> [very important for precventing read aloud, I mean depending upon the audience we gotta choose whether to select this tag or not]
- <meta name="rating" content="adult"> [this is also possible use case in case if we build such type of websites jisme the warning dena is necessary like jiske wajah the safe search results aaram se filter out kar lega]

# Event handling ke liye html attributes ka help leke we can do many things directly

- The event handler attributes: onabort, onautocomplete, onautocompleteerror, onblur, oncancel, oncanplay, oncanplaythrough, onchange, onclick, onclose, oncontextmenu, oncuechange, ondblclick, ondrag, ondragend, ondragenter, ondragleave, ondragover, ondragstart, ondrop, ondurationchange, onemptied, onended, onerror, onfocus, oninput, oninvalid, onkeydown, onkeypress, onkeyup, onload, onloadeddata, onloadedmetadata, onloadstart, onmousedown, onmouseenter, onmouseleave, onmousemove, onmouseout, onmouseover, onmouseup, onmousewheel, onpause, onplay, onplaying, onprogress, onratechange, onreset, onresize, onscroll, onseeked, onseeking, onselect, onshow, onsort, onstalled, onsubmit, onsuspend, ontimeupdate, ontoggle, onvolumechange, onwaiting.
- like these events

# Global attributes which are really useful

- so yea the autofocus attritbute helps you to make the element in the entire webpage to get clicked once the webpage loads
- like in login forms, automatically the autofocus attribute will make the input box have the typing cursor
- draggable attribute helps us to provide functionality to an element using the drag and drop api