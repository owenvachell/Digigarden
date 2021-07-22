
---
aliases:
---

### In the last hour

```dataview
TABLE regexreplace(file.folder, "\/(.*)", "") AS "Top Level", (date(now) - file.mtime).minutes AS "Modified (mins)"
FROM ""
AND !"Attachments"
AND !"Media"
AND !"Templates"
AND !"Temporal"
WHERE file.mtime > date(now) - dur(1 hour)
SORT (date(now) - file.mtime).minutes
```


### 1-3 hours ago

```dataview
TABLE regexreplace(file.folder, "\/(.*)", "") AS "Top Level", (date(now) - file.mtime).minutes AS "Modified (mins)"
FROM ""
AND !"Attachments"
AND !"Media"
AND !"Templates"
AND !"Temporal"
WHERE file.mtime > date(now) - dur(3 hours)
AND file.mtime < date(now) - dur(1 hour)
SORT (date(now) - file.mtime).minutes
```

#nograph 