# Maldonado Theme

**Maldonado** is a free blog theme made with simplicity in mind. Just the basics pretty much.  
It's made for the awesome [Statamic](http://statamic.com/) CMS, so to use it in the wild you do need to [buy a license from their website](https://store.statamic.com/).

The **Maldonado** theme would work nicely as a simple journal/blog or maybe a small website and it's easily customized if you know your way around SASS and HTML (and Statamic).

##Install

- Copy over files from `_config/fieldsets`.
- Copy over files from `_content/`
- Copy over files from `_themes/`
- Rename the `/css/maldonado.css` & `/js/maldonado.js` files to match your theme name.  

#### Placeholder/Dummy Data (optional)

- (Optional) Copy over placeholder/example assets from `assets`.

**Note:** For the theme to work correctly the following files can't be deleted. 
**sitemap.md** in `_content`.  
**feed.md** in `_content/blog`.  
**sitemap.html & feed.html** in the themes `layouts` folder.

## Features

- Works in all modern browsers & IE9 (and up)
- Simple SEO Settings - Meta Name, Description
- RSS Feed. located at: `"/blog/rss"` (same as acadia theme)
- Site Map  located at: `"/sitemap"`
- Comes with seven color schemes: Default, Yellow, Pink, Blue, Teal, Red & Green.
- Customizable footer.
- Add your own logo

## Templates
**Maldonado** comes with the following templates:

##### Default Page
This is the standard or default page. Use this for simple static pages like About or Contact.

##### Blog Pages - two column layout & three column layout.
The blog listing page. Maldonado uses the `"/blog"` for entries. You could however probably set it up so that the blog listing is on `"/"` with some tweaking.

##### Home Page  
A basic Home or Landing page. It's got some optional text fields as well as the latest two blog posts displayed.

#####  Archives Page  
A simple archives page. Lists entries by year.

#####  Categories Page  
A super simple categories page. Just lists category names and number.


## Add-Ons

**Maldonado** makes use of two free add-ons. For the full feature experience both these add-ons **must** be added.
It is possible to skip the `Disqus` add-on if you don't want to add comments, but the `Globals` is **pretty much a must**.

**Globals** (by Jason Varga.)
Needed for global settings, such as **site logo**, **footer content**, **Color Schemes** and several other **global settings**  
Download/clone & install instructions - [https://github.com/pixelfear/Statamic-Globals](https://github.com/pixelfear/Statamic-Globals)

**Disqus** (by Jack McDade.)  
Easy way to add Disqus-powered comments  
Download/clone & install instructions - [https://github.com/statamic/Plugin-Disqus](https://github.com/statamic/Plugin-Disqus)

**Note:** All that is needed for disqus comments to work is to **add the "add-on" to the "_add-ons folder"**.
The rest, such as adding your `Disqus shortname`, and `enabling comments` is managed through the `theme.yaml` file.  
**To enable comments:** In `_themes/maldonado/theme.yaml` Swap the **"changeme"** with your own Disqus shortname and change **show_comments** to "yes".  
Done

## Colophon

Based on (a slightly modified) [Html5 Boilerplate](https://html5boilerplate.com/)  
Uses [Normalize](https://necolas.github.io/normalize.css/)

All this goodness compiled with [Codekit](https://incident57.com/codekit/)  
(But you could mos def grunt/gulp/broccoli-fy all tasks. I might be persuaded to look into it if there is a need.)
A config.codekit file as well as a "bower_components" folder is included in the repo. These are needed for Codekit and can be removed if you don't use it.

#### Styling
Built with SASS (scss)  
Uses the [Jeet Grid System](http://jeet.gs/) and  
[breakpoint-sass](http://breakpoint-sass.com/) - for simple breakpoint handling

#### JS
jQuery  
[Masonry](https://github.com/desandro/masonry) - For some bloglisting pizzaz.

#### Libs & Stuff
[animate.css](https://daneden.github.io/animate.css/)  
**Google Fonts** - (Playfair Display & Open Sans)  
[Fontawesome](http://fortawesome.github.io/Font-Awesome/) - icons

#### CDN

Maldonado uses cdns for **animate**, **google fonts**, **fontawesome**, **jQuery** & **masonry**.
So you could easily delete or switch out libs just by removing the link tags.

## Usage

Do what you wish with this theme.  
Want to use it for your personal blog? **Cool!**. Like to use it as a starter theme? **Great!**. Want to chop it up, add/remove stuff and use it in client work? **sure, go for it!**  
Feel free to use this theme anyway you want.
You could, if you wanted, refer to this theme/repo or me on you page somewhere, you don't have to but it would be cool if you did.

I would love to hear if you use it for something somewhere & and shoot me an email if you find any bugs.

[hello@galacticrobot.com](hello@galacticrobot.com)

## Some Screenshots

[![](/assets/home.jpg)](Home)

[![](/assets/post.jpg)](Post)

[![](/assets/colors.jpg)](Colors)

[![](/assets/archives.jpg)](Archives)

[![](/assets/categories.jpg)](Categories)
