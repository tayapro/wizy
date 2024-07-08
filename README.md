# WIZY web application

![Website Mock Up](assets/images/readme/mockup.png)

## Index – Table of Contents

- [Purpose](#purpose)
- [UX Design](#ux-design)
- [Features](#features)
- [Design](#design)
- [Project Structure (JS)](#project-structure-js)
- [Technologies](#technologies)
- [Testing](#testing)
- [Deployment](#deployment)
- [Credits](#credits)
- [Acknowledgments](#acknowledgments)

# Purpose

Our goals:

The website is built using HTML, CSS and Javascript as a Portfolio Project#2 for the Code Institute's Full Stack Developer(e-Commerce) course.

[The live WIZY website](https://tayapro.github.io/wizy/)

---

# UX Design

## User stories

### As a **first time user**

- I want to easily understand the primary objective of the website.

### As a **returning** and a **frequent user**

- I want to easily navigate the website.
- I want to make sure I don't get lost on this website.

# Features

## Existing Features

### F01 Navigation Bar

Each page has a sticky navigation bar at the top that is fully responsive. It includes a logo linking to the Home page, as well as links to the Home, Champions pages. The navigation bar layout is consistent across all devices, making navigation simple and intuitive. The underline appears when you move the mouse over the menu links.

<img src="assets/images/readme/menu_desktop.png" width="400">

For mobile devices, it transforms into a compact "hamburger menu." This dropdown menu contains the same items, displayed in a column on a semitransparent background.

<img src="assets/images/readme/menu_mobile.png" width="400">

### F02 Home page - image and call to action

### F03 Home page - tagline

### F04 Home page - testimonials

### F05 Home page - HEPY team message

### F06 Footer

### F07 Lifehacks page

### F08 Subscribe page

### F09 page 404

## Future features

> -

# Design

## Imagery

## Colour Scheme

## Typography

For this project Rubik (logo) and Varela Round (body text) are used as fonts. <br>
Rubik font is great for a game app logo because its bold, modern design makes it stand out.<br>
Varela Round, with its friendly and rounded design, offers excellent readability and a warm,
approachable feel, making it a great choice for game apps.

## Wireframes

### Main Page Wireframes

<img src="assets/images/readme/landing_page.png" width="500" alt="home page wireframe">

### Rules Wireframes

<img src="assets/images/readme/rules_page.png" width="500" alt="rules page wireframe">

### Game Wireframes

<img src="assets/images/readme/game_page.png" width="500" alt="game page wireframe">

### Outcome Wireframes

<img src="assets/images/readme/outcome_page.png" width="500" alt="outcome page wireframe">

### 404 page Wireframes

<img src="assets/images/readme/404_page.png" width="500" alt="404 page wireframe">

### 500 page Wireframes

<img src="assets/images/readme/500_page.png" width="500" alt="500 page wireframe">

# Project Structure (JS)

## Architecture

<table>
<tr>
   <td><img src="./assets/images/readme/architecture_fun.webp" alt="architecture fun image" width="400"></td>
   <td>Having a good architecture for a JavaScript project is crucial for several reasons:
      <ol>
         <li><strong>Maintainability</strong>: A well-structured project makes it easier to understand, 
            modify, and extend the codebase, reducing the risk of introducing bugs when making changes.</li>
         <li><strong>Scalability</strong>: good architecture allows the project to scale and add 
            new features without becoming unwieldy or difficult to manage.</li>
         <li><strong>Collaboration</strong>: clear separation of concerns and organized code facilitates 
            teamwork, enabling multiple developers to work on different project parts simultaneously 
            without conflicts.</li>
      </ol>
   </td>
</tr>
</table>

### Project Architecture Overview

The WIZY project architecture is organized into three levels:

<img src="./assets/images/readme/architecture_project.webp" alt="project architecture image" width="900">

1. **Main Level**: This level consists of the main.js file, which serves as a router to dynamically load the content of all other pages.

2. **Pages Level**: This level comprises JavaScript files for individual pages, such as the landing page, rules page, and game page. Each file contains the specific content and functionality for its corresponding page.
   There are no horizontal dependencies at this levels. The pages js files depend only on components js files.

3. **Components Level**: This level consists of component JavaScript files. These components act as building blocks that are utilized by the page-level JavaScript files to construct the overall page logic and functionality.
   There are no horizontal dependencies at this level. The component js files depend only on library `animate.js` file.

4. **Libraries**: This section contains project-wide libraries used as external dependencies, with the potential to be released as npm packages. It currently includes an animation library that provides animation capabilities for HTML elements.

## JavaScript Structure

1. On the **Main Level**, there is a `main.js` file that imports all the pages JavaScript files such as:

   - `champions-page.js`
   - `game-page.js`
   - `landing-page.js`
   - `outcome-page.js`
   - `rules-page.js`

   Inside the `main.js` file, there is an handler function attached to the `DOMContentLoaded` event listener, which includes a `try...catch` statement to handle any internal errors.

   In case of an error, the user will be redirected to the `500.html` page.

> [!NOTE]
> Use `if...else if` instead of `switch...case` to avoid creating additional functions for parsing URLs.

2. **Pages Level**

   2.1. `champions-page.js` file is responsible for Champions page view with actual list of game leaders.
   Sets the default list of champions if no champion data exists in local storage.

3. **Component Level**

**Library** `animate.js` file

> [!NOTE]
> The files have quite detailed comments for more in-depth information.

## Main JS features

- _Dispatcher event handler function_, where using the corresponding onloading page js functions redirect to to the required HTML page based on the URL.
- The WIZY application utilizes `throw new Error` statement for error handling to gracefully manage unexpected conditions and provide informative feedback, contributing to a more reliable and user-friendly experience.
- WIZY app is a project without server-side storage and _use localStorage to store pairs: key and value_.
  LocalStorage enables data to persist across page reloads and sessions. It offers a simple and efficient method for storing user preferences, game scores, or settings directly in the user's browser.

  - **Username** localStorage record has `{Username: NAME}` format, where `NAME` is a string with 2 to 10 characters.
    The username will be changed to a new one every time, then they fill the username and click `Play` button
    on the landing WIZY page.

  - **Complexity** localStorage record has `{Complexity: NUMBER}` format, where `NUMBER` is a integer between 0 and 2.
    0 is easy level, 1 is middle complexity level, 2 is hard level.
    The selected complexity level on `Rules` page is saved on localStorage and displayed on the game's outcome page as current level for new game. <br >
    If the user wants to play a new game at the same level, they can do so, just click `Play` button.
    Alternatively, users can change the complexity and click the `Play` button to start a new game at the
    chosen level of complexity on the game's outcome page.

  - **Champions** localStorage record has `Champions` as key and array of 5 objects with following structure:
    `{name: USERNAME, score: SCORE_NUMBER, timeStamp: TIMESTAMP_NUMBER}` as value, where `USERNAME` is string, `SCORE_NUMBER` is total score number less 1000, `TIMESTAMP_NUMBER` - Unix epoch time.
    The initial champions list is read and downloaded from the `champions` array in `champions.js` file. If a user achieves a score better than the minimum score in this list, they will be added to the champions list. The list will be updated
    (contains the 5 best players). A user can have a few records in the list of champions. If a user refreshes the outcome
    page of the game multiple times, the champions page will
    not display any duplicates (the localStorage will also not contain duplicates).

> [!NOTE]
> There is no need to clean up localStorage before writing data because it will overwrite the `Username` and `Complexity` records. The `Champions` record will be updated based on a user's scores.

# Technologies

## Languages

- HTML5
- CSS
- Javascript

## Frameworks, Libraries & Apps

| Name                                                      | Purpose                                                 |
| :-------------------------------------------------------- | :------------------------------------------------------ |
| Google Fonts                                              | Fonts                                                   |
| Font Awesome                                              | Icons                                                   |
| Favicon.cc                                                | Create website favicon                                  |
| [Photopea](https://www.photopea.com/)                     | Work with images (resize, convert, etc)                 |
| [GoDaddy](https://www.godaddy.com/)                       | Generate HEPY logo                                      |
| [Pixelcut](https://create.pixelcut.ai/background-remover) | Remove image's background                               |
| [Vmake.ai](https://vmake.ai/image-outpainting)            | Expand the image                                        |
| [Imagecolorpicker](https://imagecolorpicker.com)          | Color picker                                            |
| Balsamiq                                                  | Build interface website wireframes                      |
| Git                                                       | Use for version control                                 |
| GitHub                                                    | Store the source code and deploy and host the live site |
| GitPod                                                    | Set up and run project code                             |
| Google Chrome's Dev Tools                                 | Inspect elements, layouts, debug pages                  |
| Google Chrome's Lighthouse                                | Check the performance, quality, and correctness of site |
| Google Chrome's Screen Reader                             | Test screen-reader accessibility                        |
| W3C HTML Markup Validator                                 | Validate HTML code                                      |
| W3C Jigsaw CSS Validator                                  | Validate CSS code                                       |
| JSHINT                                                    | Validate JS code                                        |

# Testing

## Features testing

[Test results]() as Google sheets.

Responsive layout has been check for all screen sizes, and focused on most popular, based on [screen-resolution-stats](https://gs.statcounter.com/screen-resolution-stats/all/worldwide/2023).

## User stories testing

This section shows connection between [Features](#features) and [UX design](#ux-design) sections.

### As a first time user

### As a returning/frequent user

- I want to easily navigate the website.

  > The user can locate the necessary pages by using the links in the navigation bar. \
  > For more details, see [F01 Navigation bar](#f01-navigation-bar)

- I want to feel welcomed on WIZY website.

- I want to make sure I don't get lost on this website.

  > In case of the user find themself on 404 page, they easily to find a link to HEPY home page. \
  > For more details, see [#F09 page 404](#f09-page-404).

## Validator testing

### HTML Validator

The W3C Markup Validation Service was employed to check the HTML of the website. <br>
All pages passed without any errors or warnings.

<details><summary>Home</summary>
<img src="assets/images/readme/W3HTML_validation_landing.png" width="500px">
</details>

<details><summary>Rules</summary>
<img src="assets/images/readme/W3HTML_validation_rules.png" width="500px">
</details>

<details><summary>Game</summary>
<img src="assets/images/readme/W3HTML_validation_game.png" width="500px">
</details>

<details><summary>Outcome</summary>
<img src="assets/images/readme/W3HTML_validation_outcome.png" width="500px">
</details>

<details><summary>Champions</summary>
<img src="assets/images/readme/W3HTML_validation_champions.png" width="500px">
</details>

<details><summary>404 page</summary>
<img src="assets/images/readme/W3HTML_validation_404page.png" width="500px">
</details>

### CSS Validator

The W3C Jigsaw CSS Validation Service was employed to check the HTML of the website. <br>
The CSS page passed without any errors or warnings.

<details><summary>CSS</summary>
<img src="assets/images/readme/W3C_validation.png" width="500px">
</details>

### JS Validator

The JSHint Validation Service was employed to check the JS files. <br>
The JS files passed without any errors.

<details><summary>js/components/alphabet.js</summary>
<img src="assets/images/readme/alphabet_validation.png" width="300px">
</details>

<details><summary>js/components/champions.js</summary>
<img src="assets/images/readme/champions_validation.png" width="300px">
</details>

<details><summary>js/components/complexity.js</summary>
<img src="assets/images/readme/complexity_validation.png" width="300px">
</details>

<details><summary>js/components/life.js</summary>
<img src="assets/images/readme/life_validation.png" width="300px">
</details>

<details><summary>js/components/outcome.js</summary>
<img src="assets/images/readme/outcome_validation.png" width="300px">
</details>

<details><summary>js/components/score.js</summary>
<img src="assets/images/readme/score_validation.png" width="300px">
</details>

<details><summary>js/components/user.js</summary>
<img src="assets/images/readme/user_validation.png" width="300px">
</details>

<details><summary>js/components/word.js</summary>
<img src="assets/images/readme/word_validation.png" width="300px">
</details>

<details><summary>js/lib/animate.js</summary>
<img src="assets/images/readme/animate_validation.png" width="300px">
</details>

<details><summary>js/pages/champions-page.js</summary>
<img src="assets/images/readme/champions_page_validation.png" width="300px">
</details>

<details><summary>js/pages/game-page.js</summary>
<img src="assets/images/readme/game_page_validation.png" width="300px">
</details>

<details><summary>js/pages/landing-page.js</summary>
<img src="assets/images/readme/landing_page_validation.png" width="300px">
</details>

<details><summary>js/pages/outcome-page.js</summary>
<img src="assets/images/readme/outcome_page_validation.png" width="300px">
</details>

<details><summary>js/pages/rules-page.js</summary>
<img src="assets/images/readme/rules_page_validation.png" width="300px">
</details>

<details><summary>js/main.js</summary>
<img src="assets/images/readme/main_validation.png" width="300px">
</details>

## Performance

Google Lighthouse in Google Chrome Developer Tools was used to check the website performance.

### Home

<details><summary>Home desktop</summary>
<img src="assets/images/readme/landing_desktop.png" width="500px">
</details>

![Landing desktop numbers](assets/images/readme/landing_desktop_numbers.png)

<details><summary>Home mobile</summary>
<img src="assets/images/readme/landing_mobile.png" width="500px">
</details>

![Landing mobile numbers](assets/images/readme/landing_mobile_numbers.png)

### Rules

<details><summary>Rules desktop</summary>
<img src="assets/images/readme/rules_desktop.png" width="500px">
</details>

![Rules desktop numbers](assets/images/readme/rules_desktop_numbers.png)

<details><summary>Rules mobile</summary>
<img src="assets/images/readme/rules_mobile.png" width="500px">
</details>

![Rules mobile numbers](assets/images/readme/rules_mobile_numbers.png)

### Game

<details><summary>Game desktop</summary>
<img src="assets/images/readme/game_desktop.png" width="500px">
</details>

![Game desktop numbers](assets/images/readme/game_desktop_numbers.png)

<details><summary>Game mobile</summary>
<img src="assets/images/readme/game_mobile.png" width="500px">
</details>

![Game mobile numbers](assets/images/readme/game_mobile_numbers.png)

### Outcome

<details><summary>Outcome desktop</summary>
<img src="assets/images/readme/outcome_desktop.png" width="500px">
</details>

![Outcome desktop numbers](assets/images/readme/outcome_desktop_numbers.png)

<details><summary>Outcome mobile</summary>
<img src="assets/images/readme/outcome_mobile.png" width="500px">
</details>

![Outcome mobile numbers](assets/images/readme/outcome_mobile_numbers.png)

### Champions

<details><summary>Champions desktop</summary>
<img src="assets/images/readme/champions_desktop.png" width="500px">
</details>

![Champions desktop numbers](assets/images/readme/champions_desktop_numbers.png)

<details><summary>Champions mobile</summary>
<img src="assets/images/readme/champions_mobile.png" width="500px">
</details>

![Champions mobile numbers](assets/images/readme/champions_mobile_numbers.png)

### 404 page

<details><summary>404 page desktop</summary>
<img src="assets/images/readme/404page_desktop.png" width="500px">
</details>

![404 page desktop numbers](assets/images/readme/404page_desktop_numbers.png)

<details><summary>404 page mobile</summary>
<img src="assets/images/readme/404page_mobile.png" width="500px">
</details>

![404 page mobile numbers](assets/images/readme/404page_mobile_numbers.png)

### 500 page

<details><summary>500 page desktop</summary>
<img src="assets/images/readme/500page_desktop.png" width="500px">
</details>

![500 page desktop numbers](assets/images/readme/500page_desktop_numbers.png)

<details><summary>500 page mobile</summary>
<img src="assets/images/readme/500page_mobile.png" width="500px">
</details>

![500 page mobile numbers](assets/images/readme/500page_mobile_numbers.png)

## Device/Browser Compatibility

Testing has been carried out on the following devices:

1. Macbook Sanoma Version 14.4.1:

   - Chrome Version 124.0.6367.61 (Official Build) (arm64)
   - Firefox Version 126.0.1 (64-bit)
   - Safari

2. Samsung S20:

   - Chrome Version 125.0.6422.165
   - Samsung Internet Version 25.0.1.3

3. iPad Air 5th generation:

   - Safari
   - Chrome

4. Windows PC:
   - Chrome Version 124.0.6367.61 (Official Build) (arm64)

# Deployment

## How to fork and deploy

1. Fork GitHub [WIZY repository](https://github.com/tayapro/wizy).
2. In the GitHub repository, navigate to the **Settings** tab and select **Pages** from the left-hand menu.
3. In the source section drop-down menu, choose the **Main Branch** and click button **Save**.
4. Once the **Save** is clicked, the page will automatically refresh and display a detailed ribbon to indicate successful deployment.
5. Any changes pushed to the main branch will be reflected in the live project.

## How to clone

1. Visit the [WIZY repository](https://github.com/tayapro/wizy) on GitHub.
2. Click the **Code** button on the right side of the screen, select **HTTPs**, and copy the provided link.
3. Open a terminal and navigate to the directory where you want to clone the repository.
4. On the command line, type `git clone`, paste the copied URL, and press the **Enter** key to begin the process.

# Credits

## Content

- The hamburger menu for mobile devices and footer icons as ideas were taken from "Love running" lesson.
- All other content was written by the developer.

## Media

## Code

## Media

- The fonts used were imported from [Google Fonts](https://fonts.google.com/)
- The icons in the header, footer were taken from [Font Awesome](https://fontawesome.com/icons)

# Acknowledgments

I want to give a big thanks to my mentor, Ronan McClelland. He gave me awesome advice on how to plan and do this project. <br>
Plus, he showed me useful stuff for coding and testing. <br>
Thanks to the Slack Community for always being there to answer my questions, sometimes even before I asked them!
