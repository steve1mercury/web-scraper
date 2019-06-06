# web-scraper

This Node.Js appliction copies Index Page html from up to 10 domains to local subdirectory. The extracted files are saved in the /fetchdata underneath the web-scraper project root

## (Note: must have NPM and Node installed).

# Terminal Mode
1) Run in Node Terminal by executing command : npm run ghtml
2) Check console log for name of temporary subdirectory under /fetchdata
3) Review extracted html files in /fetchdata/{temp subdirectory name}

# Browser Mode
1) Start server by Running command: npm start
2) Then open browser to address http://localhost:3000
3) Enter URL's (FQDN) and click Submit. After processing, the location of the Index files will be displayed.
