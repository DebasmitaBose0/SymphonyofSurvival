## 🌳 Features  

✨ **Interactive Visualization** – Forest cover (green), loss (red), gain (blue), combined gain/loss (magenta).  
📊 **Analytical Insights** – Computes total area of forest loss in Congo and within protected zones.  
🛰️ **Satellite Data Powered** – Uses verified open datasets from Google Earth Engine.  
💡 **Policy Support Tool** – Supports data-driven decision making for conservation and forest management.  
🪶 **Simple & Modular** – Clean, reusable JavaScript structure for easy modification.  

---

## 🗺️ Datasets Used  

| Dataset | Source | Description |
|----------|---------|-------------|
| 🌲 **UMD/Hansen Global Forest Change v1.5** | University of Maryland / Google | Annual tree cover, loss, and gain data from 2000 onward |
| 🧭 **USDOS/LSIB_SIMPLE/2017** | U.S. Department of State | Simplified international boundaries |
| 🏞️ **WCMC/WDPA/current/polygons** | UNEP-WCMC | World Database on Protected Areas polygons |

---

## 🧩 Tech Stack  

- **Language:** JavaScript  
- **Platform:** Google Earth Engine Code Editor  
- **Tools:** Earth Engine API, Remote Sensing datasets  
- **IDE:** Visual Studio Code  
- **Version Control:** Git & GitHub  

---

## 🚀 How It Works  

1. **Load and visualize** forest cover, loss, and gain layers from the Hansen dataset.  
2. **Filter** the region of interest — Republic of the Congo.  
3. **Intersect** with global protected area polygons (WDPA).  
4. **Compute** area of deforestation for the country and for protected areas.  
5. **Display** results in the Earth Engine Console and map viewer.  

---

## 🧮 Example Output  

```bash
Area lost in the Congo Republic: 123456789 square meters  
Area lost in protected areas: 98765432 square meters  

