"use client";

import { useState } from "react";

export default function Dashboard(): JSX.Element {
  const [header, setHeader] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [addButton, setAddButton] = useState(false);
  const [addImage, setAddImage] = useState(false);

  return (
    <div className="p-6 space-y-6 text-black">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-white rounded-xl shadow space-y-4">
          <h2 className="font-semibold text-lg">Send push notifications</h2>
          <input
            type="text"
            placeholder="Header"
            value={header}
            onChange={(e) => setHeader(e.target.value)}
            className="w-full border p-2 rounded"
          />
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border p-2 rounded"
          />
          <textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full border p-2 rounded h-24"
          />
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={addButton}
              onChange={() => setAddButton(!addButton)}
            />
            <label>Add a button</label>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={addImage}
              onChange={() => setAddImage(!addImage)}
            />
            <label>Add an image</label>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-full">
            Send notification to all users
          </button>
        </div>
        <div className="p-6 bg-white rounded-xl shadow">
          <h2 className="font-semibold text-lg text-gray-600 mb-4">
            In-app notification sample
          </h2>
          <div className="p-4 border rounded-xl">
            <p className="text-blue-600 font-bold uppercase">
              {header || "HEADER"}
            </p>
            <p className="font-medium text-sm text-gray-700">
              {title || "Title"}
            </p>
            <p className="font-semibold text-black mt-1">
              {message || "Message"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
