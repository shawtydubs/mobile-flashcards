import {AsyncStorage} from 'react-native';

const FLASHCARD_NOTIFICATION_KEY = 'MobileFlashcards:Notifications';
const FLASHCARD_STORAGE_KEY = 'MobileFlashcards:Decks';

// Decks
export const clearDecks = () => {
    return AsyncStorage.clear();
}

export const getDeck = id => {
    return AsyncStorage.getItem(FLASHCARD_STORAGE_KEY)
        .then(results => {
            const data = JSON.parse(results);
            return data[id];
        })
}

export const getDecks = () => {
    return AsyncStorage.getItem(FLASHCARD_STORAGE_KEY)
        .then(results => {
            return JSON.parse(results)
        })
};

export const initializeStorageIfNeeded = () => {
    return AsyncStorage.getItem(FLASHCARD_STORAGE_KEY)
        .then(results => {
            if (!results) {
                AsyncStorage.setItem(
                    FLASHCARD_STORAGE_KEY,
                    JSON.stringify({})
                )
            }
        });
};

export const saveCard = (id, answer, question) => {
    return AsyncStorage.getItem(FLASHCARD_STORAGE_KEY)
        .then(results => {
            const data = JSON.parse(results);
            data[id].questions.push({
                question,
                answer
            });
            AsyncStorage.setItem(FLASHCARD_STORAGE_KEY, JSON.stringify(data));
        })
}

export const saveDeck = (id, value) => {
    return AsyncStorage.mergeItem(
        FLASHCARD_STORAGE_KEY,
        JSON.stringify(
            {
                [id]: {
                    createDate: new Date(),
                    id,
                    title: value,
                    questions: []
                }
            }
        ),
        () => AsyncStorage.getItem(FLASHCARD_STORAGE_KEY)
            .then(data => console.log("data: ", data))
    );
};

// Notifications

export const checkNotifications = () => {
    return AsyncStorage.getItem(FLASHCARD_NOTIFICATION_KEY);
}

export const clearNotificationsFlag = () => {
    return AsyncStorage.removeItem(FLASHCARD_NOTIFICATION_KEY);
}

export const setNotificationsFlag = () => {
    return AsyncStorage.setItem(FLASHCARD_NOTIFICATION_KEY, JSON.stringify(true))
}
