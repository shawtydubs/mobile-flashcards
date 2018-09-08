import {AsyncStorage} from 'react-native';

const FLASHCARD_STORAGE_KEY = 'MobileFlashcards:Decks';

export const initializeStorageIfNeeded = () => {
    AsyncStorage.getItem(FLASHCARD_STORAGE_KEY)
        .then(results => {
            if (!results) {
                AsyncStorage.setItem(
                    FLASHCARD_STORAGE_KEY,
                    JSON.stringify({})
                )
            }
        });
};

export const saveDeck = (id, value) => {
    return AsyncStorage.mergeItem(
        FLASHCARD_STORAGE_KEY,
        JSON.stringify(
            {
                [id]: {
                    title: value,
                    questions: []
                }
            }
        ),
        () => AsyncStorage.getItem(FLASHCARD_STORAGE_KEY)
            .then(data => console.log("data: ", data))
    );
};
