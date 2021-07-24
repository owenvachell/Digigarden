---
tags: Journal/<%tp.date.now("YYYY")%>/<%tp.date.now("MMM")%>
aliases: [<%tp.date.now("dddd")%>, <% tp.file.creation_date("dddd Do MMMM YYYY") %>]
sleep: 
morning:
  energy: 
  mindful: 
  mood: 
afternoon:
  energy:
  mindful:
  mood:
evening:
  energy:
  mindful:
  mood:
habits:
  study:
  routine: 
  eat-healthy:
  pn-habit: 
food-journal:
  breakfast: 
  lunch: 
  dinner: 
  snacks:
---
#### <% tp.file.creation_date("dddd Do MMMM YYYY") %>


[[What's on my mind]] | [[Precision Nutrition]]

--- 
##### On This Day, 1-year ago

```dataview
LIST
FROM ""
AND !"Attachments"
AND !"Templates"
WHERE striptime(file.ctime) = this.file.day - dur(1 year)
SORT file.name
```

---
#### What happened yesterday

[[<%tp.date.now("YYYY-MM-DD", -1)%>|Daily Note]]

##### Created

```dataview
LIST regexreplace(file.folder, "\/(.*)", "")
FROM ""
AND !"Attachments"
AND !"Templates"
AND !"Temporal"
WHERE file.ctime >= this.file.day - dur(1 day)
SORT file.name
```

##### Modified

```dataview
LIST regexreplace(file.folder, "\/(.*)", "")
FROM ""
AND !"Attachments"
AND !"Templates"
AND !"Temporal"
WHERE file.mtime >= this.file.day - dur(1 day)
AND file.ctime < this.file.day - dur(1day)
SORT file.name
```

---

#### What to do today

###### Morning
- Make coffee
- Drink a glass of water

###### Evening
- Prep lunch for tomorrow while making dinner


<%* if (tp.date.now("M-D") == "1-1") { %>
```button
name Make yearly note
type note(Temporal/Yearly/<%tp.date.now("YYYY-[Y]")%>, split) template
action Temporal/yearly
remove true
```
<%* } %>
<%* if (tp.date.now("D") == 1) { %>
```button
name Make monthly note
type note(Temporal/Monthly/<%tp.date.now("YYYY-[M]MM")%>, split) template
action Temporal/monthly
remove true
```
<%* } %>
<%* if (tp.date.now("ddd") == "Sun") { %>
```button
name Make weekly note
type note(Temporal/Weekly/<%tp.date.now("YYYY-[W]ww")%>, split) template
action Temporal/Weekly
remove true
```
<%* } %>
