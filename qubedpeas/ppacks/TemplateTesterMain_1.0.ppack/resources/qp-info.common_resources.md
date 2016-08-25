Common Resource Files
=====

## What is this for?
Let's make this very clear: Any resources that you need to "direct link"
to in this Patch should be here. You should not assume that a _[pod]/resources_
location will work. If you have to point to or link to a resource directly
(in code or HTML) then put it here and use the _../../Common.ppod/resources/_
type of accessor path.

## Are there any special rules regarding this?
When you point to these resources in code use the special *QPResourceURL* function:
 > QPResourceURL("../Common.ppod/resources/myResource.here")

This will be required when you pack up your work to distribute later.

## Will these files pack?
They sure will. Everything in the _/resources/_ folder will be packed, so
these files are no different.

## Design thoughts
Resource management is one of the toughest problems surrounding web-distribution.
If you are here, you likely already know that. To make sure you're safe in this regard
simply house ALL resources that must be direct linked in this folder (or sub folders).
Then use the special *QPResourceURL* function mentioned above. It will do all the
heavy lifting once you are packed up.