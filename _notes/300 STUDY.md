---
tags: moc
aliases: [Study]
---

[[000 START HERE|Home]] | [[Study Skills]] 

## Degree

**How to use:**
1. Create a sub-heading for each study module. Use U116 as a template.
2. Create a new block MOC using the `Study Block MOC` template
3. Use the `Study Notes` template to make notes during the block. Remember to fill in the YAML correctly to populate the block MOC.

### U116 - Environment, Journeys Through a Changing World
```dataview
TABLE striptime(file.mtime) AS "Last Visited"
FROM #Study/Block/MOC
AND [[U116]]
AND !"Utils"
SORT file.name
```

## CPD
### How to use
Create a file using the CPD template for each new course. Make notes directly in that file, then use the refactor plugin to turn each section into it's own, atomic note. the template is setup to show all inbound links to that newly created file. Refactoring is setup to automatically add a link to that file. As a result of these configurations, dataview will serve up the MOC for that course. 

### Courses in progress
```dataview
TABLE topics AS Topics, (date(dates.end)-date(today)) AS "Days Left", striptime(file.mtime) AS "Last Visited"
FROM #Study/CPD 
AND !"Utils"
WHERE status = "active"
SORT (date(dates.end)-date(today))
```

#### Completed courses
```dataview
TABLE topics AS Topics, striptime(file.mtime) AS "Last Visited"
FROM #Study/CPD 
AND !"Utils"
WHERE status = "completed"
SORT (date(dates.end)-date(today))
```

### Planned courses
[Decision Making in a Complex and Uncertain World](https://www.futurelearn.com/courses/complexity-and-uncertainty)
[Intro to Organisational Behaviour - FutureLearn](https://www.futurelearn.com/courses/introduction-organisational-behaviour)

