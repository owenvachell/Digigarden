## MOCs

```dataview
TABLE striptime(file.mtime) AS "Last Visited"
FROM #moc
AND !"Utils"
SORT file.name
```

## Top 10 Vault Files 
A summary of files in my vault to keep track of things that might have gotten lost
### Size
```dataview
TABLE file.size AS Size, striptime(file.mtime) AS "Last Visited"
FROM "PKM"
SORT file.size DESC
LIMIT 10
```

### Longest unmodified
```dataview
TABLE striptime(file.mtime) AS "Last Visited"
FROM "PKM"
SORT file.mtime ASC
LIMIT 10
```

## Tasks
![[TASKS]]




