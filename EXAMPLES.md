# Example Usage Scenarios

This file contains example prompts and use cases for the OpenCode Browser MCP Plugin.

## Basic Examples

### 1. Simple Navigation

```
Go to https://github.com and show me the trending repositories
```

### 2. Search and Extract Information

```
Navigate to https://news.ycombinator.com and list the top 10 post titles
```

### 3. Multi-step Navigation

```
1. Go to https://github.com
2. Click on the search bar
3. Search for "opencode"
4. Click on the first result
5. Tell me the number of stars the repository has
```

## Form Automation Examples

### 1. Simple Form Filling

```
Go to https://example.com/contact-form and fill out:
- Name: Test User
- Email: test@example.com
- Subject: Inquiry
- Message: This is an automated test
Do not submit yet, just fill the fields.
```

### 2. Form Submission with Verification

```
Navigate to the signup page at https://example.com/signup
Fill in the registration form with test data
Submit the form
Take a screenshot of the result
```

## Web Scraping Examples

### 1. Product Price Monitoring

```
Visit https://example.com/product/123
Extract the product name, price, and availability status
```

### 2. Table Data Extraction

```
Go to https://example.com/data-table
Extract all the data from the table on the page
Format it as a CSV
```

## Testing Examples

### 1. UI Testing

```
Go to https://my-app.com
Test the login flow with these credentials:
- Username: testuser
- Password: testpass123

Verify that:
1. The login form accepts the credentials
2. After login, the dashboard page loads
3. The user's name appears in the header
```

### 2. Responsive Design Testing

```
Visit https://my-website.com
Resize the browser to mobile size (375x667)
Take a screenshot
Resize to desktop (1920x1080)
Take another screenshot
Compare the layouts
```

## E-commerce Examples

### 1. Shopping Flow

```
Navigate to https://example-shop.com
Search for "laptop"
Click on the first result
Add it to cart
Go to cart
Tell me the total price
```

### 2. Price Comparison

```
Check the price of "iPhone 15" on these sites:
1. https://store1.com
2. https://store2.com
3. https://store3.com

Create a comparison table
```

## Content Management Examples

### 1. Blog Post Verification

```
Visit my blog at https://myblog.com
Verify that the latest post titled "My New Article" is visible
Check if the publish date is correct
Take a screenshot of the post
```

### 2. Social Media Posting

```
Go to https://socialmedia.com
Log in (credentials from .env file)
Navigate to create new post
Fill in the post content: "Hello from OpenCode!"
Add the image from ./assets/post-image.jpg
Schedule for tomorrow at 9 AM
```

## Monitoring Examples

### 1. Website Uptime Check

```
Visit https://my-production-site.com
Check if the page loads successfully
Verify that the login button is visible
If any errors occur, take a screenshot and save the console logs
```

### 2. Performance Monitoring

```
Navigate to https://my-app.com
Measure the page load time
Check for any console errors
Capture network requests
Report if load time exceeds 3 seconds
```

## Advanced Examples

### 1. Multi-tab Workflow

```
Open three tabs:
1. https://github.com - find the OpenCode repository
2. https://docs.opencode.ai - open the plugins documentation
3. https://browsermcp.io - open the Browser MCP docs

Switch between tabs and extract key information from each
```

### 2. Dynamic Content Interaction

```
Go to https://infinite-scroll-example.com
Scroll down to load more content
Repeat until you've loaded 50 items
Extract the titles of all items
```

### 3. File Download Automation

```
Navigate to https://reports.example.com
Log in with credentials
Go to the Reports section
Download the latest monthly report
Verify the download completed successfully
```

## Debugging Examples

### 1. Console Error Detection

```
Visit https://my-app.com/problematic-page
Open the browser console
Check for any JavaScript errors
Take a screenshot if errors are found
Report all errors with their stack traces
```

### 2. Network Request Analysis

```
Go to https://my-api-app.com
Trigger the data load action
Capture all network requests made
Filter for failed requests (status >= 400)
Report the failed requests with details
```

## Integration with OpenCode Features

### 1. Combined with Code Generation

```
Visit the competitor website at https://competitor.com
Analyze their homepage layout
Based on what you see, generate React components that replicate their design
Save the components to ./src/components/
```

### 2. Documentation-Driven Development

```
Go to https://docs.example-api.com/authentication
Read the authentication documentation
Generate TypeScript functions that implement the authentication flow
Add proper type definitions based on the API docs
```

## Best Practices for Prompts

1. **Be Specific**: Include exact URLs, selectors, and expected outcomes
2. **Break Down Complex Tasks**: Use numbered steps for multi-step workflows
3. **Add Verification**: Ask for screenshots or confirmations of critical actions
4. **Handle Errors**: Include instructions for what to do if something goes wrong
5. **Use Descriptive Names**: When referring to page elements, use descriptive text rather than CSS selectors when possible

## Tips for Effective Browser Automation

- Start with simple navigation before complex interactions
- Use wait times for pages that load slowly
- Take screenshots at key steps for debugging
- Save extracted data to files for processing
- Test on development environments before production
