# Dengue

### Data Centric Development Project - Code Institute

By: Linda Hsu

## Demo

A live demo of the finished project can be found [here](https://paddlepop25.github.io/trent-project-2-dengue/).

![Desktop Demo](https://github.com/Paddlepop25/trent-project-2-dengue/blob/master/assets/images/dengue.gif)

## Aim

Because this project is due around the December holiday season, I was reminded of an incident that happened 2 years ago. My husband had taken a week off work for the Christmas week and we had plans to spend precious time together. Instead, he was stricken with dengue fever and he spent the week (and more) lying on the couch. He went to the doctor's every day to have his blood drawn for measuring his white blood cells and platelets count. Needless to say, it wasn't a fun Christmas.

Dengue is prevalent in this part of the world because of rainfall, still-water and humidity. Every year, there are people who are infected with the dengue virus after being bitten by the female Andes mosquito and there had been a few deaths too. The government had many educational campaignes to educate people to lower the risk of potential mosquito breeding ground and how to protect themselves from being bitten.

I wanted to make this website for people who are suffering from dengue as well as for their loved ones. I included useful information about dengue here, the dengue clusters in Singapore, suggested nearby amenities they may need and also links to other sources for further reading.

I hope that this website would benefit those seeking for knowledge about dengue.

## UX

This project is designed starting with a mobile-first approach, with a slight variation on the layout for medium and larger sized screens. I intended this website to be clean looking and simple to use with access to information quickly.

Colors were especially used to achieve this objective. I wanted the website to have a primary pinkish theme color (#fde3e3) to set a soothing and calming tone, and an accompanying secondary color of maroon (rgb(171, 0, 0)) to highlight links for the users to click on. The latter was especially chosen to remind users that getting dengue is via the blood through mosquito bites.

On the hover state for links and buttons, the maroon color would change to a darker maroon tone to indicate that a 'call for action' from the user is possible and recommended.

The white background was utilized to enable users to focus their attention on the texts and buttons and not distract them unnecessarily with looking beyond these important information.

In the large devices' view, I placed the boxes containing important information towards the center of the screen to have the users' eyes level to follow the website smoothly downwards. This was contrasted with a full width map for creating a subtle interesting visual appeal to the users.

I also added a secret 'easter egg' in the form of a small mosquito icon in the footer. When the user hovers over it, it shakes and it makes one feel like slapping it dead. Well, it also points users to the Ministry of Health wesbite. If one didn't manage to spot this, it is okay as the same link is provided in the 'For More Information' section. I deliberately left out the shadow upon hover as when the mosquito shakes, it looks just like an Andes mosquito with the stripped black and white legs.

## UI

The navigation bar is responsive for small, medium and large screens following Bootstrap's breakpoints. An animated hamburger icon is available for small and medium screen on the top right corner of the website. A dropdown menu with links to different parts of the website allows the user to navigate there quickly. When the screen is large-sized and above, the navigation bar displays the links on top of the screen instead.

I included a smooth scrolling effect for the links on the navbar so it feels like the users are invited to the desired position on the page rather than feeling like they are dropped there.

Two google [fonts](https://fonts.google.com/?selection.family=Roboto|Rubik&query=rub) were chosen for this website. I used 'Rubik' for the titles on the page and 'Roboto' for the rest of the texts. They were chosen for their rounded features which I wanted to look inviting to the users.

The [landing](https://paddlepop25.github.io/trent-project-2-dengue/) page was designed to give an impactful message right from the start. It teaches the users how to get rid of stagnent water in 5 steps. These are the highest causes of stangnent water in Singapore with high rise buildings all around the country. Each individual needs to be responsible for their environment as this is a small country but with many people per square foot.

Following that, the users are presented with boxes of information separated appropriately. They could choose to go to the place on the website directly by clicking on the [dengue](https://paddlepop25.github.io/trent-project-2-dengue/#dengue-update) link on the navbar. I included the most asked questions one may have if he/she has contracted dengue or their loved ones have. The information is brief, but sufficient as it covers the most important aspects of dengue. There are also links to other sources and these are highlighted with the theme color.

Next is the [dengue cluster](https://paddlepop25.github.io/trent-project-2-dengue/#abovezones) section where one could see where the dengue clusters are in Singapore with a click of a button. Several zones are provided that shows the different parts of Singapore and one can 'reset' the map with click on the 'Singapore' button. This shows the initial map with all the collective clusters in the country.

Each pink box or polygon on the google map is a link which would show an infobox when the user clicks on it. Information about the exact locality, cases counts, and places where mosquito breeding ground are found is displayed on it. I gave the table some light pink background to be aligned with the theme color of the website. The infoboxes are best displayed on a large screen device, but is also shown for small and medium sized devices. There are horizontal and vertical scroll bars for the user to navigate on.

The [amenities near you](https://paddlepop25.github.io/trent-project-2-dengue/#amenities) section was provided to give information on twenty nearby places and services a dengue patient or their loved one may need. I thought of medical supplies, clinics, meal delivery and even insurance agencies and funeral homes. I chose my home area as the home ground for these amenities.

Upon clicking on one of the amenity, google markers will drop on the map with alphabets on the pins. One could click on the pin to see the name, address and rating of the amenity. The twenty locations are also listed below the amenity box, and this is communicated in the last sentence of the amenity box. The alphabets of the list is an exact match to the pins on the map so one could refer to one or the other easily.

## Wireframes

## User Stories

These are the user stories that I intended to achieve while building this website:

1. To build a modern looking website that is easy for the user to navigate around
2. To provide accurate, important and basic information on dengue. This includes on what it is, what symptoms does one have from dengue fever and how to prevent mosquito breeding
3. To show users where the dengue clusters in Singapore are with added information in each infobox
4. To provide users information on nearby amenities for those who need medical supplies or relevant useful services
5. To direct users to other websites for further reading. This includes a doctor's interview, the Ministry of Health's official website and others
6. To showcase my current skills utilizing HTML5, CSS3, Bootstrap, Javascript, Google Places API and other tools to make a website inspired by an unfortunate incident 2 Christmas ago

## Features

- The links in the navigation bar changes to the theme maroon color (rgb(171, 0, 0)) when hovered over to indicate that it is a link that the user could click on. This brings them to different sections of the website
- I introduced a smooth scrolling effect so the transition to another section of the website is not abrupt
- When hovering over any links, the cursor changes from a pointer to a hand to indicate that it is not a static word. An action could be made on the link to give the user more information on another page
- I grouped basic but the important information about dengue in different boxes. For further reading, links in the theme maroon color is provided so the user can click on them easily
- In the dengue cluster section, buttons reflecting the different zones in Singapore are provided. When the user clicks on one of them, the google map is updated with boxes or polygrams to reflect the dengue cluster in that area. This is useful to select an area where the user resides
- The boxes and polygons shown on the google map are clickable and they show extra detailed information in the form of an infobox
- In the amenities section, suggested places and services are highlighted in the maroon theme color to suggest they are clickable links. Once an option is selected, the google map is updated with 20 results. This is reflected with drop down pins with alphabets on them. They are clickable to show an infobox of each location, address and rating
- A list is also shown below the amenityt box and the "#" alphabetical index on the list matches the alphabets on the google pins
- The footer section has a short, fun surprise for the user when he/she hovers over it. The mosquito icon shakes and it looks like the female Andes mosquito with the white and black striped legs. It is a link that will bring the user to the Ministry Of Health website for more information on dengue

Future features

- When a relevant API by the NEA (National Environment Agency) is available, I would like the number of dengue cases on this website to be updated daily
- I would like to include testimonies in the form of a video by two or three former dengue patients
- In future development I would like to use a google geolocation API that can locate where the user is and give the places near their location

## Technologies Used

Here are a list of programming languages, frameworks, technologies and tools used for this website.

- HTML5
- CSS3
- JavaScript
- JQuery
- [Google Maps API](https://cloud.google.com/maps-platform/)
  - Used places to select locations and the data layers to display information from geoJSON files
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
- Samsung Galaxy 8
  - Google Chrome
  - Samsung web browser
- Redmi Note 7
  - Google Chrome

Additionally, Google Chrome Devtools was used throughout the project to view this website on a number of stimulated mobile, tablet, laptop and desktop devices to ensure compatibility and responsiveness. Devices include Galaxy S5, Pixel 2, Pixel 2 XL, iPhone 5 / SE, iPhone 6/7/8, iPhone 6/7/8 plus, iPhone X, iPad, and iPad Pro.

I found that a standard font size does not work for all screen sizes, so I added a base `font-size: 16px` on the `html` in the css file, and adjusted accordingly. Where needed to fit the elements neatly in place, I used media queries as well.

All links will open in a new tab having used `target="_blank"` for each 'a tag.' They have been manually tested in each browser to ensure that they point to the correct destination.
