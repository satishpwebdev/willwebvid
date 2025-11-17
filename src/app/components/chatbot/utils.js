export const getCurrentTime = () => {
    const now = new Date();
    const options = { 
      hour: '2-digit', 
      minute: '2-digit', 
      hour12: true,
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    };
    return now.toLocaleString('en-US', options);
  };
  
  
  export const formatDate = (date) => {
    const options = { 
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    };
    return new Date(date).toLocaleDateString('en-US', options);
  };