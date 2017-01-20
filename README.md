# Summary

A tiny helper package to help users play with HTML templating and
Sass for the first time.

# Installation

    npm install -g justkeep-template

# Usage

Call `justkeep-template` inside any folder to set up the files, and then `npm
install` to prepare the tools that will render your partials and templates out.

Write your static website inside `src/` as you normally would, but with EJS
templates and Sass stylesheets. Prefix the filenames of EJS partials with `_`
and write your Sass starting in `css/main.scss`.

Run `gulp` from the root directory whenever you want to  build your site. It
will be output to the `build/` directory, rendering the EJS and Sass and to
everyday HTML and CSS, and copying all other files directly across.

# License

Copyright (2017) Ryan Plant

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
