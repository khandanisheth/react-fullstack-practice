
import 'react-toastify/dist/ReactToastify.css';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container } from 'react-bootstrap';

export default function R_19_ReactToastify() {

  // 🔔 Toast Functions
  const showToast = (type, msg) => {
    switch (type) {
      case 'success':
        toast.success(msg);
        break;
      case 'error':
        toast.error(msg);
        break;
      case 'info':
        toast.info(msg);
        break;
      case 'warning':
        toast.warning(msg);
        break;
      default:
        toast(msg);
    }
  };

  return (
    <Container className="text-center mt-4">
      <button className="btn btn-primary m-1" onClick={() => showToast('info', 'Primary Notification')}>Primary</button>
      <button className="btn btn-secondary m-1" onClick={() => showToast('info', 'Secondary Notification')}>Secondary</button>
      <button className="btn btn-success m-1" onClick={() => showToast('success', 'Success Notification')}>Success</button>
      <button className="btn btn-danger m-1" onClick={() => showToast('error', 'Danger Notification')}>Danger</button>
      <button className="btn btn-warning m-1" onClick={() => showToast('warning', 'Warning Notification')}>Warning</button>
      <button className="btn btn-info m-1" onClick={() => showToast('info', 'Info Notification')}>Info</button>
      <button className="btn btn-light m-1" onClick={() => showToast('info', 'Light Notification')}>Light</button>
      <button className="btn btn-dark m-1" onClick={() => showToast('info', 'Dark Notification')}>Dark</button>
      <button className="btn btn-link m-1" onClick={() => showToast('info', 'Link Notification')}>Link</button>

      {/* Notification Container is important */}
      <ToastContainer />
    </Container>
  );
}



// ye old USe me aathi he 

// import React from 'react';
// import 'react-notifications/lib/notifications.css';
// import { NotificationContainer, NotificationManager } from 'react-notifications';
// import { Container } from 'react-bootstrap';

// export default function R_19_ReactNotifications() {

//     // 🔔 Notification Functions
//     const showNotification = (type, message) => {
//         switch (type) {
//             case 'info':
//                 NotificationManager.info(message);
//                 break;
//             case 'success':
//                 NotificationManager.success(message, 'Success');
//                 break;
//             case 'warning':
//                 NotificationManager.warning(message, 'Warning');
//                 break;
//             case 'error':
//                 NotificationManager.error(message, 'Error');
//                 break;
//             default:
//                 NotificationManager.info(message);
//         }
//     };

//     return (
//         <Container className="text-center mt-4">
//             <button className="btn btn-primary m-1" onClick={() => showNotification('info', 'Primary Notification')}>Primary</button>
//             <button className="btn btn-secondary m-1" onClick={() => showNotification('info', 'Secondary Notification')}>Secondary</button>
//             <button className="btn btn-success m-1" onClick={() => showNotification('success', 'Success Notification')}>Success</button>
//             <button className="btn btn-danger m-1" onClick={() => showNotification('error', 'Danger Notification')}>Danger</button>
//             <button className="btn btn-warning m-1" onClick={() => showNotification('warning', 'Warning Notification')}>Warning</button>
//             <button className="btn btn-info m-1" onClick={() => showNotification('info', 'Info Notification')}>Info</button>
//             <button className="btn btn-light m-1" onClick={() => showNotification('info', 'Light Notification')}>Light</button>
//             <button className="btn btn-dark m-1" onClick={() => showNotification('info', 'Dark Notification')}>Dark</button>
//             <button className="btn btn-link m-1" onClick={() => showNotification('info', 'Link Notification')}>Link</button>

//             {/* Important Notification Container */}
//             <NotificationContainer />
//         </Container>
//     );
// }



// //First Step 1 : npm i react-notifications install ke
// // First Step 2 : import 'react-notifications/lib/notifications.css'; Css Import  ke
// // First Step 1 : <NotificationContainer/> ese puri body me khi bhi lagao
// // First Step 1 : npm i react-notifications install ke 