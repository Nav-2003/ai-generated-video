'use client'; // only needed in Next.js if interactivity is used

import {PanelsTopLeft, FileVideo, ShieldPlus, CircleUser } from 'lucide-react'; // Optional: icons
import Link from 'next/link'; // remove if not using Next.js
import { usePathname } from 'next/navigation';

const Sidebar = () => {
    const path=usePathname();
    console.log(path);
  return (
    <aside className="hidden md:block h-screen w-64 bg-gray-900 text-white flex flex-col p-5 space-y-6">
      <div className="text-2xl font-bold text-white">
        AI Short Vid
      </div>
      <nav className="flex flex-col space-y-4">
        <Link href="/dashboard" className={`hover:bg-gray-700 px-4 py-2 rounded flex items-center space-x-2 ${path==='/dashboard'&&'bg-gray-700'}`}>
          <PanelsTopLeft size={18} />
          <span>Dashboard</span>
        </Link>
        <Link href="dashboard/create-new" className={`hover:bg-gray-700 px-4 py-2 rounded flex items-center space-x-2 ${path==='/dashboard/create-new'&&'bg-gray-700'}`}>
          <FileVideo size={18} />
          <span>Create New</span>
        </Link>
        <Link href="/upgrade" className={`hover:bg-gray-700 px-4 py-2 rounded flex items-center space-x-2 ${path==='/upgrade'&&'bg-gray-700'}`}>
          <ShieldPlus size={18} />
          <span>Upgrade</span>
        </Link>
        <Link href="/account" className={`hover:bg-gray-700 px-4 py-2 rounded flex items-center space-x-2 ${path==='/account'&&'bg-gray-700'}`}>
          <CircleUser size={18} />
          <span>Account</span>
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
