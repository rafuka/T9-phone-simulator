# T9 Phone Simulator

## Description

This app simulates a keypad phone with T9 predictive text functionality. 

## Usage

1. Clone the repo and navigate to the main directory. Run `npm install`.
2. To quickly run the project, you can run `npm run start`. This will run both the backend server and will serve the frontend build and open it in a new browser tab.

The backend and frontend can be executed separately by running the commands `npm run backend-start` and `npm run frontend-start`, respectively.

If you need to change the port in which the backend server is run, you can change the value for the `BACKEND_PORT` variable in the `settings.js` file in the main project directory.

To run all tests, just run `npm run test`.

## Functionality

In order to write text on the virtual phone's screen, you need to use the keypad buttons, either by clicking on them with the mouse or by pressing the corresponding keyboard buttons. 

Whenever a key is pressed, a call to the API is made in order to fetch the possible words that can be formed with the specific key. These words are based on an English dictionary (as per the `backend/lib/dictionary.json` file). Pressing on other keys will keep adding digits and requesting for new words that might be formed with those digits. Once a response from the API is received, the list of suggested words is displayed in the screen. You can select between the suggested words by pressing the `*` key.

The API also allows for inserting words that are not included in the dictionary. For this, you need to press the `+` key while a word is selected. If you press the `+` key when a word is not selected, it will select the last word on the text.

Once the desired word is selected, you can press the `0` key to de-select it, and either press it again to insert a space, or you can start writing another word right besides the previouis one. This allows to create composed words that you can then add to the dictionary. For example, in order to add the word "hola" to the dictionary you would press the following sequence of keys: `4 * 0 6 * * 0 5 * * 0 2 0 + +`.

You can also delete characters/digits by pressing the `1` key.

On the top of the virtual phone there is a button that will change the suggested words from "Dictionary mode" to "Naive mode". Naive mode shows all the possible combinations based on the digits that have been pressed.

## Limitations

* The delete functionality only works with selected words. The text that has been "approved" cannot be deleted.
* Naive search for long sequences of digits can take a very long time and may freeze the app.
