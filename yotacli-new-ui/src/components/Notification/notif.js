import React, { useState } from 'react';
import './notif.css'; // Make sure to import your CSS file



const Notification = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
 
  const toggleNotificationPanel = () => {
    setIsOpen(!isOpen);
  };
 
  const handleNotificationClick = () => {
    // Simulate handling a notification click
    console.log('Notification clicked!');
    setUnreadCount(0); // Clear unread count after handling
  }
 
  return (
    <div className="notification-container">
      <button className="notification-button" onClick={toggleNotificationPanel}>
        <i className="fa-regular fa-bell"></i>
        {/* Badge icon implementation */}
        {unreadCount > 0 && (
          <span className="badge">
            {unreadCount}
          </span>
        )}
        <span className="icon-wrapper-bg bg-danger" style={{marginTop: "14px",marginLeft:"-32px"}} />
      </button>
      {isOpen && (
      <div className="notification-panel" onClick={handleNotificationClick}style={{ padding: 20 ,height:200,width:250}}>
                {/* Render your notifications here */}
      <div className="notification" onClick={handleNotificationClick}>
      <button className="mark-read" onClick={handleNotificationClick}style={{margin:2}}>
         1 Sample notification new test series added  
       </button> 
      </div>
        <div className="notification" onClick={handleNotificationClick}>

           <button className="mark-read"  onClick={handleNotificationClick}style={{margin:2}}>
           2 Sample notification new test series added 
          </button> 
        </div>
        <div className="notification" onClick={handleNotificationClick}>

        <button className="mark-read"  onClick={handleNotificationClick}style={{margin:2}}>
        3 Sample notification new test series added      
        </button> 
        </div>
                  
        </div>
              )}
        </div>
          );
        };
 
export default Notification;