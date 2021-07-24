### Weekly Review:
**Week commencing:** <% tp.date.now("dddd Do MMMM YYYY", -6) %>

```dataview
LIST file.day
FROM "Temporal/Daily notes"
WHERE file.ctime > this.file.ctime - dur(7 days)
SORT file.ctime 
```

#### Summary

---
#### Goals

- Review [[2021 Goals]]

![[Life Tracker]]

---