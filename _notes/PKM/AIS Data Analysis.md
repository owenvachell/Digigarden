---
aliases:
  - null
cssclass: null
url: https://www.youtube.com/watch?v=dRE9Zl7jpUA&ab\_channel=RGS-IBGGIScienceResearchGroup
channel:
---

- `Type:` [[+]]
- `Tags:` #geography/transport/ais
- [source](https://www.youtube.com/watch?v=dRE9Zl7jpUA&ab\_channel=RGS-IBGGIScienceResearchGroup)

---

<center><iframe width="560" height="315" src="https://www.youtube.com/embed/dRE9Zl7jpUA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></center>

---

## Key points
- high variability in heading data is highly likely an indication of an anchorage
- high traffic density and high speed indicates a collision risk and therefore useful to port authorities

### Original notes

- Exploratory Analysis of Movement data
      ==Other research Adrienko & Adrienko==
    - Maritime
        - unreliable
            - movement, speed & direction
            - trip destination
            - vessel identity
            - timestamps
                - collected by receiver - not sent with tx
        - concepts
            - location records
            - movement prototypes
                - grid based aggregations
                    - density grids not good enough
                    -  ![Prototype Aggregation](https://dynalist.io/u/nWbb4X1acfNKZSGspcYSJopA) 
                    - proposal
                        - multiple prototypes per cell
                            -  ![GMM](https://dynalist.io/u/ZcY9yWSCvZitnsZM3MuKxry6) 
                            - direction sigma indicates aggregated courses from vessels. So dark areas mean high variation in vessel course and is potentially a risky area to navigate
                            - gaussian mixture models (GMM)
                                - location
                                - speed
                                - direction
                                - count
                            -  ![technical process](https://dynalist.io/u/RFud-OylGKIpV-V1oWOcp3Bp) 
                            -  ![technical architecture](https://dynalist.io/u/5NWClVoxOxPMzyRqYkbZxzY-) 
                            -  ![Interesting anomaly detection piece that would be useful for spotting sanctions avoidance](https://dynalist.io/u/mQhgEm8qlosKCuSQU\_GLVu27) 
            - trajectories
                - aggregation
                    - clean & split at stops & observation gaps
                    - challenges
                        - sorting in chronoogical order
                        - long trips in time and distance
                    - implementation
                        - iteratively process sorted rcords WITHOUT materializing
                        - multiple node cluster (6 or more)
                        - research paper on this goes into more detail
                    - questions to analyse
                        - travel times between ports
                            - by vessel type
                        - seasonal variation
                        - destination predictions
            - flows
                -  ![technical process](https://dynalist.io/u/Izd6o4AkX1KOqxsXJSXBniOX) 
                - questions to analyse
                    - typical shipping routes
                -  ![notice the circled area of heading variations - indicates likely anchorage](https://dynalist.io/u/0Ur29muZFBx4sIRllHQuW\_Pv)
                -  ![thick lines and high speeds highlights areas of navigational risk -  interesting to port authorities for port management](https://dynalist.io/u/9qJZZYSuUSdMCPzYz2eMOOKB)  
                - flows can be used to match existing known flows and therefore predict likely destination


#Inbox