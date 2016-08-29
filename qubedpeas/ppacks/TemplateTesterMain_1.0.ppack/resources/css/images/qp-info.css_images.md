CSS Image Files
=====

## What is this for?
This folder is where you put all the image files you reference in CSS.
They are kept here as opposed to the _/resources/images_ folder to
help you keep in mind that these files are specific to CSS.

## Are there any special rules regarding this?
None at all. Any stylesheet can simply reference these files by the
normal _url(images/image.png)_ syntax. CSS files keep relative URL
references themselves, so the URL patterns will adjust accordingly.

## Will these files pack?
They sure will. Everything in the _/resources/_ folder will be packed, so
these files are no different.

## Design thoughts
Any images that will be used in multiple styles would be best moved
into the _Common.ppod/resources/images_ folder, and the rules should
be defined in the _common.css_ file found near there. This will help
you keep track of items used across different Pods.