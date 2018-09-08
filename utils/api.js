import {AsyncStorage} from 'react-native';

export const saveDeck = (id, value) => {
    return AsyncStorage.setItem(
        id,
        JSON.stringify(
            {
                title: value,
                questions: []
            }
        )

    );
}
