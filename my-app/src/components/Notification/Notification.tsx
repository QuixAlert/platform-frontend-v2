import { notification } from "antd";
import { CheckCircleOutlined, CloseCircleOutlined, InfoCircleOutlined } from "@ant-design/icons";
import { NotificationInstance } from "antd/es/notification/interface";

export enum NotificationType {
    ALERT,
    SUCCESS,
    ERROR,
}

export type Notification = {
    message: string;
    description: string;
    type: NotificationType;
};

const notificationMapper: { [key in NotificationType]: React.FC } = {
    [NotificationType.ALERT]: InfoCircleOutlined,
    [NotificationType.SUCCESS]: CheckCircleOutlined,
    [NotificationType.ERROR]: CloseCircleOutlined,
};

export const showNotification = (notification: Notification, api: NotificationInstance) => {
    const IconComponent = notificationMapper[notification.type];
    api.open({
        message: notification.message,
        description: notification.description,
        icon: <IconComponent />,
    });
};