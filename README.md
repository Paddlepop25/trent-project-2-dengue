# Dengue

### Data Centric Development Project - Code Institute

By: Linda Hsu

## Demo

A live demo of the finished project can be found [here](https://paddlepop25.github.io/trent-project-2-dengue/).

![Desktop Demo](https://github.com/Paddlepop25/trent-project-2-dengue/blob/master/assets/images/dengue.gif)

## Aim

Because this project is due around the December holiday season, I was reminded of an incident that happened 2 years ago. My husband had taken a week off work for the Christmas week and we had plans to spend precious time together. Instead, he was stricken with dengue fever and spent the week (and more) lying on the couch. He went to the doctor's every day to have his blood drawn for measuring the white blood cells and platelets count. Needless to say, it wasn't a fun Christmas.

Dengue is prevalent in this part of the world because of stagnent water that encourages mosquito breeding. Every year, there are people who are infected with the dengue virus after being bitten by the female Aedes aegypti mosquito and there had been a few deaths too. The government had many educational campaignes to educate people to lower the risk of potential mosquito breeding grounds and how to protect themselves from being bitten.

I wanted to make this website for people who are suffering from dengue as well as for their loved ones. I included useful information about dengue, the dengue clusters in Singapore, suggested nearby amenities they may need and also links to other sources for further reading.

I hope that this website would benefit those seeking for knowledge about dengue.

## UX

This project is designed starting with a mobile-first approach, with a slight variation on the layout for medium and larger sized screens. I intended this website to be clean looking and simple to use with access to information quickly.

Colors were especially used to achieve this objective. I wanted the website to have a primary pinkish theme color (#fde3e3) to set a soothing and calming tone, and an accompanying secondary color of maroon (#af0000) to highlight links for the users to click on. The latter was especially chosen to remind users that contracting the dengue virus is via the blood through mosquito bites.

On the hover state for links and buttons, the maroon color would change to a darker maroon tone to indicate that a 'call for action' from the user is possible and recommended.

A white background was utilized to enable users to focus their attention on the texts and buttons and not be distracted with looking beyond these important information.

In the large devices' view, I placed the boxes containing important information towards the center of the screen to have the users' eyes level follow the website smoothly downwards. This was contrasted with a full width map for creating a subtle interesting visual appeal to the users.

I also added some secret 'easter eggs' in the form of small mosquitos in random places on the website. They are best experienced on larger devices as when the user mouse-over over the mosquitos, they buzz and make one feel like slapping them dead. Well it turns out users can, as they see the mouse cursor change to a hand one, indicating a 'call to action.' Upon clicking, the mosquitos turn into a splat of red, signifying blood. I decided to do this effect once per mosquito, and stop any pointer action afterwards. On mobile and tablet devices, the user could click on the mosquito for the same splat effect.

The last mosquito on the footer, however, is a little different. Instead of showing a splat of blood red, upon clicking users are brought to the Ministry of Health wesbite. If the user didn't manage to spot this, he/she is not missing out as the same link is provided in the 'For More Information' section. Flickering on some screens are welcome, as when the mosquito buzzes, it looks just like an Aedes aegypti mosquito with the stripped black and white legs.

## UI

The navigation bar is responsive for small, medium and large screens following Bootstrap's breakpoints. An animated hamburger icon is available for small screens on the top right corner of the website. A dropdown menu with links to different parts of the website allows the user to navigate there quickly. The menu also closes on a click on any of the links to give the user a better experience to not have to close the box manually. When the screen is medium-sized and above, the navigation bar displays the links on top of the screen instead.

I included a smooth scrolling effect for the links on the navbar so it feels like the users are invited to the desired position on the page rather than feeling like they are dropped there.

Two google [fonts](https://fonts.google.com/?selection.family=Roboto|Rubik&query=rub) were chosen for this website. I used 'Rubik' for the titles on the page and 'Roboto' for the rest of the texts. They were chosen for their rounded features which I wanted to look inviting to the users.

The [landing](https://paddlepop25.github.io/trent-project-2-dengue/) page was designed to give an impactful message right from the start. It teaches the users how to get rid of stagnent water in 5 steps. The image reminds users that they can do their part to prevent nosquito breeding grounds. It sends them the message that each individual needs to be responsible for their environment as this is a small country but with many people per square foot.

Following that, the users are presented with boxes of information separated appropriately. They could choose to go to this place on the website directly by clicking on the [dengue update](https://paddlepop25.github.io/trent-project-2-dengue/#dengue-update) link on the navbar. I included the most asked questions one may have if he/she or their loved ones had contracted dengue. The information is brief, but sufficient as it covers the most important aspects of dengue. There are also links to other sources and these are highlighted with the theme maroon color.

Next is the [dengue clusters](https://paddlepop25.github.io/trent-project-2-dengue/#abovezones) section where one could see where the dengue clusters are in Singapore with a click of a button. Several zones are provided that shows the different parts of Singapore and one could 'reset' the map with a click on the 'Singapore' button. This shows the initial map with all the collective clusters in the country.

Each pink box or polygon on the google map is a clickable element which would show an info-window when the user clicks on it. Information about the exact locality, case counts and places where mosquito breeding grounds are found is displayed on it. I gave the table a light pink background to be aligned with the theme color of the website. The info-window are best displayed on a large screen device, but is also displayed for small and medium sized devices. There are horizontal and vertical scroll bars for the user to navigate with.

The [nearby amenities](https://paddlepop25.github.io/trent-project-2-dengue/#amenities) section was provided to give information on up to 20 nearby places and services a dengue patient or their loved ones may need. I thought thatmedical supplies, clinics, meal delivery, even insurance agencies and funeral homes would be the more searchable places. I chose my home area as the home ground for these amenities.

Upon clicking on one of the amenities, google markers will drop on the map with alphabets on the markers. One could click (for small and medium devices) or mouse-over (for larger sized devices) on each marker to see the name, address and rating of the amenity. The up to 20 locations are also listed in a table below the amenity box, and this is communicated in the last sentence of the amenity box. The alphabets of the list is an exact match to the ones in the markers on the map so one could refer to one or the other easily.

## Wireframes

Wireframes were created to help me visualise the website in different sized screens. They can be viewed via this [link](https://github.com/Paddlepop25/trent-project-2-dengue/tree/master/assets/wireframes).

## User Stories

These are the user stories that I intended to achieve while building this website:

1. To build a modern looking website that is easy for the user to navigate around
2. To provide basic, accurate and important information on dengue. This includes on what it is, what symptoms does one have from dengue fever and how to prevent mosquito breeding
3. To show users where the dengue clusters in Singapore are with added information in each info-window
4. To provide users information on nearby amenities for those who need medical supplies or relevant useful services
5. To direct users to other websites for further reading. This includes a doctor's interview, the Ministry of Health's official website and others
6. To add an element of fun and surprise in the form of clickable moving mosquitos (on mouse-over on large devices) turning into a splat of red blood
7. To showcase my current skills utilizing HTML5, CSS3, Bootstrap, Javascript, Google Places API and other tools to make a website inspired by an unfortunate incident 2 Christmases ago

## Features

- The links in the navigation bar changes to the theme maroon color (#af0000) when hovered over to indicate that it is a link that the user could click on. This brings them to different sections of the website
- I introduced a smooth scrolling effect so the transition to another section of the website is not abrupt
- When hovering over any links, the cursor changes from a pointer to a hand to indicate that it is not a static word. An action could be made on the link to give the user more information on another page
- I grouped the different aspects of information about dengue in different boxes. For further reading, links in the theme maroon color is provided so the user can click on them easily
- In the dengue clusters section, buttons reflecting the different zones in Singapore are provided. When the user clicks on one of them, the google map is updated with boxes or polygrams to reflect the dengue clusters in that area. This is useful to select an area where the user resides. I didn't include the mouse-over feature for larger screens like the one in the amenities section because the boxes and polygrams are so near each other, a clickable function gives the user a better experience
- The clusters' boxes and polygons shown on the google map are clickable and they show extra detailed information in the form of an info-window
- In the amenities section, suggested places and services are highlighted in the maroon theme color to suggest they are clickable links. Once an option is selected, the google map is updated with up to 20 results. This is reflected with drop down markers with alphabets on them. They are clickable for small and medium devices and upon mouse-over for larger devices, an info-window of each location, address and rating would pop up.
- A list is also shown below the amenity box and the "#" alphabetical index on the list matches the alphabets on the google markers
- I included a fun surprise on this website. There are 2 seemingly random mosquitos placed deliberately over the white background in order to make them stand out. On large screens, when the mouse cursor is over the mosquitos, they buzz a little with the cursor changing to the same pointer as over a link. Once clicked, the mosquitos change into a splat of red blood.
- The footer section has another mosquito and when the user mouse-over over it, the mosquito buzzes and it looks like the female Aedes aegypti mosquito with the white and black striped legs. Upon clicking, users are brought to the Ministry Of Health website for more information on dengue

Future features

- When a relevant API by the NEA (National Environment Agency) is available, I would like the number of dengue cases on this website to be updated daily
- I would like to include testimonies in the form of a video by two or three former dengue patients
- In future development I would like to use a google geolocation API that can locate where the user is in Singapore and return the places near his/her location
- I would like to have one mosquito 'fly away' out of the screen and the mouse cursor change into a fly swatter upon hovering on the mosquito icon

## Technologies Used

Here are a list of programming languages, frameworks, technologies and tools used for this website.

- HTML5
- CSS3
- JavaScript
- JQuery
- [Google Maps API](https://cloud.google.com/maps-platform/)
  - Used places to select locations and the data layers to display information from geoJSON files
- [Place Types](https://developers.google.com/places/supported_types) page
  - Used for selecting places for query
- Markdown in [Google Colaboratory](https://research.google.com/colaboratory/faq.html)
  - Used for writing this README.md file
- [Visual Studio Code](https://code.visualstudio.com/)
  - Used as the IDE to write the codes for this website
- [Bootstrap 4.4.0 framework](https://getbootstrap.com/)
  - Used for it's grid system, page layout with styling and responsive navigation bar.
- [Google Fonts](https://fonts.google.com/)
  - Used 'Roboto' and 'Rubik'
- [Font Awesome](https://fontawesome.com/)
  - Used for social media icons and other icons
- [Favicon & App Icon Generator](https://www.favicon-generator.org/)
  - Used for generating Dengue's favicon
- [JSONLint formatter and validator](https://jsonlint.com/)
  - Used to format and validate the GeoJSON files
- [Mockflow](https://mockflow.com/)
  - Used to design and create the wireframes for this project
- [Git](https://git-scm.com/)
  - Used for version control to commit to Github
- [Github](https://github.com)
- [Google Chrome Developer Tools](https://developers.google.com/web/tools/chrome-devtools)
- [Am I Responsive?](http://ami.responsivedesign.is/?url=#)
  - Used to see across multiple devices with different screen sizes the responsiveness of the website
- [Screen To Gif](https://www.screentogif.com/)
  - Used to capture the responsive screens into a gif file
- [W3C Markup Validation service](https://validator.w3.org/)
  - Used to validate HTML codes and this result is returned 'Illegal character in query: | is not allowed.' This is ignored because the pipe "|" character is necessary for Google Fonts to allow additional fonts to be used
- [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/)
  - Used to validate CSS codes and this result is returned 'Congratulations! No Error Found.'
- [Esprima](https://esprima.org/demo/validate.html)
  - Used to validate all Javascript files and this result is returned 'Code is syntactically valid.'

## Testing

This website was tested on different web browsers and on different devices. I also requested friends and co-workers for feedback on what they liked and didn't like about this website. Adjustments were made accordingly until the final product upon project submission.

Devices and browesers:

- iPad 3
  - Safari
- MacBook Air
  - Google Chrome
  - Firefox
  - Safari
- MacBook Pro
  - Google Chrome
  - Firefox
  - Safari
- MacPro
  - Google Chrome
  - Firefox
- Windows 10 Enterprise
  - Google Chrome
  - Mircosoft Edge
- Samsung Galaxy Core Prime, Samsung Galaxy S7 edge
  - Google Chrome
  - Samsung web browser
- Redmi Note 4x and 7
  - Google Chrome

Additionally, Google Chrome Devtools was used throughout the project to view this website on a number of stimulated mobile, tablet, laptop and desktop devices to ensure compatibility and responsiveness. Devices include Galaxy S5, Pixel 2, Pixel 2 XL, iPhone 5 / SE, iPhone 6/7/8, iPhone 6/7/8 plus, iPhone X, iPad, and iPad Pro.

I found that a standard font size does not work for all screen sizes, so I added a base `font-size: 16px` on the `html` in the css file, and adjusted accordingly using `rem` instead of `px`. Where needed to fit the elements neatly in place, I used media queries as well.

All links will open in a new tab having used `target="_blank"` for each 'a tag.' They have been manually tested in each browser to ensure that they point to the correct destination.

After a zone or the Singapore button is clicked, I confirmed that the boxes and polygons on the google map shows info-windows by clicking (phone and tablet) or mouse-over (desktop) each one to visually check.

Also, all the amenities are clicked on and I confirmed all the google markers show info-windows by clicking (on phone and tablet) or mouse-over (desktop) to ensure they pop up. For the mouse-over one I also tested that they 'disappear' when I mouse-out.

I made sure the console doesn't log any error messages on page loading. I had particularly fixed a "Uncaught DOMException: Failed to execute 'querySelector'..." bug by experimenting with introducing `data-target="#idname"` and found that I could just add an id target to the `a href="#"` instead. I read about this fix on [github](https://github.com/twbs/bootstrap/issues/27903).

## Deployment

Git was used for version control and [Github](<(https://github.com)>) hosts the repository for all commits

Please click on [Dengue](https://paddlepop25.github.io/trent-project-2-dengue/) to find the deployed website, using Github pages. The pages will automatically be updated upon new commits to the master branch

### How to save the project to a local computer

These are steps to follow if you would like to run this code locally:

#### Download

1. Download [this repository](https://github.com/Paddlepop25/trent-project-2-dengue) from the Github repository
2. At the right hand side, click on green button _Clone or download_ then _Download ZIP_. The repository will automatically be downloaded into a ZIP folder on your computer
3. Uncompress the ZIP folder
4. Double click on the HTML file to open with the default browser of your computer or right click on the HTML file to choose a preferred browser
5. The rest of the files are available if you would like to make changes to the website according to your liking

#### Clone

1. Clone this repository from the Github repository from [(https://github.com/Paddlepop25/trent-project-2-dengue)](<(https://github.com/Paddlepop25/trent-project-2-dengue)>)
2. At the right hand side, click on green button _Clone or download_ then copy the URL shown in the input box
3. In your IDE of choice, paste `git clone https://github.com/Paddlepop25/trent-project-2-dengue.git` into your terminal.
4. This repository will automatically be cloned into a folder on your computer
5. To break the connection with this Github repository, enter `git remote rm origin` into your terminal

## Credits

Many of the sections describing dengue were taken from the [Ministry of Health website](https://www.moh.gov.sg/diseases-updates/dengue) and [IAMAT website](https://www.iamat.org/country/singapore/risk/dengue)

Longitude and Latitude reference taken from [travelmath](https://www.travelmath.com/cities/Tampines,+Singapore)

Connect to API using Javascript taken from [programmableweb](https://www.programmableweb.com/news/how-to-connect-to-api-javascript/how-to/2018/06/17)

### Codes

- Mobile hamburger animation [icon](https://codepen.io/pedrocampos/details/gufrx?__cf_chl_jschl_tk__=4301a43ed3ae401d3bf3cbf00203f9c346fcac5b-1576030369-0-AQyJPtvVKZsCoPOt-2pOJCt5f1Ay4HL9xVwRIHUeHlqefdOFSeq-7itzFyE0Z6xZtavNZ_8V9wvi6H4DcyaAQITqyPySxxroNis4F0wlmJ7_zOCbJ7SmtpKg5v_gS0nxugDC_Cz83EBb8ISBozBiFRnFBTGolNJGCajoce4Bcl94-61BmeY2cCEmIKIKYaSYxEe5Ubfz88Yoc3PlBMybgn1SIGtXh0Vqiv0KjTuihV3QXzkyRpBuLZIV9FpI5cK3tMa-R6mlSO6Fi8-QrWoELSxKx5JqwQqxuD9Z5a_kCN45bqkZ4-X8N7q14FolseoXJsDNtCPJniB1KUtaZGlRNOGdJIu0NwLb68KUUKLqyNaT)
- [Smooth scrolling](http://www.javascriptkit.com/javatutors/scrolling-html-bookmark-javascript.shtml) navbar links
- Adapted some codes from [StackOverflow](https://stackoverflow.com/questions/51334153/google-maps-api-getting-infowindow-on-click-with-geojson-file) for displaying info-windows
- Mosquito [buzzing](https://css-tricks.com/snippets/css/shake-css-keyframe-animation/)

### GeoJSON files

- https://data.gov.sg/search?q=dengue
  - files on zonal and whole of country's dengue clusters

### Images

Images of Mosquito icons

1. https://www.iconfinder.com/icons/2178054/aedes_dengue_mosquito_no_prevent_sign_zika_icon
2. https://www.onlinewebfonts.com/icon/562335
3. https://www.onlinewebfonts.com/icon/438501
4. https://mustsharenews.com/wp-content/uploads/2019/02/dengue-mozzie-wipeout.jpg

**This is for educational use**
