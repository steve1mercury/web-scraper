# web-scraper

This Node.Js appliction copies Index Page html from up to 10 domains to local subdirectory. The extracted files are saved in the /fetchdata underneath the web-scraper project root

## (Note: must have NPM and Node installed).

# Terminal Mode
Run in Node Terminal by executing command : npm run ghtml
Check console log for name of temporary subdirectory under /fetchdata
Review extracted html files in /fetchdata/{temp subdirectory name}
To run via a browser

# Browser Mode
Start server by Running command: npm start
Then open browser to address http://localhost:3000
Enter URL's (FQDN) and click Submit. After processing, the location of the Index files will be displayed.
