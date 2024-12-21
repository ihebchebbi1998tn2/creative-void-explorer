import axios from 'axios';

interface LocationData {
  ip: string;
  city: string;
  country: string;
}

interface VisitorData {
  page_visitors: string;
  city_visitors: string;
  country_visitors: string;
  ip_visitors: string;
  date_visitors: string;
}

export const trackVisitor = async (pageName: string): Promise<void> => {
  try {
    console.log('Starting visitor tracking for page:', pageName);
    
    const ipResponse = await axios.get('https://api.ipify.org?format=json');
    const ip = ipResponse.data.ip;
    console.log('Visitor IP obtained:', ip);
    
    const locationResponse = await axios.get(`https://ipinfo.io/${ip}/json`);
    const locationData: LocationData = {
      ip: ip,
      city: locationResponse.data.city || 'Unknown',
      country: locationResponse.data.country || 'Unknown'
    };
    console.log('Location data obtained:', locationData);

    const visitorData: VisitorData = {
      page_visitors: pageName,
      city_visitors: locationData.city,
      country_visitors: locationData.country,
      ip_visitors: locationData.ip,
      date_visitors: new Date().toISOString().split('T')[0]
    };
    
    // Send tracking data
    await axios.post('https://respizenmedical.com/fiori/track_visitor.php', visitorData);
    console.log('Visitor tracking data sent successfully');
  } catch (error) {
    console.error('Error tracking visitor:', error);
  }
};