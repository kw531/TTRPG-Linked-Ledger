Click me to auto generate a new Session Note Page. It will auto increment the session number. 

```button
name New Session Note
type line(1) text
action <% tp.user.next_session() %>
templater true
replace [1,1]
```
