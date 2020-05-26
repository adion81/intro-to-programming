# Intro To Programming - Coding Dojo

<img src="https://images.squarespace-cdn.com/content/v1/55085720e4b0813599644fae/1498146542463-REMHTKUIMRSCKC11K9PT/ke17ZwdGBToddI8pDm48kArBMn8fAWELGenCydTjAbxZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpwDoVfJBUjrBd4N4KbRpQUq5mg9_a8rivMlNvj9QRlugGYc1J3inpxLnXdbVi1x-yQ/image-asset.png" alt="Coding Dojo" width="400px"/>

## Request Response Cycle

<img src="https://vectr.com/adion81/c8R4t9Gpm.svg?width=500&height=280&select=c8R4t9Gpmpage0" alt="request response"  width="500px"/>

<ol>
    <li>User types url into browser.</li>
    <li>Http request to the server.</li>
    <li>Server gathers data and files</li>
    <li>Server responses files and data to browser</li>
    <li>Browser displays data and files.</li>
</ol>
<details>
    <summary>COMMON HTTP VERBS</summary>
    <ul>
        <li>GET - Gets Data</li>
        <li>POST - Creates Data</li>
        <li>PUT - Updating Data</li>
        <li>PATCH - Updating Data</li>
        <li>DELETE - Deleting Data</li>
    </ul>
</details>

## HTML

Hyper-Text Markup Language<br>
<br>
Used to organize and display content on the browser.

<details>
    <summary>3 Main Parts to HTML</summary>
    <ul>
        <li>html - defines the file as an html document.</li>
        <li>head - contains html,links, and info about the document</li>
        <li>body - contains html we see on the browser</li>
    </ul>
</details>

### Parent - Child - Sibling
HTML tags can either live next to each other `Siblings`<br>
Or they can live inside one another `Parent/Child`<br>

```html
    <html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="style.css">
        <title>Ill Tempered Penguins</title>
    </head>
    <!-- body and head are sibling tags -->
    <body>
        <!-- h1 is a child of body -->
        <h1>Ill Tempered Penguins</h1>
    </body>
    </html>
```
Every HTML element has an opening tag `<h1>` and a closing tag `</h1>`

### HTML Tags
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Hello World</title>
</head>
<body>
    <!-- heading tags range from h1 to h6 -->
    <h1>Awesome Site</h1>

    <!-- p tags are used to display simple text -->
    <p>This is some information.</p>

    <!-- unorder lists will display a list items with bullet points -->
    <ol>
        <li>First</li>
        <li>Second</li>
        <li>Third</li>
        <li>Fourth</li>
    </ol>

    <!-- forms are used so that the user can send info to the server. -->
    <form action="#" method="POST">
        <label for="name" >Name: </label>
        <input id="name" name="name" type="text" />
        <input type="submit" />
    </form>

    <!-- img tags are used to display images -->
    <img src="image.png" alt="Describe Image">
</body>
</html>
```
HTML tags can have attributes that allow us add additional characteristics.<br>
<br>
img tags have the attribute of `src` to link image files to the tag.

## CSS

## JavaScript


