---
aliases: 
---
Bad! Evil! No good!


```dataview
table date as "Date"
from "Session_Notes"
where contains(file.outlinks, this.file.link) and contains(file.tags, "session")
sort session_number desc
```