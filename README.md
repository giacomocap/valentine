# Valentine's Day React App

This is a fun, interactive Valentine's Day web application built with React. It features a playful "proposal" with animated text, falling images, and interactive buttons.

## Features

- Animated text messages that change over time
- Snowfall effect with custom images (including GIFs)
- Interactive "Yes" and "No" buttons
- The "Yes" button grows larger as the user clicks "No"
- Multiple humorous responses for repeated "No" clicks
- Cute bear GIF displayed upon accepting

## Technologies Used

- React
- GSAP (GreenSock Animation Platform)
- react-snowfall

## Setup

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Run the development server:
   ```
   npm run dev
   ```

## Project Structure

- `App.js`: Main component containing the application logic
- `App.css`: Styles for the application
- `/public`: Contains static assets like images

## Customization

You can customize the application by modifying:

- `texts` array: Change the sequential messages displayed
- `phrases` array: Modify the responses for "No" button clicks
- `images` array: Add or replace the falling images/GIFs
- Styling in `App.css`

## Notes

- The application uses local images (`birdie.png` and `mona.png`) which should be placed in the public directory.
- External GIFs are used for some of the falling images.

## Contributing

Feel free to fork this project and customize it for your own Valentine's Day surprise!

## License

[Add your chosen license here]