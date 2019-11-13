# Tails
Like Rails, but TypeScript.

## Installation & Usage
This is a template repository - you should be able to use the "Use this template" button on GitHub to generate a repository based on this one;
that'll give you the basic structure for a Tails application. Then:

 - **Name your application**  
   You need to do this in a few places:

    * In `package.json`, in the `name` field
    * In `database.sql`, for your database name
    * In `views/layouts/application.ejs`, if you want to include it in your application title

 - **Install dependencies**  
   A simple `npm i` should do the trick.

 - **Write your app**  
   Fairly self-explanatory. There's a few things in particular you'll need to do:

    * Write a database schema in `database.sql`
    * Create models to match your schema in `models/` (you may want to load them into `console.ts` too)
    * Write some controllers in `routes/` and link them up in `config/routes.ts`
    * Design your app's skeleton, and drop it in `views/layouts/application.ejs`
    * Design some views to go with your controllers and put them in `views/`
    * Make it look nice by putting some SCSS into `public/stylesheets/style.scss`
    * Make it work seamlessly with some JavaScript in `public/javascripts/application.js`

 - **Run your app**  
   In development mode, with all the logging turned on and auto-restart enabled (more on that later), that's:

       npm run dev

   In production (you guessed it), it's:

       npm run prod

## Developing with Tails
The NPM scripts included with Tails make use of nodemon to make your development easier. While you're developing, run `npm-watch` in a terminal;
that'll keep an eye on your views, assets, and your server-side code, and recompile them or minify them as necessary, and drop the results into
the `build/` directory.

If you're running your server with `npm run dev`, that also uses nodemon, which will pick up on the new code in `build/` and restart your app
for you.

In production, use `npm run prod` to turn auto-restart and most of the STDOUT logging off.

## License
[MIT licensed](https://github.com/ArtOfCode-/tails-template/blob/master/LICENSE.md)

## Contributing
Tails is still rough around the edges. If you make improvements while you're developing with it, please feel free to contribute your changes back
here. Your contributions will be licensed under the MIT license, in line with the rest of Tails.