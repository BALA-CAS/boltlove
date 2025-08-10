# Covai Accounting Services - Google Business Integration

## Google Business Reviews Integration

This website includes a comprehensive Google Business integration system that allows you to display live reviews from your Google Business profile.

### Features

- **Live Review Display**: Automatically fetch and display reviews from Google Business
- **Real-time Updates**: Reviews refresh automatically every hour
- **Secure Integration**: API keys stored securely with proper validation
- **Fallback System**: Graceful fallback to demo data if API is unavailable
- **Mobile Responsive**: Reviews display beautifully on all devices

### Setup Instructions

#### 1. Google Cloud Console Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the **Places API** in the API Library
4. Create an API key in the Credentials section
5. Restrict the API key to:
   - **API restrictions**: Places API only
   - **Application restrictions**: HTTP referrers (add your domain)

#### 2. Find Your Place ID

1. Visit [Google Place ID Finder](https://developers.google.com/maps/documentation/places/web-service/place-id)
2. Search for your business: "Covai Accounting Services, Coimbatore"
3. Copy the Place ID (starts with "ChIJ...")

#### 3. Configure Integration

1. Navigate to the Google Business Integration page on your website
2. Click "Setup Integration"
3. Enter your API key and Place ID
4. Save the configuration

### API Endpoints

The integration uses a Supabase Edge Function to securely fetch reviews:

```
GET /functions/v1/google-reviews?apiKey=YOUR_API_KEY&placeId=YOUR_PLACE_ID
```

### Environment Variables

For production deployment, set these environment variables:

```bash
GOOGLE_PLACES_API_KEY=your_api_key_here
GOOGLE_PLACE_ID=your_place_id_here
```

### Security Considerations

- API keys are validated before use
- CORS headers properly configured
- Rate limiting implemented
- Secure storage of configuration
- Fallback to demo data if API fails

### Troubleshooting

#### Common Issues:

1. **API Key Invalid**: Ensure the API key has Places API enabled
2. **Place ID Not Found**: Verify the Place ID is correct for your business
3. **CORS Errors**: API calls are made through edge functions to avoid CORS
4. **Rate Limiting**: Google Places API has usage limits - monitor your quota

#### Error Handling:

The system includes comprehensive error handling:
- Invalid API key detection
- Network failure recovery
- Graceful fallback to cached/demo data
- User-friendly error messages

### Customization

You can customize the review display by modifying:

- `src/components/LiveGoogleReviews.tsx` - Main review component
- `src/components/GoogleBusinessSetup.tsx` - Setup interface
- `supabase/functions/google-reviews/index.ts` - API integration

### Support

For technical support with Google Business integration:
- Check the browser console for detailed error logs
- Verify API key permissions in Google Cloud Console
- Ensure Place ID matches your business listing
- Contact support if issues persist

---

**Note**: The current implementation includes demo data that will be replaced with live reviews once you configure your Google Business integration.