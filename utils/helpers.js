import { Notifications, Permissions } from 'expo';

import {checkNotifications, setNotificationsFlag} from './api';

const createNotification = () => {
    return {
        title: 'Mobile Flashcards',
        body: "Don't forget to quiz yourself today!",
        ios: {
            sound: true,
        }
    }
};

const handlePermissions = () => {
    return Permissions.askAsync(Permissions.NOTIFICATIONS);
};

const setNotificationSchedule = () => {
    let tomorrow = new Date();

    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(18);
    tomorrow.setMinutes(0);
    tomorrow.setSeconds(0);

    return {
        time: tomorrow,
        repeat: 'day',
    };
}

export const createId = () => {
    return Math.random().toString(36).substring(2) + (new Date()).getTime().toString(36);
};

export const setLocalNotification = async() => {
    const hasNotification = await checkNotifications();

    if (hasNotification) { return };

    const {status} = await handlePermissions();

    if (status === 'granted') {
        Notifications.cancelAllScheduledNotificationsAsync();

        Notifications.scheduleLocalNotificationAsync(
            createNotification(),
            setNotificationSchedule()
        );

        setNotificationsFlag();
    }
};
