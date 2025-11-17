import Avatar from './Avatar.jsx';

const ChatMessages = ({ messages, isTyping, messagesEndRef }) => {
  const groupedMessages = messages.reduce((groups, message) => {
    const lastGroup = groups[groups.length - 1];
    
    if (!lastGroup || lastGroup.type !== message.type) {
      groups.push({
        type: message.type,
        messages: [message]
      });
    } else {
      lastGroup.messages.push(message);
    }
    
    return groups;
  }, []);

  return (
    <div className="space-y-4">
      {groupedMessages.map((group, groupIndex) => (
        <div key={groupIndex} className={`flex ${group.type === 'user' ? 'justify-end' : 'justify-start'}`}>
          {group.type === 'bot' && <div className="mr-2 mt-1"><Avatar size="tiny" /></div>}
          
          <div className={`space-y-2 max-w-[80%]`}>
            {group.messages.map((message, messageIndex) => (
              <div 
                key={message.id} 
                className={`
                  p-3 rounded-lg animate-fade-in
                  ${group.type === 'user' 
                    ? 'bg-willo-primary text-white rounded-tr-none' 
                    : 'bg-gray-100 text-gray-800 rounded-tl-none'}
                `}
              >
                {message.text}
                {messageIndex === group.messages.length - 1 && (
                  <div className={`text-xs mt-1 ${group.type === 'user' ? 'text-willo-light' : 'text-gray-500'}`}>
                    {message.timestamp}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
      
      {isTyping && (
        <div className="flex justify-start">
          <div className="mr-2 mt-1"><Avatar size="tiny" /></div>
          <div className="bg-gray-100 p-3 rounded-lg rounded-tl-none inline-block">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse-subtle"></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse-subtle" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse-subtle" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </div>
        </div>
      )}
      
      <div ref={messagesEndRef} />
    </div>
  );
};

export default ChatMessages;