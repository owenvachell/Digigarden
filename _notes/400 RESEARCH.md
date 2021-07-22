---
tags: [moc, research]
aliases: [research]
---

[[000 START HERE|Start here]]

## In progress
```dataview
TABLE striptime(file.mtime) AS "Last Visited"
FROM #Research/Ideas/Live 
AND !"Utils"
SORT file.mtime
```

## On hold
```dataview
TABLE striptime(file.mtime) AS "Last Visited"
FROM #Research/Ideas/Hold 
AND !"Utils"
SORT file.mtime
```

## Ideas
```dataview
TABLE striptime(file.mtime) AS "Last Visited"
FROM #Research/Ideas 
AND !"Utils"
SORT file.mtime DESC
```

## Resources
```dataview
TABLE striptime(file.mtime) AS "Last Visited"
FROM #Research/Skills
SORT file.name
```

