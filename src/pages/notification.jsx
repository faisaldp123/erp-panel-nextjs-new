import { useState } from "react";
import { Bell } from "lucide-react"; // Lucide icons for a modern look

const NotificationPage = () => {
  // Hardcoded notifications
  const notifications = [
    { id: 1, title: "Welcome to Subharti University", date: "2024-06-20 15:47:27", content: "Subharti University welcomes you to a great learning experience!" },
    { id: 2, title: "New Student Enrolled", date: "2024-02-26 10:30", content: "A new student has been successfully enrolled in the program." },
    { id: 3, title: "Exam Schedule Updated", date: "2024-02-25 15:45", content: "The latest exam schedule is now available on the portal." },
  ];

  // State for selected notification
  const [selectedNotification, setSelectedNotification] = useState(notifications[0]);

  return (
    <div className="flex h-screen">

      {/* Left Section - Notifications List */}
      <aside className="w-64 border rounded-lg shadow-md p-4 hidden md:block">
        <h2 className="text-xl font-bold text-purple-700">Recent Notifications</h2>
        <ul className="mt-4 space-y-2">
          {notifications.map((notification) => (
            <li
              key={notification.id}
              className={`p-3 rounded-md cursor-pointer ${selectedNotification.id === notification.id ? "bg-purple-200 text-purple-900" : "bg-gray-100 text-gray-700"}`}
              onClick={() => setSelectedNotification(notification)}
            >
              <p className="font-medium">{notification.title}</p>
              <small className="text-gray-500 text-xs">{notification.date}</small>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <div className="flex-1 border rounded-lg ms-4 shadow-lg p-6">
        <h1 className="text-3xl font-bold text-purple-700">Notify</h1>

        {/* Display Selected Notification */}
        <div className="mt-4 border p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">{selectedNotification.title}</h2>
          <span className="text-sm text-green-600 bg-green-200 px-2 py-1 rounded-md">{selectedNotification.date}</span>
          <p className="mt-2 text-gray-700">{selectedNotification.content}</p>
        </div>
      </div>

      {/* Right Section - Quick Links */}
      {/* <aside className="w-80 bg-white shadow-lg p-4 hidden md:block">
        <h2 className="text-xl font-semibold text-purple-700">Recent Notifications</h2>
        <div className="mt-4 space-y-4">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className="bg-gray-100 p-3 rounded-md cursor-pointer hover:bg-purple-200"
              onClick={() => setSelectedNotification(notification)}
            >
              <p className="text-sm font-medium">{notification.title}</p>
              <small className="text-gray-500 text-xs">{notification.date}</small>
            </div>
          ))}
        </div>
      </aside> */}
    </div>
  );
};

export default NotificationPage;
