import React, { useState } from 'react';
import Topbar from '../common/topbar/Topbar.jsx'
import Sidebar from '../common/sidebar/Sidebar.jsx'
import search from '../common/search/Search.jsx'
import '../../App.css'
import '../UpdateClaim/UpdateForm.css'
import './NotifyForm.css'


import { Link } from 'react-router-dom';

const NotifyForm = () => {
    const [category, setCategory] = useState('');
    const [receivertype, setReceiverType] = useState('');
    const [receiver, setReceiver] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [dateSchd, setDateSchd] = useState('');
    const [timeSchd, setTimeSchd] = useState('');

    return (

        <body>

          <div>
            <Topbar />
          </div>
          <div className="main-dom">
          <div>
            <Sidebar />
          </div>
          <div className="md">
          <div className="max-w-4xl mx-auto bg-white dark:bg-white-700 shadow-lg p-6 rounded-lg">
            <h2 className="text-3xl dark:text-zinc-900 font-bold mb-10">Create New Notification</h2>
            <form>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-m font-medium text-zinc-700 dark:text-zinc-900">Category</label>
                  <select className="mt-1 block w-full py-2 px-3 border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-black-500 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                    <option>Custom</option>
                    <option>General</option>
                    <option>Urgent</option>
                  </select>
                </div>
                <div>
                  <label className="block text-m font-medium mb-5 text-zinc-700 dark:text-zinc-900 ml-6">Priority</label>
                  <div className="mt-1">
                    <label className="inline-flex items-center ml-6">
                      <input type="radio" name="priority" value="high" className="text-indigo-600 form-radio" />
                      <span className="ml">High</span>
                    </label>
                    <label className="inline-flex items-center ml-6">
                      <input type="radio" name="priority" value="medium" className="text-indigo-600 form-radio" />
                      <span className="ml">Medium</span>
                    </label>
                    <label className="inline-flex items-center ml-6">
                      <input type="radio" name="priority" value="low" className="text-indigo-600 form-radio" />
                      <span className="ml">Low</span>
                    </label>
                  </div>
                </div>
                <div>
                  <label className="block text-m font-medium text-zinc-700 dark:text-zinc-900">Receiver Type</label>
                  <select className="mt-1 block w-full py-2 px-3 border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-black-500 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                    <option>Doctor</option>
                    <option>Nurse</option>
                    <option>Administrator</option>
                  </select>
                </div>
                <div>
                  <label className="block text-m font-medium mb-5 text-zinc-700 dark:text-zinc-900 ml-6">Notification Type</label>
                 <div className="mt-1">
                    <label className="inline-flex items-center ml-6">
                      <input type="radio" name="priority" value="high" className="text-indigo-600 form-radio" />
                      <span className="ml">Scheduled</span>
                    </label>
                    <label className="inline-flex items-center ml-6">
                      <input type="radio" name="priority" value="medium" className="text-indigo-600 form-radio" />
                      <span className="ml">Instant</span>
                    </label>
                 </div>
                </div>
                <div className="col-span-2">
                  <label className="block text-m font-medium text-zinc-700 dark:text-zinc-900">Receiver</label>
                  <input type="text" placeholder="Dr. Farsith Fawzer" className="mt-1 block w-full py-2 px-3 border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-black-500 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                </div>
                <div className="col-span-2">
                  <label className="block text-m font-medium text-zinc-700 dark:text-zinc-900">Subject</label>
                  <input type="text" className="mt-1 block w-full py-2 px-3 border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-black-500 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                </div>
                <div className="col-span-2">
                  <label className="block text-m font-medium text-zinc-700 dark:text-zinc-900">Message</label>
                  <textarea rows="4" className="mt-1 block w-full py-2 px-3 border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-black-500 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></textarea>
                </div>
              </div>
              <div className="flex justify-end mt-4">
                <button type="cancel" className="bg-red-500 text-white px-4 py-2 rounded-md mr-2">Clear</button>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Send</button>
              </div>
            </form>
          </div>
          </div>
          </div>
        </body>


    );

}

export default NotifyForm;