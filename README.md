# Calorie Tracker

A mobile nutrition tracking application built with React Native and TypeScript. The app allows users to set daily nutrition goals, log food entries, track their progress, and manage previously added entries.

This project was created to gain experience developing a mobile application with persistent data, global state management, navigation, and CRUD functionality. The idea came from my experience with nutrition tracking apps that place some useful nutrition-tracking features behind premium subscriptions.

## Screenshots

### Nutrition Tracker
<img src="Downloads/Main.png" width="300">

### Add Entry
[PLACEHOLDER - Add Entry Screen Screenshot]

### Goals
[PLACEHOLDER - Add Goals Screen Screenshot]

### All Entries
<img src="Downloads/AllEntries.png" width="300">

## Features

- Set daily nutrition goals
- Track calories, protein, carbohydrates, fat, fiber, and sodium
- Add nutrition entries
- View daily nutrition totals and progress toward goals
- View recent entries
- View all previous entries
- Edit existing entries
- Delete existing entries
- Persistent local storage

## Technologies

- React Native
- Expo
- TypeScript
- Zustand
- AsyncStorage
- React Navigation
- Git and GitHub

## Application Structure

The application is divided into several screens:

- **Tracker** - Displays nutrition totals, progress toward daily goals, and recent entries.
- **Goals** - Allows users to set their daily calorie and macronutrient goals.
- **Add Entry** - Allows users to manually enter nutrition information for food.
- **All Entries** - Displays logged entries and allows users to edit or delete them.

## Data Management

The application uses Zustand for global state management. Nutrition goals and entries are stored locally using AsyncStorage so that data remains available after the application is closed.

The application supports CRUD operations for nutrition entries:

- **Create** - Add a new nutrition entry
- **Read** - View logged nutrition entries
- **Update** - Edit an existing nutrition entry
- **Delete** - Remove an existing nutrition entry

## Running the Project

Clone the repository:

```bash
git clone https://github.com/Windex3/calorie-tracker-app.git
```

Navigate into the project:

```bash
cd calorie-tracker-app
```

Install dependencies:

```bash
npm install
```

Start the Expo development server:

```bash
npx expo start
```

The application can then be run using Expo Go or an available emulator.

## Future Improvements

Possible future additions include:

- Nutrition history by date
- Nutrition trends and charts
- Food search
- Barcode scanning
- External nutrition API integration
- Additional nutrition insights and statistics
- Database-backed cloud storage
