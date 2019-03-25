ng build poc-elements --prod --output-hashing none --single-bundle true
copy dist/poc-elements/main.js demo
copy dist/poc-elements/es2015-polyfills.js demo
copy .\dist\poc-elements\scripts.js demo
copy .\node_modules\zone.js\dist\zone.min.js demo

copy dist/poc-elements/main.js ../poc-elements-react/public/assets
copy dist/poc-elements/es2015-polyfills.js ../poc-elements-react/public/assets
copy .\dist\poc-elements\scripts.js demo
copy .\node_modules\zone.js\dist\zone.min.js ../poc-elements-react/public/assets
