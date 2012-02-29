# What I Learned From Underscore.js

## Collection

### each

1. The method immediately checks if object is null, this certainly makes the method more resilient.
2. To allow for "array likes" it checks for object.length === +object.length. The +object.length is a type coersion which when done against undefined will return NaN. And thus it will not pass the equality test, where as any numeric value will. 
3. If the equality test after type coersion fails the passed in collection is assumed to be a collection and is iterated as such.
4. Deferring to the native when possible.
5. It appears you can break out of a each by returning an empty object.