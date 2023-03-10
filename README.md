# AniQuiz

<div align="center">
<img alt="Github Logo" src="logos/AniQuiz_Short_Logo.png" />
</div>

## Table of contents 📰

- [Description](#description)
- [Wireframe on Desktop](#wireframe-on-desktop-%EF%B8%8F)
- [Wireframe on Mobile](#wireframe-on-mobile-)
- [Wireframes](#wireframes-%EF%B8%8F)
- [API](#api-)
- [Sitemap](#sitemap-%EF%B8%8F)
- [Dependencies](#dependencies-)
- [Additional](#additional-)
- [Contributors](#contributors-)

## Description📜

### What is AniQuiz?

- **AniQuiz** is meant to be a anime quiz related application. This application is inspired by [RinBot](https://rinbot.moe/).

### Features:

- **About Us Section** (Details who we are as programmers and how we chose this project!)
- **How to Play** (Info on how the game works and how you can play it)
- **Play the Game** (Our main option for accessing the quiz and playing the game)

### How does AniQuiz Work?

- The webpage provides an option between 3 aforementioned game modes: **Guess the anime series, Guess the manga series and Who said that anime quote**. Once a category is selected, the player will have to select from the multiple choice answers displayed based on the question that was asked.
- If the user's chooses the **correct answer**, the button will change to green and a modal will appear congratulating the player on their correct answer.
- If the user chooses the **wrong answer**, the button will change to red and a modal will appear revealing the correct answer.
- Using the **Jikan API**, we will retrieve an image(s) for the "Guess that manga series" and "Guess that anime series" game modes with four possible choices on what the anime or manga could be.
- Using the **AnimeChan API**, we will retrieve popular quotes from an anime series for the player to guess in the "Guess that anime quote" game mode. It will be displayed with four choices on what that anime could be.

### Goals:

- The purpose/goal of AniQuiz is to test and improve one's knowledge on anime and manga. It's meant to be a fun way to quiz yourself on anime and manga related content.

### Roles:

- Hydeia contributed to this group project as the lead designer. She created the low-fidelity wireframes on desktop, mobile and tablet as well as the sitemap. She also programmed the homepage and a portion of the logic for the actual game pages.
- Anthony contributed to this project as the lead coder. He worked on the logic and development of the anime and manga related game page.

## Wireframe on Desktop 🖥️

#### The page will display an anime background and a navigation bar with links to the about us, learning about the game, and starting the game pages.

![Landing Page Image](wireframes/desktop/Desktop-01.jpg)

#### The start game page will allow the user to choose from 3 possible game modes

![Game Mode Page Image](wireframes/desktop/Desktop-03.jpg)

#### If you click "Who said that anime quote?" for example, It will display a a random anime quote and 4 possible answer choices for selection

![Category Page Image](wireframes/desktop/Desktop-04.jpg)

#### The wrong answer will change to red after selecting then switch to the modal screen

![Wrong Answer Page Image](wireframes/desktop/Desktop-05.jpg)
![Modal Screen for Wrong Answer](wireframes/desktop/Desktop-06.jpg)

#### The correct answer will change to green after selecting then switch to the modal screen

![Correct Answer Page Image](wireframes/desktop/Desktop-07.jpg)
![Modal Screen for Correct Answer](wireframes/desktop/Desktop-08.jpg)

## Wireframe on Mobile 📱

The mobile adaption of our website works similarily to the desktop application, with a few small changes.

#### The navigation bar will have a dropdown hamburger menu to showcase the different pages the app has

![Mobile About Page](wireframes/mobile/Mobile_1.jpg)

#### All game decision buttons have a vertical placement rather than horizontal for easy viewing on mobile.

![Mobile Vertical Placement](wireframes/mobile/Mobile_5.jpg)
![Mobile Vertical Placement](wireframes/mobile/Mobile_6.jpg)
![Mobile Vertical Placement](wireframes/mobile/Mobile_7.jpg)
![Mobile Vertical Placement](wireframes/mobile/Mobile_8.jpg)

## Wireframes 🖊️

#### For images of our wireframe check out our wireframe files below:

- [Desktop Wireframe](wireframes/desktop)
- [Mobile Wireframe](wireframes/mobile)
- [Figma Wireframe File](https://www.figma.com/file/2NqUqIVdoXK33r0yTomNqV/Wireframe_Project_1?node-id=11%3A17)

## SiteMap 🗺️

#### Here you can view a further breakdown on the path of each option on our website:

- [Website Sitemap File](https://www.figma.com/file/eFgd65MWwDKykhmZlRqkKq/Sitemap?node-id=0%3A1)

## API 📝

- [Jikan Api](https://jikan.moe/)
- [AnimeChan Api](https://animechan.vercel.app/)

## Dependencies 📇

- [Axios](https://github.com/axios/axios)
- [Parcel](https://parceljs.org/)
- [Bulma](https://bulma.io/)

## Additional 💭

#### Future functionality that we would like to have:

- Points System (Whenever the user gets an answer right, they get one point)
- Display Points System (There would be a scoreboard detailing how many points in total they received)
- Timer for selecting an answer to questions
- Make the populated anime API photos for Guess that Anime and Guess that Manga more challenging

## Contributors 💻

<div align="center">
Connect with the creators! 
</div>
<br>
<div align="center">
  <div>Created by Hydeia Blakey & Anthony Tapia</div>
<span>
<a href="https://github.com/hydeiablakey" target="_blank">
<img alt="Github Logo" src="assets/icons/hydeia_logo.jpg" /></a>
</span>

<span>
<a href="https://github.com/tapia81" target="_blank">
<img alt="Github Logo" src="assets/icons/anthony_logo.jpg"  /></a>
</span>

</div>
