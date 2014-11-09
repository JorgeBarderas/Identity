Identity
========

A simple way to create a user avatar.

The aim is to create a method for obtaining a representative image of the user.

The library returns a div with a background color and initials that never vary all the method invocations with the same input parameters.

Instalation
-----------

1. Copy the minimized file onto your project.
2. Link the file within the HEAD tag.
3. Invoke the "avatar" javascript method and get a div DOM object with the avatar.

Use
---

The "avatar" method has three parameters:
- (string) The name of the avatar. The library uses this parameter to calculate the background color and obtain the initials.
- (string) The size of the avatar. The posibilities are: xx-small, x-small, small, medium, large, x-large, xx-large. This parameter is optional, the default value is "medium".
- (int) The border radius of the avatar. This parameter is optional, the default value is 0.
