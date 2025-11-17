import { X } from 'lucide-react';
import Avatar from './Avatar.jsx';

const ChatHeader = ({ onClose }) => {
  return (
    <div className="bg-willo-primary text-white p-4 flex justify-between items-center shadow-md">
      <div className="flex items-center">
        <Avatar size="small" />
        <h2 className="font-semibold text-lg ml-2">Ask <span className='text-yellow-400'>Willow</span></h2>
      </div>
      <button 
        onClick={onClose}
        className="p-1 rounded-full hover:bg-willo-dark transition-colors focus:outline-none focus:ring-2 focus:ring-white"
        aria-label="Close chat"
      >
        <X size={24} />
      </button>
    </div>
  );
};

export default ChatHeader;