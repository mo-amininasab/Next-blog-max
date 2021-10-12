import React from 'react';

import classes from './Notification.module.css';

interface Props {
  title: string;
  message: string | null;
  status: string;
}

const Notification: React.FC<Props> = ({ title, message, status }) => {
  let statusClasses = '';

  if (status === 'success') {
    statusClasses = classes.success;
  }

  if (status === 'error') {
    statusClasses = classes.error;
  }

  const cssClasses = `${classes.notification} ${statusClasses}`;

  return (
    <div className={cssClasses}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
};

export default Notification;