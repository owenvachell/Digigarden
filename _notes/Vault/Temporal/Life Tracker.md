
---
aliases:
---

## Wellbeing
```dataview
TABLE  
sum(list(morning.energy, afternoon.energy, evening.energy)) AS energy, sum(list(morning.mindful, afternoon.mindful, evening.mindful)) AS mindfulness, 
sum(list(morning.mood, afternoon.mood, evening.mood)) AS mood, sum(list(sum(list(morning.energy, afternoon.energy, evening.energy)), sum(list(morning.mindful, afternoon.mindful, evening.mindful)), sum(list(morning.mood, afternoon.mood, evening.mood)))) AS total
FROM "Temporal/Daily notes"
WHERE file.ctime >= date(today) - dur(7 days)
SORT file.ctime
```

## Habits
```dataview
TABLE 
default(habits.morning-routine, "❌") AS "morning routine", 
default(habits.evening-routine, "❌") AS "evening routine",
default(habits.eat-healthy, "❌") AS "eat healthy", 
default(habits.pn-habit, "❌") AS "PN habit",
default(habits.study, "❌") AS study
FROM "Temporal/Daily notes"
WHERE file.ctime >= date(today) - dur(7 days)
SORT file.ctime
```


## Food journal
```dataview
TABLE 
default(food-journal.breakfast, "❌") AS breakfast, 
default(food-journal.lunch, "❌") AS lunch, 
default(food-journal.dinner, "❌") AS dinner,
default(food-journal.snacks, "❌") AS snacks
FROM "Temporal/Daily notes"
WHERE file.ctime >= date(today) - dur(7 days)
SORT file.ctime
```