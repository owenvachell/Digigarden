---
tags: Study/Block/MOC
aliases: 
module: U116
block: Arctic
---

[[300 STUDY|Study Home]] | [[U116]] | [[Study Skills]] | [[Assignment Guide]]

## How to use this MOC
1. Create any new course notes at the bottom of this file
2. Refactor them to auto-insert link to this MOC
3. Alternatively, ensure any new study notes contain links to the relevant MOC

## Study Notes

```dataview
TABLE part, section, striptime(file.mtime) AS "Last Visited"
FROM #Study 
AND [[Arctic]]
AND !"Utils"
WHERE note-type = "study"
SORT file.ctime
```

## Assignment Notes

```dataview
TABLE part, section, striptime(file.mtime) AS "Last Visited"
FROM #Study 
AND [[Arctic]]
AND !"Utils"
WHERE note-type = "assignment"
SORT file.ctime
```