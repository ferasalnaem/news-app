#!/bin/sh

# Generate the env.js file with the runtime backend URL
echo "window.env = { backendUrl: \"${BACKEND_URL}\" };" > /usr/share/nginx/html/env.js

# Start Nginx
exec "$@"
