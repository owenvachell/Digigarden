---
tags: settings
aliases: null
cssclass: kanban_table
---

| 🌱️           | 🌿️           | 🌞️           |
| ------------- | ------------- | ------------- |
| ![[💳️ Kanban#^cf60fd]] | ![[💳️ Kanban#^ef5588]] | ![[💳️ Kanban#^be3c0c]] | 

```dataview
table tags, file.ctime.year as CY, file.ctime.month as CM, file.ctime.day as CD, file.mtime.year as MY, file.mtime.month as MM, file.mtime.day as MD
from ""
where tags = "📝️/🌱️"
sort file.ctime asc
```

^cf60fd

```dataview
table tags, file.ctime.year as CY, file.ctime.month as CM, file.ctime.day as CD, file.mtime.year as MY, file.mtime.month as MM, file.mtime.day as MD
from ""
where tags = "📝️/🌿️"
sort file.ctime asc
```

^ef5588

```dataview
table tags, file.ctime.year as CY, file.ctime.month as CM, file.ctime.day as CD, file.mtime.year as MY, file.mtime.month as MM, file.mtime.day as MD
from ""
where tags = "📝️/🌞️"
sort file.ctime asc
```

^be3c0c