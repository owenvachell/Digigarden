---
tags: moc
aliases: projects
---

[[000 START HERE|Start Here]]

## In progress
```dataview
TABLE (date(now) - file.mtime).days AS "Last Visited (days)"
FROM #GTD/Projects/Live
AND !"Utils"
SORT file.mtime
```

## On hold
```dataview
TABLE (date(now) - file.mtime).days AS "Last Visited (days)"
FROM #GTD/Projects/Hold
AND !"Utils"
SORT file.mtime
```

## Blog
```dataview
TABLE striptime(file.mtime) AS Created, date AS Published
FROM "My-Personal-Blog/content/posts"
SORT date, file.mtime
```





